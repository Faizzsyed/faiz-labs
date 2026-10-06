import { useEffect, useRef, useState } from "react";
import { contact } from "../data/contact";

function ContactIcon({ label }) {
  return <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    {label === "Email" ? <><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m3 6 9 7 9-7" /></> :
      label === "LinkedIn" ? <><rect x="3" y="3" width="18" height="18" rx="1" /><path d="M7.5 10v7M11.5 17v-7m0 3a3 3 0 0 1 6 0v4" /><circle cx="7.5" cy="7" r="0.75" fill="currentColor" stroke="none" /></> :
        <path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7M9 22v-3.8c0-1 .3-1.6.8-2.1-2.7-.3-5.5-1.3-5.5-6A4.7 4.7 0 0 1 5.6 7c-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1a4.7 4.7 0 0 1 1.3 3.2c0 4.7-2.8 5.7-5.5 6 .5.5.8 1.2.8 2.1V22" />}
  </svg>;
}

export default function Contact() {
  const [copyState, setCopyState] = useState("idle");
  const timer = useRef(0);
  const mounted = useRef(false);
  useEffect(() => { mounted.current = true; return () => { mounted.current = false; clearTimeout(timer.current); }; }, []);
  const copyEmail = async () => {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(contact.email);
      if (!mounted.current) return;
      setCopyState("copied");
    } catch {
      if (!mounted.current) return;
      setCopyState("failed");
    }
    timer.current = setTimeout(() => setCopyState("idle"), 2400);
  };
  const links = [
    { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { label: "LinkedIn", value: "/faizsayyed-tech", href: contact.linkedin, external: true },
    { label: "GitHub", value: "/Faizzsyed", href: contact.github, external: true },
  ];
  return <section id="contact" className="contact-section section-spacing" aria-labelledby="contact-title">
    <div className="container">
      <p className="technical-label contact-label">06 / CONTACT</p>
      <div className="contact-heading"><h2 id="contact-title">LET'S BUILD<br /><span>SOMETHING USEFUL.</span></h2>
        <p>Open to meaningful projects, collaborations, and conversations around software, products, and engineering.</p></div>
      <div className="contact-links">{links.map(link => <a key={link.label} className="contact-link" href={link.href}
        target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined}>
        <span className="contact-link-label technical-label"><ContactIcon label={link.label} />{link.label}</span><span className="contact-link-value">{link.value}</span><span className="contact-arrow" aria-hidden="true">↗</span>
      </a>)}</div>
      <div className="contact-copy-row" data-copy-state={copyState}><button type="button" className="copy-email technical-label" onClick={copyEmail} data-cursor="COPY">
        {copyState === "copied" ? "COPIED ✓" : "COPY EMAIL"}</button><p role="status" aria-live="polite" className="technical-label copy-status">
          {copyState === "copied" ? "Email copied to clipboard." : copyState === "failed" ? "Copy unavailable. Select the email above or open your email app." : "Software / Products / Engineering"}
        </p></div>
    </div>
  </section>;
}
