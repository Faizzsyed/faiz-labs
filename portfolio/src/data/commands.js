// Section labels and contact links are shared by navigation and the palette.
import { contact } from "./contact";
import { cv } from "./navigation";
export const commands = [
  { id: "work", label: "View Work", kind: "section", target: "work", detail: "Selected projects" },
  { id: "pacepdf", label: "Open PacePDF", kind: "section", target: "pacepdf", detail: "Product case study" },
  { id: "field-map", label: "Go to Field Map", kind: "section", target: "field-map", detail: "Connected disciplines" },
  { id: "trajectory", label: "Go to Trajectory", kind: "section", target: "trajectory", detail: "Engineering journey" },
  { id: "experience", label: "Go to Experience", kind: "section", target: "experience", detail: "Real-world work" },
  { id: "skills", label: "Go to Skills", kind: "section", target: "skills", detail: "Systems and tools" },
  { id: "contact", label: "Contact Me", kind: "section", target: "contact", detail: "Start a conversation" },
  { id: "github", label: "Open GitHub", kind: "external", target: contact.github, detail: "New tab" },
  { id: "linkedin", label: "Open LinkedIn", kind: "external", target: contact.linkedin, detail: "New tab" },
  { id: "cv", label: "Download CV", kind: "download", target: cv.path, detail: "PDF / Resume" },
  { id: "theme", label: "Toggle Theme", kind: "theme", detail: "Light / Dark" },
];
