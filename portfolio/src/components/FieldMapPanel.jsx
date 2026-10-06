import { projects } from "../data/projects";

export default function FieldMapPanel({ domain, onOpenProject, compact = false }) {
  if (!domain) return <div className="field-panel field-panel-empty" id="field-map-panel">
    <span className="technical-label">Domain / Not selected</span><h3>Select a connection.</h3><p>Choose a domain to explore its tools and the projects behind them.</p>
  </div>;
  const related = domain.projectIds.map(id => projects.find(project => project.id === id)).filter(Boolean);
  const RelatedHeading = compact ? "h3" : "h4";
  return <div className={`field-panel${compact ? " is-compact" : ""}`} id={compact ? undefined : "field-map-panel"}>
    {!compact && <div className="field-panel-domain"><span className="technical-label">Domain / {domain.number}</span><h3>{domain.label}</h3></div>}
    <div className="field-panel-focus"><span className="technical-label">Focus</span><p className="field-focus-name">{domain.focus}</p><p>{domain.description}</p>
      {!compact && <><span className="technical-label field-tools-label">Tools</span><p className="field-tools-text">{domain.tools.join(" / ")}</p></>}
    </div>
    <div className="field-panel-projects"><RelatedHeading className="technical-label">Related projects</RelatedHeading>
      <ul>{related.map(project => <li key={project.id}><button className="field-project-link" type="button" aria-haspopup="dialog" onClick={event => onOpenProject(project, event.currentTarget)}>
        <span>{project.title}{domain.relationshipNotes?.[project.id] && <small>{domain.relationshipNotes[project.id]}</small>}</span><span aria-hidden="true">↗</span>
      </button></li>)}</ul>
    </div>
  </div>;
}
