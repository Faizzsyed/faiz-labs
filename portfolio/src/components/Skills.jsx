import { useState } from "react";
import { skillGroups, relatedProjects } from "../data/skills";
import "../styles/progression.css";
export default function Skills() {
  const [selected, setSelected] = useState("React.js");
  const related = relatedProjects(selected);
  return (
    <section id="skills" className="progression-section section-spacing" aria-labelledby="skills-title">
      <div className="container">
        <p className="technical-label progression-label">05 / SYSTEMS</p>
        <div className="progression-heading"><h2 id="skills-title">SYSTEMS<br /><span>I WORK WITH.</span></h2><p>A working toolkit across software, mobile, intelligent tools, and connected hardware.</p></div>
        <p className="systems-instruction technical-label">Select a technology / trace its project connections</p>
        <div className="systems-board">
          {skillGroups.map((group, index) => (
            <div key={group.id} className={`systems-group${group.technologies.includes(selected) ? " is-selected" : ""}`}>
              <div className="systems-group-heading"><span className="technical-label">{String(index + 1).padStart(2, "0")}</span><h3>{group.title}</h3><span className="systems-junction" aria-hidden="true">+</span></div>
              <ul>{group.technologies.map((technology) => <li key={technology}><button type="button" aria-pressed={selected === technology} aria-controls="skill-projects" onClick={() => setSelected(technology)}>{technology}<span aria-hidden="true">↗</span></button></li>)}</ul>
            </div>
          ))}
        </div>
        <div id="skill-projects" className="systems-related" role="status" aria-live="polite" aria-atomic="true">
          <p className="technical-label">{selected} / RELATED PROJECTS</p>
          <p>{related.length ? related.map((project) => project.title).join(" / ") : "In the toolkit. No documented connection to a selected project."}</p>
        </div>
      </div>
    </section>
  );
}
