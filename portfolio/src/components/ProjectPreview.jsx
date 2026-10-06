import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";
import ProjectVisual from "./ProjectVisual";

const ProjectPreview = forwardRef(function ProjectPreview({ project }, ref) {
  const shellRef = useRef(null);
  const animation = useRef({ frame: 0, x: 0, y: 0, tx: 0, ty: 0 });
  const reduced = useReducedMotion();
  useImperativeHandle(ref, () => ({
    move(event) {
      if (reduced || !window.matchMedia("(min-width: 1101px) and (hover: hover) and (pointer: fine)").matches || navigator.maxTouchPoints > 0) return;
      const a = animation.current;
      // Motion stays in its dedicated rail, away from project text and within the viewport.
      a.tx = Math.max(-6, Math.min(6, (event.clientX / window.innerWidth - 0.5) * 12));
      a.ty = Math.max(-12, Math.min(12, (event.clientY / window.innerHeight - 0.5) * 24));
      if (a.frame) return;
      const tick = () => {
        a.x += (a.tx - a.x) * 0.14;
        a.y += (a.ty - a.y) * 0.14;
        if (shellRef.current) shellRef.current.style.transform = `translate3d(${a.x}px, ${a.y}px, 0)`;
        if (Math.abs(a.tx - a.x) + Math.abs(a.ty - a.y) > 0.15) a.frame = requestAnimationFrame(tick);
        else a.frame = 0;
      };
      a.frame = requestAnimationFrame(tick);
    },
  }), [reduced]);
  useEffect(() => {
    const a = animation.current;
    if (reduced) {
      cancelAnimationFrame(a.frame);
      a.frame = a.x = a.y = a.tx = a.ty = 0;
      if (shellRef.current) shellRef.current.style.transform = "";
    }
    return () => cancelAnimationFrame(a.frame);
  }, [reduced]);
  return <aside className="preview-rail" aria-hidden="true">
    <div className="preview-sticky">
      <div className="preview-rest technical-label"><span className="accent-marker" />Move through<br />the index.<span className="preview-rest-arrow">↗</span></div>
      <div ref={shellRef} className="preview-shell">
        <AnimatePresence mode="wait">
          {project && <motion.div key={project.id} className="floating-preview"
            initial={{ opacity: 0, scale: reduced ? 1 : 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.16 }}>
            <ProjectVisual project={project} decorative />
            <div className="preview-caption technical-label"><span>{project.number} / {project.title}</span><span>{project.imageLabel}</span></div>
          </motion.div>}
        </AnimatePresence>
      </div>
    </div>
  </aside>;
});
export default ProjectPreview;
