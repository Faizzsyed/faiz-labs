import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Cursor from "../components/Cursor";
import Projects from "../components/Projects";
import PacePdfFeature from "../components/PacePdfFeature";
import FieldMap from "../components/FieldMap";
import Trajectory from "../components/Trajectory";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CommandPalette from "../components/CommandPalette";
import ScrollProgress from "../components/ScrollProgress";
import "../styles/completion.css";
export default function Home() {
  const [commandsOpen, setCommandsOpen] = useState(false);
  const commandTrigger = useRef(null);
  const openCommands = trigger => {
    if (document.querySelector("dialog[open]")) return;
    commandTrigger.current = trigger;
    window.dispatchEvent(new Event("portfolio:close-menu"));
    setCommandsOpen(true);
  };
  useEffect(() => {
    const shortcut = event => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k" && !event.altKey) {
        event.preventDefault();
        if (document.querySelector("dialog[open]:not(.command-dialog)")) return;
        if (!commandsOpen) {
          const menuOpen = document.querySelector(".nav-panel.is-open");
          commandTrigger.current = menuOpen ? document.querySelector(".menu-toggle") : document.activeElement;
          window.dispatchEvent(new Event("portfolio:close-menu"));
        }
        setCommandsOpen(current => !current);
      }
    };
    window.addEventListener("keydown", shortcut);
    return () => window.removeEventListener("keydown", shortcut);
  }, [commandsOpen]);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Cursor /><ScrollProgress /><Navbar onOpenCommands={openCommands} />
    <main id="main" tabIndex={-1}><Hero /><Projects /><PacePdfFeature /><FieldMap /><Trajectory /><Experience /><Skills /><Contact /></main>
    <Footer />
    {commandsOpen && <CommandPalette triggerRef={commandTrigger} onClose={() => setCommandsOpen(false)} />}
  </>;
}
