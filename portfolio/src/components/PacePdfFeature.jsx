import { useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { pacePdf } from "../data/projects";
import "../styles/pacepdf.css";

const steps = [
  { label: "Stack", note: "Three pages, collected in one stack.", positions: [[169, 48, 8], [151, 63, -6], [134, 78, 0]] },
  { label: "Split", note: "Give each page its own space.", positions: [[62, 80, -9], [259, 80, 9], [161, 61, 0]] },
  { label: "Arrange", note: "Find an order for the pages.", positions: [[57, 77, 0], [160, 57, 0], [263, 77, 0]] },
  { label: "Resolve", note: "Bring the ordered pages together.", positions: [[160, 57, 0], [147, 68, 0], [134, 79, 0]] },
];

function DocumentStudy({ step, reduced }) {
  return <svg className="pace-page-study" viewBox="0 0 520 390" fill="none" aria-hidden="true" focusable="false">
    <g className="pace-study-guides">
      <path d="M30 35H490M30 355H490M55 20V370M465 20V370M260 20V370" />
      <circle cx="260" cy="195" r="151" strokeDasharray="3 8" />
      <path d="M22 35H38M30 27V43M482 355H498M490 347V363" />
    </g>
    <path className="pace-study-route" d="M55 300H92V195H428V90H465" strokeDasharray="4 7" />
    {steps[step].positions.map(([x, y, rotate], index) => <motion.g key={index}
      initial={false} animate={{ x, y, rotate }} transition={{ duration: reduced ? 0 : 0.35, ease: "easeOut" }}>
      <rect className={`pace-sheet${index === 2 ? " pace-sheet-active" : ""}`} width="196" height="246" />
      <path className="pace-sheet-fold" d="M166 0V30H196" />
      <path className="pace-sheet-rule" d="M22 63H150M22 83H135M22 103H150M22 123H107M22 186H174" />
      <rect className="pace-sheet-marker" x="22" y="27" width="7" height="7" />
      <text className="pace-sheet-number" x="22" y="219">PAGE / {String(index + 1).padStart(2, "0")}</text>
      {index === 2 && <path className="pace-sheet-accent" d={step === 3 ? "M141 210L149 218L167 200" : "M142 210H172"} />}
    </motion.g>)}
    <g className="pace-study-nodes"><rect x="51" y="296" width="8" height="8" /><rect x="461" y="86" width="8" height="8" /></g>
    <text className="pace-study-coordinate" x="30" y="380">FIG. 01 / PAGE SYSTEM</text>
    <text className="pace-study-coordinate" x="402" y="380">{String(step + 1).padStart(2, "0")} / 04</text>
  </svg>;
}

export default function PacePdfFeature() {
  const reduced = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const productUrl = pacePdf.live || pacePdf.playStoreUrl;
  const reveal = { initial: reduced ? false : { opacity: 0, y: 12 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.15 }, transition: { duration: reduced ? 0 : 0.45 } };
  const ctaContent = <><span>Explore {pacePdf.title}</span><span className="technical-label">Product page</span><span className="pace-cta-arrow" aria-hidden="true">↗</span></>;

  return <section className="pace-section container section-spacing" id="pacepdf" aria-labelledby="pace-heading">
    <div className="pace-case-layout">
      <motion.div className="pace-document-panel" {...reveal}>
        <div className="pace-panel-meta technical-label"><span>Document study</span><span>PDF / 001</span></div>
        <h3>Documents,<br />in order.</h3>
        <DocumentStudy step={activeStep} reduced={reduced} />
        <div className="pace-study-steps" role="group" aria-label="Abstract document study steps" aria-describedby="pace-study-note">
          {steps.map((step, index) => <button type="button" key={step.label} aria-pressed={activeStep === index}
            aria-controls="pace-step-description" onClick={() => setActiveStep(index)}>
            <span className="technical-label">{String(index + 1).padStart(2, "0")}</span><span>{step.label}</span>
          </button>)}
        </div>
        <p className="pace-step-description" id="pace-step-description" role="status" aria-live="polite">{steps[activeStep].note}</p>
        <p className="pace-study-note technical-label" id="pace-study-note">Abstract page study · see the product for its tools</p>
      </motion.div>

      <motion.div className="pace-case-content" {...reveal}>
        <div className="pace-case-meta technical-label"><span>04 / Case file</span><span>Document utilities</span></div>
        <h2 id="pace-heading">{pacePdf.title}<span aria-hidden="true">.</span></h2>
        <p className="pace-case-statement">Fast, private PDF tools for everyday documents.</p>
        <p className="pace-case-description">A focused PDF utility project for everyday document workflows. The product page provides the details of the available tools.</p>
        <div className="pace-project-context">
          <h3 className="technical-label">Project context</h3>
          <ul><li><span aria-hidden="true">↳</span> PDF and document utilities</li><li><span aria-hidden="true">↳</span> Explore the available tools on the product page</li></ul>
        </div>
        <div className="pace-case-action">
          {productUrl ? <a className="pace-product-cta" href={productUrl} target="_blank" rel="noopener noreferrer">{ctaContent}</a> :
            <><button className="pace-product-cta" type="button" aria-disabled="true" aria-describedby="pace-link-note">{ctaContent}</button><p className="pace-link-note technical-label" id="pace-link-note">Product link coming soon.</p></>}
        </div>
      </motion.div>
    </div>
    <div className="pace-endnote technical-label"><span>Focused tools. Considered workflows.</span><a href="#work">Back to selected work <span aria-hidden="true">↑</span></a></div>
  </section>;
}
