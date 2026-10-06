import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function ProjectRow({ project, onOpen, onPreview, onMove }) {
  const reduced = useReducedMotion();
  return <motion.li layout={!reduced} className={`project-row${project.featured ? " is-featured" : ""}`}
    initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
    transition={{ duration: reduced ? 0 : 0.2 }}>
    <button className="project-trigger" type="button" aria-haspopup="dialog"
      onClick={event => onOpen(project, event.currentTarget)}
      onPointerEnter={event => { if (event.pointerType === "mouse" && navigator.maxTouchPoints === 0) onPreview(project); }}
      onPointerMove={onMove}>
      <span className="project-number technical-label">{project.number}</span>
      <span className="project-row-copy"><span className="project-title">{project.title}<span className="project-period" aria-hidden="true">.</span></span><span className="project-descriptor">{project.descriptor}</span></span>
      <span className="project-row-meta technical-label">
        <span className="project-category">{project.category}</span>
        <span className="project-year">{project.year ?? "Year unlisted"}</span>
        <span className="project-stack">{project.tech.join(" / ")}</span>
        <span className="project-status">{project.status}{project.featured ? " ↗" : ""}</span>
      </span>
      <span className="project-arrow" aria-hidden="true">↗</span>
    </button>
  </motion.li>;
}
