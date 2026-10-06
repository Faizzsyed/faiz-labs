import { useState } from "react";

export default function ProjectVisual({ project, decorative = false }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`project-visual${!project.image || failed ? " is-placeholder" : ""}`}>
      {project.image && !failed ? <img src={project.image} alt={decorative ? "" : project.imageAlt}
        loading="lazy" decoding="async" width={project.imageWidth} height={project.imageHeight} onError={() => setFailed(true)} /> :
        <div className="editorial-placeholder">
          <span className="technical-label">{project.category} / {project.number}</span>
          <span className="placeholder-word" aria-hidden="true">{project.id === "pacepdf" ? "PDF" : project.id === "iot-plant-monitoring" ? "IoT" : "WEB"}</span>
          <span className="technical-label">{failed ? "Image unavailable" : project.imageLabel}<br />Visual placeholder</span>
        </div>}
    </div>
  );
}
