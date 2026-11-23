// Update this file whenever you want to change the content shown on your portfolio.
export const profile = {
  name: "Amisha Bharti",
  role: "Frontend Developer | Full-Stack Developer",
  tagline:
    "B.Tech Computer Science student building responsive, user-focused web applications with React and modern web technologies.",
  about: [
    "I'm a Computer Science and Engineering student graduating in 2027, with a strong interest in frontend and full-stack development. I enjoy turning ideas into practical web applications and creating clean, responsive user experiences.",
    "My hands-on projects include MessMate, a meal and mess-management application, and SheConnect, a women-focused social networking platform. I'm continuously strengthening my skills in JavaScript, React, backend development and problem-solving.",
  ],
  location: "Haryana, India",
  email: "", // Add the email address where you want to receive portfolio enquiries.
  phone: "",
  resumeUrl: "", // Add your resume as public/resume.pdf and set this to "/resume.pdf".
  socials: {
    github: "https://github.com/Amibharti",
    linkedin: "", // Add your LinkedIn profile URL.
  },
};

export const skills = [
  { name: "HTML", level: 85, category: "Frontend" },
  { name: "CSS", level: 85, category: "Frontend" },
  { name: "JavaScript", level: 75, category: "Frontend" },
  { name: "React", level: 75, category: "Frontend" },
  { name: "Tailwind CSS", level: 75, category: "Frontend" },
  { name: "Node.js", level: 55, category: "Backend" },
  { name: "Express.js", level: 55, category: "Backend" },
  { name: "MySQL", level: 60, category: "Backend" },
  { name: "Java", level: 60, category: "Programming" },
  { name: "C++", level: 70, category: "Programming" },
  { name: "Python", level: 65, category: "Programming" },
  { name: "C", level: 65, category: "Programming" },
  { name: "Git & GitHub", level: 75, category: "Tools" },
  { name: "Vite", level: 70, category: "Tools" },
];

export const projects = [
  {
    title: "MessMate",
    description:
      "A mess and meal management web app that helps users track daily meals, maintain entries and calculate monthly mess expenses.",
    tags: ["React", "Vite", "JavaScript", "CSS"],
    demo: "https://mess-mate-l3sl.vercel.app",
    github: "https://github.com/Amibharti/MessMate",
  },
  {
    title: "SheConnect",
    description:
      "A women-focused social networking platform with a feed, profiles, connections, messaging and a WomenHub for opportunities and resources.",
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MySQL"],
    demo: "",
    github: "https://github.com/Amibharti/Sheconnect",
  },
  {
    title: "LifeSync",
    description:
      "An in-progress personal life-management app exploring a unified task dashboard, reminders and capturing actionable items from notifications.",
    tags: ["React Native", "JavaScript", "Android"],
    demo: "",
    github: "",
  },
  {
    title: "Music Player",
    description:
      "A browser-based music player built with HTML, CSS and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "",
    github: "https://github.com/Amibharti/music-player",
  },
  {
    title: "CGPA Calculator",
    description:
      "A C++ project that calculates CGPA from academic performance inputs.",
    tags: ["C++"],
    demo: "",
    github: "https://github.com/Amibharti/cgpa-calculator",
  },
];
