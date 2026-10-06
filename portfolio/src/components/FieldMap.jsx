import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { fieldDomains } from "../data/fieldMap";
import FieldNode from "./FieldNode";
import FieldMapPanel from "./FieldMapPanel";
import ProjectDialog from "./ProjectDialog";
import "../styles/field-map.css";

export default function FieldMap() {
  const [selectedId, setSelectedId] = useState(null);
  const [highlightedId, setHighlightedId] = useState(null);
  const [project, setProject] = useState(null);
  const triggerRef = useRef(null);
  const reduced = useReducedMotion();
  const selected = fieldDomains.find(domain => domain.id === selectedId);
  const activeId = highlightedId || selectedId;
  const select = id => setSelectedId(current => current === id ? null : id);
  const reset = () => { setSelectedId(null); setHighlightedId(null); };
  const openProject = (related, trigger) => { triggerRef.current = trigger; setProject(related); };

  return <section className="field-section container section-spacing" id="field-map" aria-labelledby="field-heading">
    <div className="field-topline technical-label"><span>02 / Field Map</span><span>Software ↔ physical systems</span></div>
    <div className="field-heading-row"><h2 id="field-heading">Where<br />the systems<br /><span>connect.</span></h2><p>A visual map of the technologies, tools, and systems I work across — from web platforms to embedded hardware.</p></div>
    <div className="field-toolbar"><p className="technical-label">05 domains / Connected by practice</p><button className="field-reset technical-label" type="button" onClick={reset} disabled={!selectedId}>Clear / reset <span aria-hidden="true">×</span></button></div>
    <p className="visually-hidden" role="status" aria-live="polite" aria-atomic="true">{selected ? `${selected.label} selected. Focus: ${selected.focus}. ${selected.projectIds.length} related projects available.` : "No domain selected."}</p>
    <div className="field-desktop">
      <div className="field-schematic">
        <motion.svg className="field-connectors" viewBox="0 0 1000 610" fill="none" aria-hidden="true" preserveAspectRatio="none"
          initial={reduced ? "visible" : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
          <g className="field-coordinate-ticks"><path d="M20 20H45M20 20V45M980 20H955M980 20V45M20 590H45M20 590V565M980 590H955M980 590V565M490 20H510M500 10V30M490 590H510M500 580V600" /><path d="M20 305H980" strokeDasharray="2 8" /></g>
          {fieldDomains.map(domain => <motion.path key={domain.id} data-path={domain.id} className={`field-connection${activeId === domain.id ? " is-active" : ""}${activeId && activeId !== domain.id ? " is-muted" : ""}`}
            d={domain.path} variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }} transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : Number(domain.number) * 0.07, ease: "easeOut" }} />)}
          <g className="field-junctions"><rect x="426" y="266" width="8" height="8" /><rect x="586" y="266" width="8" height="8" /><rect x="496" y="312" width="8" height="8" /><path d="M430 230H590V316H430Z" /></g>
          <g className="field-path-labels"><text x="341" y="150">DATA / INTERFACE</text><text x="675" y="190">VISION / LOGIC</text><text x="510" y="403">ON DEVICE</text><text x="677" y="354">SENSOR INPUT</text><text x="197" y="325">SYSTEM FOUNDATIONS</text></g>
        </motion.svg>
        <div className="field-hub" aria-hidden="true"><span>FS<span>.</span></span><p className="technical-label">System interface</p></div>
        <ol className="field-domain-list">{fieldDomains.map(domain => <FieldNode key={domain.id} domain={domain} selected={selectedId === domain.id} active={activeId === domain.id} muted={Boolean(activeId && activeId !== domain.id)} onSelect={select} onHighlight={setHighlightedId} onOpenProject={openProject} />)}</ol>
        <span className="field-coordinate technical-label" aria-hidden="true">SCHEMATIC 01 / RELATIONSHIPS, NOT RANKINGS</span>
      </div>
      <FieldMapPanel domain={selected} onOpenProject={openProject} />
    </div>
    <ol className="field-mobile">{fieldDomains.map(domain => <FieldNode key={domain.id} variant="mobile" domain={domain} selected={selectedId === domain.id} onSelect={select} onHighlight={setHighlightedId} onOpenProject={openProject} />)}</ol>
    <div className="field-endnote technical-label"><span>Different layers. Shared foundations.</span><span>Select a domain to follow its connections.</span></div>
    <ProjectDialog project={project} onClose={() => setProject(null)} triggerRef={triggerRef} />
  </section>;
}
