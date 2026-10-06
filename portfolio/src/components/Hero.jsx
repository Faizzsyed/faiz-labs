import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";
import portrait from "../assets/faiz-portrait.webp";
import TechnicalGrid from "./TechnicalGrid";
import "../styles/hero.css";

const categories = ["Full Stack Systems", "Mobile Products", "Intelligent Software"];
const facts = [
  { label: "Current focus", value: "Full Stack + Intelligent Systems" },
  { label: "Status", value: "Building and shipping real products" },
  { label: "Education", value: "B.E. Electronics & Computer Science" },
];

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const reveal = delay => ({
    initial: reducedMotion ? false : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reducedMotion ? 0 : 0.65, delay: reducedMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section className="hero container" id="index" aria-labelledby="hero-name">
      <div className="hero-topline technical-label">
        <span><span className="index-mark" aria-hidden="true" />Personal portfolio / Vol. 01</span>
        <span>Mumbai, India / 2026</span>
      </div>
      <div className="hero-composition">
        <div className="hero-copy">
          <motion.p className="hero-eyebrow technical-label" {...reveal(0.05)}>
            <span className="accent-marker" aria-hidden="true" />Engineering student &amp; product builder
          </motion.p>
          <h1 className="hero-name" id="hero-name" aria-label="Faiz Sayyed.">
            {["FAIZ", "SAYYED."].map((line, index) => <span className="name-mask" key={line} aria-hidden="true">
              <motion.span initial={reducedMotion ? false : { y: "105%" }} animate={{ y: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.85, delay: reducedMotion ? 0 : 0.1 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}>{line}</motion.span>
            </span>)}
          </h1>
          <motion.p className="hero-statement" {...reveal(0.35)}>
            Building software, intelligent systems,<br className="desktop-break" /> and products people can actually use.
          </motion.p>
          <motion.ul className="hero-categories technical-label" {...reveal(0.5)}>
            {categories.map((category, index) => <li key={category}><span className="category-index" aria-hidden="true">0{index + 1}</span>{category}</li>)}
          </motion.ul>
        </div>
        <div className="hero-identity">
          <TechnicalGrid reducedMotion={reducedMotion} />
          <motion.div className="identity-label technical-label" {...reveal(0.6)}><span>00 / Identity</span><span className="accent-marker" aria-hidden="true" /></motion.div>
          <motion.div className="portrait-frame" {...reveal(0.2)}>
            <img className="hero-portrait" src={portrait} width="1254" height="1254"
              alt="Faiz Sayyed wearing a charcoal blazer and black shirt" fetchPriority="high" decoding="async" />
          </motion.div>
          <motion.div className="portrait-caption" {...reveal(0.65)}>
            <p className="technical-label">Curious by design.</p>
            <span className="caption-rule" aria-hidden="true" />
            <p className="portrait-roles technical-label">Engineer<br />Developer<br />Builder</p>
          </motion.div>
        </div>
      </div>
      <motion.div className="hero-data-strip" {...reveal(0.7)}>
        <dl className="hero-facts">
          {facts.map(fact => <div className="hero-fact" key={fact.label}><dt className="technical-label">{fact.label}</dt><dd>{fact.value}</dd></div>)}
        </dl>
        <a className="hero-scroll technical-label" href="#hero-notes"><span>Explore the <br />connections</span><span className="scroll-arrow" aria-hidden="true">↓</span></a>
      </motion.div>
      <div className="hero-notes technical-label" id="hero-notes">
        <span>Electronics &amp; Computer Science</span><span>Designed with intent. Built with curiosity.</span><a href="#index">Back to index <span aria-hidden="true">↑</span></a>
      </div>
    </section>
  );
}
