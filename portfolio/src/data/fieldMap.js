// Domain content is separate from project metadata; associations resolve canonical project IDs.
export const fieldDomains = [
  {
    id: "web", number: "01", label: "WEB", marker: "Application layer", focus: "Full-stack applications",
    description: "Building complete web systems from interface to backend and data.",
    tools: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
    projectIds: ["connectwell", "attendai-pro", "paperforge"],
    position: { left: "7%", top: "12.3%" }, path: "M430 270H335V99H280",
  },
  {
    id: "ai", number: "02", label: "AI", marker: "Intelligent workflows", focus: "Computer vision & local AI",
    description: "Exploring practical computer vision and local intelligent workflows.",
    tools: ["Python", "Computer Vision", "Local AI", "Ollama"],
    projectIds: ["passport-photo-studio", "paperforge"],
    relationshipNotes: { "passport-photo-studio": "OpenCV alignment assistance", paperforge: "Optional AI integrations" },
    // AttendAI is deliberately excluded: face recognition is future scope in its current README.
    position: { left: "73%", top: "11.5%" }, path: "M590 270H665V94H730",
  },
  {
    id: "mobile", number: "03", label: "MOBILE", marker: "On-device products", focus: "Focused Android utilities",
    description: "Creating focused mobile tools with Flutter.",
    tools: ["Flutter", "Dart"], projectIds: ["pacepdf"],
    position: { left: "40.5%", top: "72.1%" }, path: "M500 316V440",
  },
  {
    id: "iot", number: "04", label: "IOT", marker: "Physical interfaces", focus: "Sensors & connected devices",
    description: "Connecting software with physical sensors and devices.",
    tools: ["ESP32", "Sensors", "Automation"], projectIds: ["iot-plant-monitoring"],
    position: { left: "74%", top: "59.8%" }, path: "M590 285H670V389H740",
  },
  {
    id: "engineering", number: "05", label: "ENGINEERING", marker: "Systems foundation", focus: "Electronics & computer science",
    description: "Combining electronics and computer science fundamentals with software systems.",
    tools: ["Electronics", "Computer Science", "Embedded Systems", "System Design"],
    projectIds: ["iot-plant-monitoring"],
    position: { left: "7%", top: "60.7%" }, path: "M430 285H330V394H280",
  },
];
