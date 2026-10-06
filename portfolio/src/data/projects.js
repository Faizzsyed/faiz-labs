// Canonical public project content. Unknown URLs/years remain null, never fabricated.
// Audit: 2026-10-06. Source: user brief + repository READMEs; see MILESTONE_3.md.
export const projects = [
  {
    id: "pacepdf", number: "01", title: "PacePDF", descriptor: "Mobile PDF toolkit",
    category: "Mobile product", filters: ["Mobile"], year: 2026,
    tech: ["Flutter", "Dart"], status: "Shipped product", featured: true,
    description: "A focused mobile utility designed to make everyday PDF tasks fast, private, and accessible directly on Android.",
    role: "Flutter application development", platform: "Android",
    features: ["Merge PDF files", "Split ranges or selected pages", "Organize and remove pages", "Text and image watermarks", "Place signatures on PDF pages", "Local file history and saved outputs", "Export and share documents"],
    github: null, live: null,
    // Add the actual published Google Play listing here. Do not substitute a search URL.
    playStoreUrl: null,
    image: null, imageLabel: "Product capture pending",
    // Populate with actual app captures: { src, alt, label }.
    screenshots: [],
    linkAudit: { github: "missing", live: "missing", store: "missing" },
    sourceNote: "Name, production status, features and year supplied in the portfolio brief. Store listing and app captures have not been supplied.",
  },
  {
    id: "connectwell", number: "02", title: "Connectwell", fullTitle: "Connectwell Digital Marketing Platform",
    descriptor: "Digital marketing intake & quotation platform", category: "Full stack platform", filters: ["Web"], year: null,
    tech: ["React", "Node.js", "Express", "MongoDB"], status: "Completed",
    description: "A business platform connecting client intake, admin review and quotations, with A4 PDF generation and WhatsApp-ready proposal delivery.",
    role: "Full stack application development",
    features: ["Client intake", "Admin review", "Protected access", "Quotation workflow", "A4 quotation PDF generation", "WhatsApp-ready proposals"],
    // The previous connectwell-digital URL returned 404 during the link audit.
    github: null, live: null, playStoreUrl: null,
    image: null, imageLabel: "Platform capture pending",
    linkAudit: { github: "invalid", live: "missing", store: "missing" },
    sourceNote: "User brief and existing portfolio data. Existing promotional image contains unverified metrics and is preserved but not published here.",
  },
  {
    id: "attendai-pro", number: "03", title: "AttendAI Pro", descriptor: "Multi-role academic management",
    category: "Web system", filters: ["Web"], year: null,
    tech: ["React", "Node.js", "Express", "MongoDB"], status: "In development",
    description: "An attendance and academic management platform with protected administrator, faculty and student portals, timetable workflows, requests and reporting.",
    role: "Full stack application development",
    features: ["Admin, faculty and student portals", "Protected role-based access", "Attendance tracking", "Timetable workflows", "Requests and complaints", "Reports and audit activity"],
    github: "https://github.com/Faizzsyed/attendai-pro", live: null, playStoreUrl: null,
    image: "/projects/attendai.jpg", imageWidth: 1024, imageHeight: 551, imageAlt: "AttendAI Pro academic platform landing page", imageLabel: "Existing landing-page capture",
    linkAudit: { github: "valid", live: "missing", store: "missing" },
    sourceNote: "Public README confirms MERN. Face recognition is future scope, not a shipped feature.",
  },
  {
    id: "passport-photo-studio", number: "04", title: "Passport Photo Studio", descriptor: "Local-first photo preparation",
    category: "Python desktop utility", filters: ["Python"], year: null,
    tech: ["Python", "Flet", "Pillow", "OpenCV"], status: "In development",
    description: "A local desktop utility for passport photo preparation, background editing, cropping, resizing, alignment, A4 print sheets and image export.",
    role: "Python desktop application development",
    features: ["Passport-size photo preparation", "Local background editing", "Crop, resize and align", "A4 sheet generation", "Image export", "Local processing without photo uploads"],
    github: "https://github.com/ProfMohsinKhan/Passport-size-photo-maker", githubLabel: "Project repository",
    attribution: "Repository hosted by ProfMohsinKhan; its README credits Faiz Sayyed as developer.",
    live: null, playStoreUrl: null,
    image: "/projects/passport-photo-studio.png", imageWidth: 1270, imageHeight: 795, imageAlt: "Passport Photo Studio desktop dashboard", imageLabel: "Existing desktop capture",
    linkAudit: { github: "valid", live: "missing", store: "missing" },
    sourceNote: "User brief and public README; final Windows release remains in development.",
  },
  {
    id: "iot-plant-monitoring", number: "05", title: "IoT Plant Monitoring", fullTitle: "IoT Plant Monitoring System",
    descriptor: "Environmental sensing & connected hardware", category: "Connected hardware", filters: ["IoT"], year: 2026,
    tech: ["ESP32", "IoT sensors"], status: "Presented at TechExpo",
    description: "An environmental monitoring system built around ESP32 and IoT sensors. Presented at TANTRAVERSE 2026 TechExpo.",
    role: "Sensor integration and implementation",
    features: ["Environmental data collection", "ESP32 sensor integration", "Presented at TANTRAVERSE 2026 TechExpo"],
    github: null, live: null, playStoreUrl: null, image: null, imageLabel: "Hardware documentation pending",
    linkAudit: { github: "missing", live: "missing", store: "missing" },
    sourceNote: "User-supplied project and exhibition details. No awards, demo or repository claimed.",
  },
  {
    id: "paperforge", number: "06", title: "PaperForge", descriptor: "Privacy-first document workspace",
    category: "Web document tools", filters: ["Web"], year: null,
    tech: ["React", "Node.js", "Express", "PDF-lib"], status: "In development",
    description: "A document workspace bringing PDF operations, conversions and OCR into one interface, with temporary file processing and optional AI integrations.",
    role: "Full stack application development",
    features: ["PDF document operations", "Document conversions", "OCR workflows", "Temporary file processing", "Optional AI integrations"],
    github: "https://github.com/Faizzsyed/paperforge", live: null, playStoreUrl: null,
    image: "/projects/paperforge.jpg", imageWidth: 800, imageHeight: 800, imageAlt: "Existing PaperForge project presentation artwork", imageLabel: "Existing project artwork",
    linkAudit: { github: "valid", live: "missing", store: "missing" },
    sourceNote: "Existing portfolio project verified against its public repository and README. No tool-count or performance metrics repeated in portfolio copy.",
  },
];

export const pacePdf = projects[0];
export const filterCategories = ["All", "Web", "Mobile", "Python", "IoT"];
// Compatibility aliases; the historical data is retained separately in projectArchive.js.
export const featuredProjects = projects;
export const allProjects = projects;

export const paceFeatures = [
  { title: "Merge", description: "Combine multiple PDF files" },
  { title: "Split", description: "Extract ranges or selected pages" },
  { title: "Organize", description: "Reorder pages visually" },
  { title: "Remove", description: "Delete unwanted pages" },
  { title: "Watermark", description: "Apply text or image watermarks" },
  { title: "Sign", description: "Place signatures on PDF pages" },
  { title: "Files", description: "Local history and saved outputs" },
  { title: "Share", description: "Export and share processed documents" },
];

export const paceStory = [
  { number: "01", title: "Problem", text: "PDF tools on mobile often feel fragmented, slow, or dependent on online workflows." },
  { number: "02", title: "Approach", text: "Build essential document operations into one focused Flutter app with local file handling and straightforward interaction." },
  { number: "03", title: "Result", text: "A production-ready Android utility covering everyday PDF workflows, from organization to signing and sharing." },
];
