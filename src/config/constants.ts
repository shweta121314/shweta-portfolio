// Personal Information - Easy to update
export const PERSONAL_INFO = {
  name: "Shweta Jayant Pallewar",
  firstName: "Shweta",
  role: "Full Stack Developer",
  email: "shwetapallewar@gmail.com",
  phone: "+91 8805239632",
  github: "https://github.com/shweta121314",
  linkedin: "https://www.linkedin.com/in/shweta-pallewar-006a7b287",
  resumeUrl: "/resume.pdf",
  profileImage: "/profile.jpg",
  experience: "2+",
  location: "Hyderabad, India",
};

export const ABOUT_ME = {
  title: "About Me",
  paragraphs: [
    "I'm a passionate Full Stack Developer with more than 2 years of software development experience, specializing in the design, development, and deployment of web-based applications. I'm skilled in developing Single Page Applications (SPA) and dynamic responsive web applications using React.",
    "Currently, I'm building JedAI — a full-stack AI-powered dental diagnostics platform that combines clinic management with deep learning-powered X-ray analysis using YOLOv11 models, FastAPI, Next.js 16, and PyTorch. I work with AI models including SAM3, Mono AI, and custom-trained models for real-time data analysis and intelligent feature integration.",
    "I'm proficient in modern AI-assisted development tools such as Kiro, Claude, ChatGPT, GitHub Copilot, Perplexity, and Antigravity to improve coding efficiency and productivity. My expertise spans React, TypeScript, Python, FastAPI, Node.js, Docker, PostgreSQL, Redis, and cloud deployment with Coolify.",
  ],
};

export const SKILLS = {
  frontend: [
    { name: "React.js", level: 92 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "HTML5", level: 95 },
    { name: "CSS3 / SASS(SCSS)", level: 90 },
    { name: "Redux", level: 85 },
  ],
  libraries: [
    { name: "Material UI", level: 88 },
    { name: "Prime React", level: 80 },
    { name: "Bootstrap", level: 85 },
    { name: "Axios", level: 90 },
    { name: "Redux Toolkit", level: 85 },
    { name: "Node.js (Basic)", level: 65 },
    { name: "Python (Basic)", level: 60 },
  ],
  tools: [
    { name: "Git / Bitbucket", level: 88 },
    { name: "VS Code", level: 95 },
    { name: "Postman", level: 90 },
    { name: "MySQL / RESTful APIs", level: 80 },
    { name: "NPM", level: 88 },
    { name: "Jira / Taiga", level: 80 },
    { name: "Docker", level: 78 },
    { name: "Coolify", level: 75 },
  ],
  aiAndDevOps: [
    { name: "Kiro", level: 88 },
    { name: "ChatGPT", level: 90 },
    { name: "Claude AI", level: 88 },
    { name: "GitHub Copilot", level: 85 },
    { name: "Perplexity", level: 85 },
    { name: "Antigravity", level: 78 },
    { name: "SAM3 / Mono AI", level: 75 },
  ],
};

export const PROJECTS = [
  {
    id: 0,
    title: "JedAI — Dental AI Platform",
    company: "Zenius IT Services (Current)",
    description:
      "A full-stack AI-powered dental diagnostics and clinic management platform that automates X-ray analysis, tooth detection, decay classification, bone loss measurement, and treatment planning using deep learning. Built with a microservices architecture featuring FastAPI, Next.js 16, React 19, PyTorch, YOLOv11, PostgreSQL, Redis, MinIO, and deployed on GPU infrastructure via Docker & Coolify.",
    techStack: ["Next.js 16", "React 19", "FastAPI", "YOLOv11", "PyTorch", "PostgreSQL", "Docker", "Redis"],
    githubUrl: "https://github.com/shweta121314",
    liveUrl: null,
    featured: true,
    gradient: "from-violet-500/20 via-fuchsia-500/10 to-cyan-500/20",
    emoji: "🧠",
  },
  {
    id: 1,
    title: "AI Dental Project",
    company: "Zenius IT Services",
    description:
      "Developed a React application for managing patient records and analyzing dental X-rays using AI integration. Implemented AI models for teeth numbering, decay detection, and interactive severity visualization. Designed a treatment recommendation system that suggests procedures based on AI analysis. Utilized .NET and MySQL for efficient patient data management. Used AI tools like Copilot and ChatGPT to enhance development speed and debugging.",
    techStack: ["React", "JavaScript", "Bootstrap", ".NET", "MySQL", "AI/Copilot"],
    githubUrl: "https://github.com/shweta121314",
    liveUrl: null,
    featured: true,
    gradient: "from-cyan-500/20 via-blue-500/10 to-purple-500/20",
    emoji: "🦷",
  },
  {
    id: 2,
    title: "TruDose Application",
    company: "Zenius IT Services",
    description:
      "Developed a comprehensive admin portal using React.js and Material UI for hospitals, clinics, devices, and patient management. Integrated a MySQL database to manage hospital account details, clinic assignments, devices, and patient records. Designed an interactive dashboard to display hospital accounts and assigned resources. Implemented reporting and settings modules for efficient data management, with a .NET backend handling business logic and API services. Utilized AI tools such as ChatGPT and Copilot for faster implementation.",
    techStack: ["React.js", "Material UI", "MySQL", ".NET", "ChatGPT/Copilot"],
    githubUrl: "https://github.com/shweta121314",
    liveUrl: null,
    featured: true,
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    emoji: "🏥",
  },
  {
    id: 3,
    title: "Geno Tracker (HRMS)",
    company: "Antro-Pai Technology",
    description:
      "Spearheaded front-end development using React.js, accelerating delivery timelines by 80% through optimized workflows and collaboration. Integrated REST APIs with Axios, Redux Toolkit, and Fetch API, ensuring real-time HRMS data updates. Implemented JWT-based authentication to safeguard sensitive employee and project data. Designed responsive UI from Figma wireframes, significantly improving user experience and engagement.",
    techStack: ["React.js", "Redux Toolkit", "Axios", "Fetch API", "JWT", "Bitbucket"],
    githubUrl: "https://github.com/shweta121314",
    liveUrl: null,
    featured: true,
    gradient: "from-orange-500/20 via-amber-500/10 to-yellow-500/20",
    emoji: "👥",
  },
  {
    id: 4,
    title: "Antro Corp Website",
    company: "Antro-Pai Technology",
    description:
      "Developed and maintained the corporate website (Antrocorp.com) using React.js with a component-based architecture, reducing code duplication by 60%. Collaborated with designers to translate Figma designs into responsive, user-friendly pages. Ensured cross-browser compatibility and optimized performance for faster load times. Used AI-assisted tools like Claude and ChatGPT for code suggestions and UI improvements.",
    techStack: ["React.js", "HTML5", "CSS3", "JavaScript", "Bitbucket"],
    githubUrl: "https://github.com/shweta121314",
    liveUrl: "https://antrocorp.com",
    featured: false,
    gradient: "from-pink-500/20 via-rose-500/10 to-red-500/20",
    emoji: "🌐",
  },
];

