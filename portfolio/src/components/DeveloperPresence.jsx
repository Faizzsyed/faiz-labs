import { FaGithub, FaLinkedin, FaMobileAlt, FaDesktop, FaBrain } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

function DeveloperPresence() {
  return (
    <section className="developer-presence" id="presence">
      <div className="domain-strip">
        <div className="domain-item"><TbWorldWww className="domain-icon" /> Web Applications</div>
        <div className="domain-item"><FaMobileAlt className="domain-icon" /> Mobile Utilities</div>
        <div className="domain-item"><FaDesktop className="domain-icon" /> Desktop Software</div>
        <div className="domain-item"><FaBrain className="domain-icon" /> AI Experiments</div>
      </div>

      <div className="section-header">
        <h2>Find Me Online</h2>
      </div>

      <div className="social-cards-container">
        <a href="https://github.com/Faizzsyed" target="_blank" rel="noreferrer" className="social-profile-card">
          <div className="social-icon-wrapper">
            <FaGithub />
          </div>
          <div className="social-content">
            <h3>GitHub</h3>
            <p>Explore my repositories, experiments and project source code.</p>
            <span className="social-cta">View GitHub &rarr;</span>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/faizsayyed-tech" target="_blank" rel="noreferrer" className="social-profile-card">
          <div className="social-icon-wrapper">
            <FaLinkedin />
          </div>
          <div className="social-content">
            <h3>LinkedIn</h3>
            <p>Follow my development journey, projects and professional updates.</p>
            <span className="social-cta">Connect on LinkedIn &rarr;</span>
          </div>
        </a>
      </div>
    </section>
  );
}

export default DeveloperPresence;
