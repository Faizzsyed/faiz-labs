import { useEffect, useRef, useState } from "react";
import { commands } from "../data/commands";
import { useTheme } from "../context/theme";
import { navigateToSection } from "../hooks/sectionNavigation";
export default function CommandPalette({ onClose, triggerRef }) {
  const dialogRef = useRef(null);
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const { toggleTheme } = useTheme();
  const matches = commands.filter(command => `${command.label} ${command.detail}`.toLowerCase().includes(query.trim().toLowerCase()));
  useEffect(() => {
    const dialog = dialogRef.current;
    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    inputRef.current?.focus();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus({ preventScroll: true });
    };
  }, [triggerRef]);
  useEffect(() => { dialogRef.current?.querySelector(`[data-command-index="${activeIndex}"]`)?.scrollIntoView({ block: "nearest" }); }, [activeIndex, query]);
  const activate = command => {
    if (!command) return;
    onClose();
    if (command.kind === "theme") toggleTheme();
    else if (command.kind === "section") requestAnimationFrame(() => navigateToSection(command.target));
    else if (command.kind === "download") {
      const link = document.createElement("a");
      link.href = command.target; link.download = "Faiz_Sayyed_Resume.pdf";
      link.rel = "noopener noreferrer"; link.target = "_blank";
      document.body.append(link); link.click(); link.remove();
    } else window.open(command.target, "_blank", "noopener,noreferrer");
  };
  const keyDown = event => {
    if (event.key === "Escape") {
      event.preventDefault(); event.stopPropagation(); onClose();
    } else if (["ArrowDown", "ArrowUp"].includes(event.key)) {
      event.preventDefault();
      if (matches.length) setActiveIndex(index => (index + (event.key === "ArrowDown" ? 1 : -1) + matches.length) % matches.length);
    } else if (event.key === "Enter" && event.target === inputRef.current) {
      event.preventDefault(); activate(matches[activeIndex]);
    } else if (event.key === "Tab") {
      const close = dialogRef.current.querySelector(".command-close");
      event.preventDefault();
      (document.activeElement === inputRef.current ? close : inputRef.current)?.focus();
    }
  };
  return <dialog ref={dialogRef} className="command-dialog" aria-labelledby="command-title" aria-describedby="command-help"
    onKeyDown={keyDown} onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="command-topline technical-label"><span>FS / COMMAND INDEX</span><button type="button" className="command-close" onClick={onClose} aria-label="ESC — Close command palette">ESC <span aria-hidden="true">×</span></button></div>
    <h2 id="command-title">Where next<span>?</span></h2>
    <label className="visually-hidden" htmlFor="command-search">Search commands</label>
    <input ref={inputRef} id="command-search" className="command-search" type="search" value={query} placeholder="Search the portfolio…" autoComplete="off"
      role="combobox" aria-expanded="true" aria-controls="command-results" aria-autocomplete="list"
      aria-activedescendant={matches[activeIndex] ? `command-${matches[activeIndex].id}` : undefined}
      onChange={event => { setQuery(event.target.value); setActiveIndex(0); }} />
    <div id="command-results" className="command-results" role="listbox" aria-label="Portfolio commands">
      {matches.map((command, index) => <button type="button" role="option" id={`command-${command.id}`} key={command.id}
        data-command-index={index} className="command-option" tabIndex={-1} aria-selected={index === activeIndex}
        onPointerMove={() => setActiveIndex(index)} onClick={() => activate(command)}>
        <span className="technical-label command-number">{String(commands.indexOf(command) + 1).padStart(2, "0")}</span>
        <span><span className="command-option-label">{command.label}</span><span className="technical-label command-detail">{command.detail}</span></span>
        <span aria-hidden="true">{command.kind === "section" ? "↓" : command.kind === "theme" ? "◐" : "↗"}</span>
      </button>)}
    </div>
    <p className="command-empty" role="status" aria-live="polite">{matches.length ? `${matches.length} commands available` : "No matching commands. Try work, contact, or theme."}</p>
    <p id="command-help" className="technical-label command-help">↑ ↓ Navigate / Enter Activate / Esc Close</p>
  </dialog>;
}
