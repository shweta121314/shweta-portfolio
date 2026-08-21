// Personal Information - Easy to update
export const PERSONAL_INFO = {
  name: "Shweta Jayant Pallewar",
  firstName: "Shweta",
  role: "Full Stack Developer",
  email: "shwetapallewar@gmail.com",
  phone: "+91 8805239632",
  github: "https://github.com/shweta121314",
  linkedin: "https://www.linkedin.com/in/shweta-pallewar-006a7b287/",
  resumeUrl: "/resume.pdf",
  experience: "1.9+",
  location: "Hyderabad, India",
};

export const ABOUT_ME = {
  title: "About Me",
  paragraphs: [
    "I'm a passionate Full Stack Developer with over 1.9 years of professional experience in designing, developing, and deploying web-based applications. I specialize in building Single Page Applications (SPA) and dynamic responsive web applications using React.",
    "My expertise spans both client-side and server-side technologies including React, Redux, TypeScript, JavaScript, HTML5, CSS3, and MySQL with RESTful APIs. I'm proficient with modern development tools like npm, Git, Postman, and VS Code.",
    "I have a strong understanding of Agile processes including Scrum methodology and the System Development Life Cycle (SDLC). Currently working at Zenius IT Services, I'm focused on building AI-powered applications and comprehensive admin portals.",
  ],
};

export const SKILLS = {
  frontend: [
    { name: "React.js", level: 92 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "HTML5", level: 95 },
    { name: "CSS3 / SCSS", level: 90 },
    { name: "Redux", level: 85 },
  ],
  libraries: [
    { name: "Material UI", level: 88 },
    { name: "Prime React", level: 80 },
    { name: "Bootstrap", level: 85 },
    { name: "Axios", level: 90 },
    { name: "Redux Toolkit", level: 85 },
  ],
  tools: [
    { name: "Git / Bitbucket", level: 88 },
    { name: "VS Code", level: 95 },
    { name: "Postman", level: 90 },
    { name: "MySQL", level: 75 },
    { name: "Jira / Taiga", level: 80 },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title: "AI Dental Project",
    company: "Zenius IT Services",
    description:
      "Developed a React application for managing patient records and analyzing dental X-rays using AI integration. Implemented AI models for teeth numbering, decay detection, and interactive severity visualization. Designed a treatment recommendation system that suggests procedures based on AI analysis.",
    techStack: ["React", "JavaScript", "Bootstrap", ".NET", "MySQL", "AI Integration"],
    githubUrl: "https://github.com/shweta121314",
    liveUrl: null,
    featured: true,
  },
  {
    id: 2,
    title: "TruDose Admin Portal",
    company: "Zenius IT Services",
    description:
      "Built a comprehensive admin portal using React.js and Material UI for hospitals, clinics, devices, and patient management. Integrated MySQL database for managing hospital accounts, clinic assignments, devices, and patient records with interactive dashboard visualization.",
    techStack: ["React.js", "Material UI", "MySQL", ".NET", "REST API"],
    githubUrl: "https://github.com/shweta121314",
    liveUrl: null,
    featured: true,
  },
  {
    id: 3,
    title: "Geno Tracker (HRMS)",
    company: "Antro-Pai Technology",
    description:
      "Spearheaded front-end development of an HRMS application using React.js, accelerating delivery timelines by 80%. Integrated REST APIs with Axios and Redux Toolkit, implemented JWT-based authentication, and designed responsive UI from Figma wireframes.",
    techStack: ["React.js", "Redux Toolkit", "Axios", "JWT", "Bitbucket"],
    githubUrl: "https://github.com/shweta121314",
    liveUrl: null,
    featured: true,
  },
  {
    id: 4,
    title: "Antro Corp Website",
    company: "Antro-Pai Technology",
    description:
      "Developed and maintained the corporate website using React.js with a component-based architecture, reducing code duplication by 60%. Collaborated with designers to translate Figma designs into responsive, user-friendly pages with cross-browser compatibility.",
    techStack: ["React.js", "HTML5", "CSS3", "JavaScript", "Bitbucket"],
    githubUrl: "https://github.com/shweta121314",
    liveUrl: "https://antrocorp.com",
    featured: false,
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
    period: "Mar 2024 – Nov 2025",
    current: false,
  },
];

export const EDUCATION = {
  degree: "Master Of Computer Applications (MCA)",
  institution: "Kamla Nehru Mahavidyalaya",
  period: "2021 - 2023",
};

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
