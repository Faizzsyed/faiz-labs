import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-logo">Faiz Labs</h3>
        <p className="footer-credit">Built by Faiz Sayyed</p>

        <div className="footer-icons">
          <a
            href="https://github.com/Faizzsyed"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/faizsayyed-tech"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;