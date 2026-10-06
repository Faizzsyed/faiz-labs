import { contact } from "../data/contact";
import { cv } from "../data/navigation";
import { focusSection } from "../hooks/sectionNavigation";
export default function Footer() {
  return <footer className="site-footer container">
    <div className="footer-main"><div><p className="footer-name">FAIZ SAYYED<span>.</span></p><p className="technical-label footer-discipline">ENGINEERING &amp; SOFTWARE</p></div>
      <nav className="footer-links" aria-label="Footer links">
        <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={`mailto:${contact.email}`}>Email</a>
        <a href={cv.path} target="_blank" rel="noopener noreferrer" data-cursor="CV ↗">CV <span aria-hidden="true">↗</span></a>
      </nav>
      <a className="footer-top technical-label" href="#index" data-cursor="UP ↑" onClick={() => requestAnimationFrame(() => focusSection("index"))}>BACK TO TOP <span aria-hidden="true">↑</span></a>
    </div>
    <div className="footer-bottom technical-label"><span>© {new Date().getFullYear()} Faiz Sayyed</span><span>DESIGNED &amp; BUILT BY FAIZ SAYYED</span><span>BUILT WITH REACT / VITE</span></div>
  </footer>;
}
