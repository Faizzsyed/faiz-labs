import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import AccentSwitcher from "./AccentSwitcher";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="navbar-logo">FAIZ SAYYED</a>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div className="desktop-switcher">
          <AccentSwitcher />
        </div>

        <div className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
        <li><a href="#experience" onClick={() => setIsOpen(false)}>Journey</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        <li className="mobile-switcher"><AccentSwitcher /></li>
      </ul>
    </nav>
  );
}

export default Navbar;