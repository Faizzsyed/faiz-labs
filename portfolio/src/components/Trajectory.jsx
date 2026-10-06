import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { trajectory } from "../data/trajectory";
import "../styles/progression.css";
export default function Trajectory() {
  const reduced = useReducedMotion();
  return (
    <section id="trajectory" className="progression-section section-spacing" aria-labelledby="trajectory-title">
      <div className="container">
        <p className="technical-label progression-label">03 / TRAJECTORY</p>
        <div className="progression-heading"><h2 id="trajectory-title">MOVING<br /><span>FORWARD.</span></h2><p>A path shaped by engineering, software, experimentation, and building real products.</p></div>
        <ol className="trajectory-line">
          {trajectory.map((item, index) => (
            <motion.li key={item.id} className={`trajectory-entry${item.id === "shipping" ? " is-current" : ""}`}
              initial={reduced ? false : { opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduced ? 0 : 0.35 }}>
              <div className="trajectory-coordinate technical-label"><span>{String(index + 1).padStart(2, "0")}</span><span>{item.type}</span></div>
              <p className="trajectory-year">{item.year}</p><span className="trajectory-marker" aria-hidden="true" />
              <h3>{item.title}</h3><p className="trajectory-place">{item.place}</p><p className="trajectory-detail">{item.detail}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
