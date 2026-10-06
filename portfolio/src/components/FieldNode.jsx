import FieldMapPanel from "./FieldMapPanel";

export default function FieldNode({ domain, selected, active, muted, onSelect, onHighlight, onOpenProject, variant = "desktop" }) {
  const mobile = variant === "mobile";
  const panelId = `field-details-${variant}-${domain.id}`;
  return <li className={`field-node${selected ? " is-selected" : ""}${active ? " is-active" : ""}${muted ? " is-muted" : ""}`}
    style={mobile ? undefined : domain.position} data-domain={domain.id}
    onPointerEnter={event => { if (!mobile && event.pointerType === "mouse") onHighlight(domain.id); }}
    onPointerLeave={() => { if (!mobile) onHighlight(null); }}
    onFocus={() => { if (!mobile) onHighlight(domain.id); }}
    onBlur={event => { if (!mobile && !event.currentTarget.contains(event.relatedTarget)) onHighlight(null); }}>
    <button className="field-domain-button" type="button" onClick={() => onSelect(domain.id)}
      aria-pressed={mobile ? undefined : selected}
      aria-expanded={mobile ? selected : undefined} aria-controls={mobile ? panelId : "field-map-panel"}>
      <span className="field-node-number technical-label">{domain.number}</span><span className="field-node-name">{domain.label}<span className="visually-hidden"> domain</span></span><span className="field-node-mark" aria-hidden="true">{mobile ? selected ? "−" : "+" : "↗"}</span>
    </button>
    <span className="field-category-marker technical-label">{domain.marker}</span>
    {mobile ? <><p className="field-mobile-tools technical-label">{domain.tools.join(" / ")}</p>
      <div id={panelId} hidden={!selected}>{selected && <FieldMapPanel domain={domain} compact onOpenProject={onOpenProject} />}</div></> :
      <ul className="field-child-tools">{domain.tools.map(tool => <li key={tool}><span className="field-child-tick" aria-hidden="true" />{tool}</li>)}</ul>}
  </li>;
}
