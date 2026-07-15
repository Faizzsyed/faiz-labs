function Projects() {

  const projects = [
    {
      title: "Automated Job Application Bot",
      desc: "AI-powered system that automatically finds relevant jobs and streamlines the application process.",
      tech: "n8n • OpenAI • Automation"
    },

    {
      title: "ESP32 Smart Home System",
      desc: "IoT-based home automation system to control appliances remotely using ESP32.",
      tech: "ESP32 • IoT • Sensors"
    },

    {
      title: "Personal Portfolio Website",
      desc: "Modern responsive portfolio built with React featuring animations and interactive UI.",
      tech: "React • CSS • Framer Motion"
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <span className="tech-stack">
              {project.tech}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;