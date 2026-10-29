// Files in /public are served from the site root, under the base path.
export const publicFile = (name) => `${import.meta.env.BASE_URL}${encodeURI(name)}`;

export const links = {
  email: "nmeining18@gmail.com",
  github: "https://github.com/naomi-meininger",
  linkedin: "https://www.linkedin.com/in/naomi-meininger/",
  resume: publicFile("meininger naomi resume.pdf"),
};

export const pages = [
  { id: "home", label: "About", href: "index.html" },
  { id: "projects", label: "Projects", href: "projects.html" },
  { id: "skills", label: "Skills", href: "skills.html" },
  { id: "ventures", label: "Theater & teaching", href: "ventures.html" },
];
