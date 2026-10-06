import { motion } from "framer-motion";

export default function TechnicalGrid({ reducedMotion }) {
  return (
    <div className="technical-grid" aria-hidden="true">
      <svg viewBox="0 0 600 700" fill="none" preserveAspectRatio="xMidYMid meet">
        <g className="grid-construction">
          <path d="M0 100H600M0 200H600M0 300H600M0 400H600M0 500H600M0 600H600M100 0V700M200 0V700M300 0V700M400 0V700M500 0V700" />
          <circle cx="300" cy="340" r="245" />
          <circle cx="300" cy="340" r="195" strokeDasharray="3 9" />
          <path d="M300 0V700M0 340H600" strokeDasharray="3 7" />
        </g>
        <motion.path className="grid-accent-path" d="M45 495V135H190M410 545H555V185"
          initial={reducedMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: reducedMotion ? 0 : 1.4, delay: reducedMotion ? 0 : 0.3, ease: "easeOut" }} />
        <g className="grid-crosshairs">
          <path d="M33 135H57M45 123V147M543 545H567M555 533V557M288 95H312M300 83V107M288 585H312M300 573V597" />
        </g>
        <g className="grid-nodes">
          <rect x="41" y="491" width="8" height="8" />
          <rect x="551" y="181" width="8" height="8" />
          <rect x="186" y="131" width="8" height="8" />
          <rect x="406" y="541" width="8" height="8" />
        </g>
      </svg>
      <span className="grid-coordinate coordinate-top technical-label">X.019 / Y.026</span>
      <span className="grid-coordinate coordinate-bottom technical-label">FIG. 01 / SUBJECT: FS.</span>
    </div>
  );
}
