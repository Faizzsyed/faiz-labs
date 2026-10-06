import { useEffect, useRef } from "react";
export default function Cursor() {
  const cursorRef = useRef(null);
  const labelRef = useRef(null);
  useEffect(() => {
    const eligible = window.matchMedia("(min-width: 901px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    const cursor = cursorRef.current;
    let frame = 0;
    let x = 0; let y = 0;
    const hide = () => { cursor.dataset.visible = "false"; };
    const move = event => {
      if (!eligible.matches || event.pointerType === "touch" || document.querySelector("dialog[open]")) { hide(); return; }
      x = event.clientX; y = event.clientY;
      const target = event.target.closest("a, button, [data-cursor]");
      let label = target?.dataset.cursor ?? "";
      if (!label && target?.matches(".project-trigger, .field-project-link")) label = "VIEW";
      else if (!label && target?.matches("a")) {
        if (target.hasAttribute("download") || target.getAttribute("href")?.endsWith(".pdf")) label = "CV ↗";
        else if (/^(https?:|mailto:)/.test(target.getAttribute("href") ?? "")) label = "OPEN ↗";
      }
      cursor.dataset.visible = "true";
      cursor.dataset.link = Boolean(target);
      cursor.dataset.labeled = Boolean(label);
      if (labelRef.current.textContent !== label) labelRef.current.textContent = label;
      if (!frame) frame = requestAnimationFrame(() => { cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`; frame = 0; });
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("scroll", hide, { passive: true });
    document.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);
    eligible.addEventListener("change", hide);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", hide);
      document.removeEventListener("pointerleave", hide);
      window.removeEventListener("blur", hide);
      eligible.removeEventListener("change", hide);
    };
  }, []);
  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true"><span /><span ref={labelRef} className="cursor-label" /></div>;
}
