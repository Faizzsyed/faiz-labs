import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { projects, filterCategories } from "../data/projects";
import ProjectRow from "./ProjectRow";
import ProjectPreview from "./ProjectPreview";
import ProjectDialog from "./ProjectDialog";
import "../styles/work.css";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [preview, setPreview] = useState(null);
  const [selected, setSelected] = useState(null);
  const triggerRef = useRef(null);
  const previewRef = useRef(null);
  const visible = filter === "All" ? projects : projects.filter(project => project.filters.includes(filter));
  const open = (project, trigger) => { triggerRef.current = trigger; setPreview(null); setSelected(project); };
  const selectFilter = category => { setFilter(category); setPreview(null); };

  return <section className="work-section container section-spacing" id="work" aria-labelledby="work-heading">
    <div className="work-section-label technical-label"><span>01 / Selected Work</span><span>Independent products &amp; systems</span></div>
    <div className="work-heading-row"><h2 id="work-heading">Built,<br />tested,<br /><span>shipped.</span></h2><p>A selection of products and systems built across web, mobile, Python, intelligent tools, and connected hardware.</p></div>
    <div className="work-controls"><div className="work-filters" role="group" aria-label="Filter selected projects">
      {filterCategories.map(category => <button key={category} className="work-filter technical-label" type="button" aria-pressed={filter === category} onClick={() => selectFilter(category)}>{category}</button>)}
    </div><p className="work-count technical-label" role="status" aria-live="polite">{String(visible.length).padStart(2, "0")} / {filter === "All" ? "Selected projects" : `${filter} projects`}</p></div>
    <div className="work-index">
      <ol className="work-list" onPointerLeave={() => setPreview(null)}>
        <AnimatePresence initial={false}>
          {visible.map(project => <ProjectRow key={project.id} project={project} onOpen={open} onPreview={setPreview} onMove={event => previewRef.current?.move(event)} />)}
        </AnimatePresence>
      </ol>
      <ProjectPreview ref={previewRef} project={preview} />
    </div>
    <div className="work-endnote technical-label"><span>From concept to something useful.</span><a href="#pacepdf">Inside the featured product <span aria-hidden="true">↓</span></a></div>
    <ProjectDialog project={selected} onClose={() => setSelected(null)} triggerRef={triggerRef} />
  </section>;
}
