import { useEffect, useState } from "react";
export function useActiveSection(ids, fallback = "index") {
  const [active, setActive] = useState(fallback);
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("main > section[id]"));
    const owner = new Map();
    let current = fallback;
    sections.forEach(section => { if (ids.includes(section.id)) current = section.id; owner.set(section.id, current); });
    let observer;
    const observe = () => {
      observer?.disconnect();
      const visible = new Map();
      const top = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height")) + 32;
      const bottom = Math.max(0, window.innerHeight - top - 64);
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => { if (entry.isIntersecting) visible.set(entry.target.id, entry); else visible.delete(entry.target.id); });
        const candidates = Array.from(visible.values()).sort((a, b) => b.boundingClientRect.top - a.boundingClientRect.top);
        if (candidates.length) setActive(owner.get(candidates[0].target.id));
      }, { rootMargin: `-${top}px 0px -${bottom}px 0px`, threshold: 0 });
      sections.forEach(section => observer.observe(section));
    };
    observe();
    window.addEventListener("resize", observe);
    return () => { observer.disconnect(); window.removeEventListener("resize", observe); };
  }, [ids, fallback]);
  return active;
}
