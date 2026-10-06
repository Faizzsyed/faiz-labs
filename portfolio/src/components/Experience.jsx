import { experience } from "../data/experience";
import "../styles/progression.css";
export default function Experience() {
  return (
    <section id="experience" className="progression-section section-spacing" aria-labelledby="experience-title">
      <div className="container">
        <p className="technical-label progression-label">04 / EXPERIENCE</p>
        <div className="progression-heading"><h2 id="experience-title">WORKING<br /><span>IN THE REAL WORLD.</span></h2></div>
        <div className="experience-column-labels technical-label" aria-hidden="true"><span>Role</span><span>Company</span><span>Period</span><span>Focus</span></div>
        <ol className="experience-list">
          {experience.map((item, index) => (
            <li key={item.id} className="experience-row">
              <div><span className="technical-label experience-index">{String(index + 1).padStart(2, "0")} / ROLE</span><h3>{item.role}</h3></div>
              <div><span className="technical-label experience-mobile-label">Company</span><p className="experience-company">{item.company}</p>{item.affiliation && <p className="experience-affiliation">{item.affiliation}</p>}</div>
              <div><span className="technical-label experience-mobile-label">Period</span><p className="experience-period">{item.period}</p></div>
              <div><span className="technical-label experience-mobile-label">Focus</span><p className="experience-focus">{item.focus}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