export const EXPERIENCE = [
  {
    company: "Zenius IT Services Pvt. Ltd.",
    role: "Full Stack Developer",
    location: "Hyderabad",
    period: "Feb 2025 – Present",
    current: true,
  },
  {
    company: "Antro-Pai Technology Pvt. Ltd.",
    role: "Front-End Developer",
    location: "Hyderabad",
    period: "Mar 2024 – Feb 2025",
    current: false,
  },
];

export const EDUCATION = {
  degree: "Master Of Computer Applications (MCA)",
  institution: "Institute Of Kamla Nehru Mahavidyalaya",
  period: "2021 - 2023",
};

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "JedAI", href: "#jedai" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

// JedAI Case Study Data
export const JEDAI = {
  title: "JedAI — Dental AI Platform",
  subtitle: "Full-stack AI-powered dental diagnostics & clinic management",
  description:
    "A monorepo with 5 services following a microservices pattern that combines clinic management with deep learning-powered X-ray diagnostics. The system automatically detects teeth, classifies decay severity, measures periodontal bone loss, and generates treatment plans from dental X-rays using YOLOv11 models.",
  architecture: [
    { service: "jedai-web", stack: "Next.js 16 / React 19 / TypeScript / Tailwind CSS 4", role: "Frontend portal" },
    { service: "jedai-api-service", stack: "Python / FastAPI / SQLModel / Alembic", role: "Core backend API" },
    { service: "jedai-model-api", stack: "Python / FastAPI / YOLOv11 / PyTorch", role: "ML inference service" },
    { service: "model-code", stack: "Jupyter / Ultralytics", role: "ML training pipeline" },
  ],
  techLayers: [
    { layer: "Frontend", techs: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Radix UI", "Redux Toolkit", "Konva", "Recharts"] },
    { layer: "Backend", techs: ["Python 3.12", "FastAPI", "SQLModel", "Alembic", "Pydantic v2", "Redis", "arq"] },
    { layer: "AI / ML", techs: ["YOLOv11", "PyTorch", "OpenCV", "RTMPose", "SAM", "MLflow"] },
    { layer: "Infrastructure", techs: ["Docker", "Coolify", "PostgreSQL", "MinIO", "Prometheus", "Grafana"] },
    { layer: "Security", techs: ["JWT", "MFA/TOTP", "WebAuthn/Passkeys", "RBAC", "Rate Limiting"] },
  ],
  keyFeatures: [
    "AI X-ray Analysis Pipeline — Upload → auto-classify → tooth numbering → decay detection → treatment plans",
    "Bone Loss Measurement — Pose-based keypoint detection with pixel-to-mm conversion",
    "Data Labelling Platform — Annotation workflow, task assignment, quality reviews, exports",
    "Multi-Framework Model Training — YOLO, EfficientNet, U-Net, RTMPose with MLflow tracking",
    "Dynamic Model Hot-Reload — Promote trained models from MLflow to production without restart",
    "Multi-Clinic RBAC — SuperAdmin, ClinicAdmin, Dentist, Labeller with granular permissions",
    "SAM Integration — Segment Anything Model for interactive dental image segmentation",
    "Observability Dashboard — Audit logs, error tracking, Prometheus metrics, Grafana",
  ],
  mlModels: [
    { model: "Tooth Numbering", architecture: "YOLOv11", purpose: "Detect and number teeth in X-rays" },
    { model: "Decay Detection", architecture: "YOLOv11", purpose: "Classify decay severity" },
    { model: "Image Classification", architecture: "YOLOv11", purpose: "Auto-classify X-ray type" },
    { model: "Bone Loss Measurement", architecture: "YOLOv11 Pose / RTMPose", purpose: "Periodontal bone loss keypoints" },
  ],
};
