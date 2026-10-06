import { projects } from "./projects";
export const skillGroups = [
  { id: "web", title: "Web systems", technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase"] },
  { id: "mobile", title: "Mobile", technologies: ["Flutter", "Dart"] },
  { id: "intelligent", title: "Intelligent tools", technologies: ["Python", "OpenCV", "Pillow", "Local AI", "Ollama"] },
  { id: "hardware", title: "Hardware", technologies: ["ESP32", "IoT Sensors"] },
  { id: "tools", title: "Tools", technologies: ["Git", "GitHub", "Cloudinary"] },
  { id: "core", title: "Core", technologies: ["JavaScript", "HTML", "CSS"] },
];
// Match only documented technologies; normalize display-name aliases.
const aliases = { "React.js": "React", "Express.js": "Express", "IoT Sensors": "IoT sensors" };
export function relatedProjects(technology) {
  return projects.filter((project) => project.tech.includes(aliases[technology] ?? technology));
}
