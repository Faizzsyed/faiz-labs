import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <h3>Faiz Sayyed</h3>

      <p>Full Stack Developer • AI Automation</p>

      <div className="footer-icons">

        <a
          href="https://github.com/YOUR_GITHUB"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/faizsayyed-tech"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

      </div>
    </footer>
  );
}

export default Footer;