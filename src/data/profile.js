// ✏️ EDIT THIS FILE: everything shown on your portfolio lives here.
export const profile = {
  name: "Amisha Bharti ",
  role: "Fresher/Frontend Developer",
  tagline:
    "I build clean, fast and accessible web apps with React. Passionate about turning ideas into polished products.",
  about: [
    "Hi! I'm a developer who enjoys building useful things for the web. I love learning new tools and shipping projects that solve real problems.",
    "When I'm not coding, I'm exploring new technologies, contributing to side projects, and improving my skills one project at a time.",
  ],
  location: "Hisar, Haryana, India",
  email: "amishabharti2009@gmail.com",
  phone: "7206129823",
  resumeUrl: "", // e.g. "/resume.pdf" (put the file in /public). Leave empty to hide the button.
  socials: {
    github: "https://github.com/Amibharti",
    linkedin: "https://www.linkedin.com/in/amisha-bharti-3a33ba330",
  },
};

export const skills = [
  { name: "HTML & CSS", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "React", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 85, category: "Frontend" },
  { name: "Node.js", level: 70, category: "Backend" },
  { name: "Express", level: 65, category: "Backend" },
  { name: "MongoDB", level: 65, category: "Backend" },
  { name: "Git & GitHub", level: 80, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" },
  { name: "Vercel / Netlify", level: 75, category: "Tools" },
];

export const projects = [
  {
    title: "MessMate",
    description:
      "A mess/meal tracker with a calendar, daily entries, history and monthly bill calculation. Data is stored locally in the browser.",
    tags: ["React", "Vite", "CSS"],
    demo: "https://mess-mate-l3sl.vercel.app",
    github: "https://github.com/Amibharti/MessMate",
  },
  {
    title: "Sheconnect",
    description: "•	Developing a women-focused community platform to support user connections and engagement.",
    tags: ["React", "Tailwind"],
    demo: "sheconnect-bay.vercel.app",
    github: "https://github.com/Amibharti/Sheconnect",
  },
  {
    title: "Music Player",
    description: "Short description of what this project does and the problem it solves.",
    tags: ["Html,css"],
    demo: "",
    github: "github.com/Amibharti/music-player",
  },
];
