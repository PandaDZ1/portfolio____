// Edit this file to put in your own info.
const profile = {
  name: "Rayan Meziti",
  title: "Full-Stack Developer",
  bio: "I build clean, fast web applications with JavaScript, React and Node.js. I enjoy turning ideas into simple, useful products.",
  email: "rayan.meziti.bba@gmail.com",
  location: "Algeria",
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
  },
  skills: ["JavaScript", "React", "Node.js", "Express", "HTML", "CSS", "Git", "REST APIs"],
};

const projects = [
  {
    id: 1,
    title: "Task Manager",
    description: "A to-do app with drag-and-drop boards, filters and local persistence.",
    tags: ["React", "CSS"],
    link: "#",
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description: "Shows live weather and a 5-day forecast for any city using a public API.",
    tags: ["JavaScript", "API"],
    link: "#",
  },
  {
    id: 3,
    title: "Blog API",
    description: "A REST API with authentication, posts and comments built with Express.",
    tags: ["Node.js", "Express"],
    link: "#",
  },
];

module.exports = { profile, projects };
