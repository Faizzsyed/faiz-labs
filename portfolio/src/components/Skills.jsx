function Skills() {
  const skillCategories = [
    {
      title: "Frontend & Web",
      skills: ["React", "JavaScript", "TypeScript"]
    },
    {
      title: "Backend & Cloud",
      skills: ["Node.js", "Express", "MongoDB", "Firebase"]
    },
    {
      title: "Software & AI",
      skills: ["Python", "Electron", "Flet", "Whisper", "OpenCV"]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-header">
        <h2>Skills & Technologies</h2>
      </div>

      <div className="skills-container">
        {skillCategories.map((category) => (
          <div className="skill-category" key={category.title}>
            <h3 className="category-title">{category.title}</h3>
            <div className="skill-chips">
              {category.skills.map((skill) => (
                <span className="skill-chip" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;