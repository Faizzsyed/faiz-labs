import { experience } from "./experience";
import { pacePdf } from "./projects";
const python = experience.find((item) => item.id === "python-intern");
const tester = experience.find((item) => item.id === "tester-intern");
export const trajectory = [
  { id: "diploma", year: "2023", title: "Diploma in Information Technology", place: "Thakur Polytechnic", detail: "Kandivali, Mumbai", type: "Education" },
  { id: "engineering", year: "2023–2027", title: "Bachelor of Engineering", place: "Shree L. R. Tiwari College of Engineering", detail: "Electronics & Computer Science", type: "Education" },
  { id: tester.id, year: tester.year, title: tester.role, place: tester.company, detail: tester.focus, type: "Experience" },
  { id: python.id, year: python.year, title: python.role, place: python.company, detail: `${python.affiliation}. ${python.focus}`, type: "Experience" },
  { id: "shipping", year: "2026", title: "Building & shipping products", place: pacePdf.title, detail: "Independent software projects, web systems, mobile tools, and IoT experimentation.", type: "Practice" },
  { id: "next", year: "NEXT", title: "Full stack products", place: "Intelligent systems / Advanced engineering", detail: "The direction ahead: an aspiration for continued learning and building.", type: "Aspiration" },
];
