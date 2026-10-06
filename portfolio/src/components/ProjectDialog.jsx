import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";
import ProjectVisual from "./ProjectVisual";

export default function ProjectDialog({ project, onClose, triggerRef }) {
  const dialogRef = useRef(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!project) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    dialog.querySelector("button")?.focus();
    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus({ preventScroll: true });
    };
  }, [project, triggerRef]);

  const containTab = event => {
    if (event.key !== "Tab") return;
    const controls = Array.from(event.currentTarget.querySelectorAll('button:not(:disabled), a[href]'));
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault(); last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first?.focus();
    }
  };

  return <dialog ref={dialogRef} className="project-dialog" aria-labelledby="project-dialog-title" aria-describedby="project-dialog-description"
    onKeyDown={containTab}
    onCancel={event => { event.preventDefault(); onClose(); }}
    onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    {project && <motion.div className="dialog-content" initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 12 }}
      animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : 0.2 }}>
      <div className="dialog-topline technical-label"><span>Project {project.number} / {project.category}</span>
        <button className="dialog-close" type="button" onClick={onClose} autoFocus aria-label="Close project details">Close <span aria-hidden="true">×</span></button></div>
      <div className="dialog-heading"><span className="technical-label dialog-status">{project.status}</span><h2 id="project-dialog-title">{project.fullTitle || project.title}<span aria-hidden="true">.</span></h2><p id="project-dialog-description">{project.description}</p></div>
      <div className="dialog-body">
        <figure className="dialog-image"><ProjectVisual key={project.id} project={project} /><figcaption className="technical-label">{project.imageLabel}</figcaption></figure>
        <div className="dialog-details">
          <dl className="dialog-facts"><div><dt className="technical-label">Role</dt><dd>{project.role}</dd></div><div><dt className="technical-label">Technology</dt><dd>{project.tech.join(" / ")}</dd></div><div><dt className="technical-label">Year</dt><dd>{project.year ?? "Not specified"}</dd></div></dl>
          <h3 className="technical-label">Core workflows</h3><ul className="dialog-features">{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
          {project.attribution && <p className="dialog-attribution">{project.attribution}</p>}
          <div className="project-links">
            {project.github && <a className="editorial-link technical-label" href={project.github} target="_blank" rel="noopener noreferrer">{project.githubLabel || "GitHub"} <span aria-hidden="true">↗</span></a>}
            {project.live && <a className="editorial-link technical-label" href={project.live} target="_blank" rel="noopener noreferrer">View live <span aria-hidden="true">↗</span></a>}
            {project.playStoreUrl && <a className="editorial-link technical-label" href={project.playStoreUrl} target="_blank" rel="noopener noreferrer">Google Play <span aria-hidden="true">↗</span></a>}
            {project.id === "pacepdf" && <a className="editorial-link technical-label" href="#pacepdf" onClick={onClose}>Read product story <span aria-hidden="true">↓</span></a>}
          </div>
        </div>
      </div>
    </motion.div>}
  </dialog>;
}
