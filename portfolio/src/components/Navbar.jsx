import { useEffect, useRef, useState } from "react";
import { navigation, cv } from "../data/navigation";
import { useActiveSection } from "../hooks/useActiveSection";
import { focusSection } from "../hooks/sectionNavigation";
import ThemeToggle from "./ThemeToggle";
const sectionIds = navigation.map(item => item.id);
export default function Navbar({ onOpenCommands }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);
  const active = useActiveSection(sectionIds);
  useEffect(() => {
    let frame = 0;
    const update = () => { frame = 0; setScrolled(window.scrollY > 24); };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const closeMenu = () => setIsOpen(false);
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("portfolio:close-menu", closeMenu);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", schedule); window.removeEventListener("portfolio:close-menu", closeMenu); };
  }, []);
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const background = Array.from(document.querySelectorAll("main, .site-footer"));
    const previousInert = background.map(element => element.inert);
    background.forEach(element => { element.inert = true; });
    panelRef.current?.querySelector("a")?.focus();
    const keyDown = event => {
      if (event.key === "Escape") { setIsOpen(false); toggleRef.current?.focus(); }
      if (event.key === "Tab") {
        const controls = [toggleRef.current, ...panelRef.current.querySelectorAll("a[href], button")];
        const first = controls[0]; const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    const desktop = window.matchMedia("(min-width: 901px)");
    const onDesktop = event => { if (event.matches) { setIsOpen(false); document.querySelector(".brand")?.focus(); } };
    window.addEventListener("keydown", keyDown);
    desktop.addEventListener("change", onDesktop);
    return () => { document.body.style.overflow = previousOverflow; background.forEach((element, index) => { element.inert = previousInert[index]; }); window.removeEventListener("keydown", keyDown); desktop.removeEventListener("change", onDesktop); };
  }, [isOpen]);
  const followSection = id => { setIsOpen(false); if (isOpen) requestAnimationFrame(() => focusSection(id)); };
  return <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
    <nav className="navbar container" aria-label="Main navigation">
      <a className="brand" href="#index" aria-label="FS. Engineering & Software — Faiz Sayyed — Index" onClick={() => followSection("index")}>
        <span className="brand-mark">FS<span>.</span></span><span className="brand-caption technical-label">ENGINEERING<br />&amp; SOFTWARE</span>
      </a>
      <button ref={toggleRef} className="menu-toggle technical-label" type="button" aria-expanded={isOpen} aria-controls="primary-navigation" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Menu"}<span className={`menu-symbol${isOpen ? " is-open" : ""}`} aria-hidden="true"><i /><i /></span>
      </button>
      <div ref={panelRef} className={`nav-panel${isOpen ? " is-open" : ""}`} id="primary-navigation">
        <ul className="nav-links">{navigation.map(item => <li key={item.id}><a href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined} onClick={() => followSection(item.id)}>{item.label}</a></li>)}</ul>
        <div className="nav-tools">
          <a className="cv-link technical-label" href={cv.path} target="_blank" rel="noopener noreferrer" data-cursor="CV ↗">CV <span aria-hidden="true">↗</span></a>
          <button className="commands-launcher technical-label" type="button" aria-haspopup="dialog" onClick={event => onOpenCommands(isOpen ? toggleRef.current : event.currentTarget)}>Commands <kbd aria-hidden="true">⌘ / Ctrl K</kbd></button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  </header>;
}
