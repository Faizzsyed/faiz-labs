function About() {
  return (
    <section className="about" id="about">
      <div className="section-header">
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <p className="about-text">
          Hi, I'm Faiz Sayyed, an Electronics & Computer Science Engineering student focused on building practical digital products.
          <br /><br />
          I work across full-stack web applications, mobile utilities, desktop software and AI-powered experiments. I enjoy taking an idea from an initial concept to a usable product — designing the interface, building the logic and refining the experience along the way.
          <br /><br />
          Most of my learning comes through building real projects, from PDF utilities and business platforms to e-commerce experiences, desktop assistants and experimental interactive applications.
        </p>

        <div className="what-i-build">
          <h3 className="build-heading">What I Build</h3>
          <div className="build-grid">
            <div className="build-card">
              <h4>Full Stack</h4>
              <p>React, Node.js and product-focused web applications</p>
            </div>
            <div className="build-card">
              <h4>Mobile</h4>
              <p>Flutter utilities and mobile-first experiences</p>
            </div>
            <div className="build-card">
              <h4>Desktop</h4>
              <p>Python and Electron-based desktop applications</p>
            </div>
            <div className="build-card">
              <h4>AI Experiments</h4>
              <p>Local AI, voice interfaces and intelligent workflows</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;