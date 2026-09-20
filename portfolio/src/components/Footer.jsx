import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-logo">Faiz Sayyed</h3>
        <p className="footer-credit">Electronics & Computer Science Engineering Student</p>

        <div className="footer-nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-icons">
          <a href="https://github.com/Faizzsyed" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/faizsayyed-tech" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
        
        <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}

export default Footer;