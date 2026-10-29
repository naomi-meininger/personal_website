import { experience } from "./experience.js";
import { projects } from "./projects.js";
import { skillGroups } from "./skills.js";

// "Spring Boot" -> "spring-boot", "C++" -> "c-plus-plus". Used for URL hashes like skills.html#python.
export function skillSlug(name) {
  return name
    .toLowerCase()
    .replace(/\+/g, "-plus")
    .replace(/#/g, "-sharp")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const skillHref = (name) => `skills.html#${skillSlug(name)}`;

// Maps each skill name to the jobs and projects that list it.
function buildUsage() {
  const known = new Set(skillGroups.flatMap((g) => g.items));
  const usage = new Map();
  const add = (skill, entry) => {
    if (import.meta.env.DEV && !known.has(skill)) {
      console.warn(`"${skill}" is tagged on "${entry.title}" but isn't listed in src/data/skills.js`);
    }
    if (!usage.has(skill)) usage.set(skill, []);
    usage.get(skill).push(entry);
  };

  for (const job of experience) {
    for (const skill of job.skills) {
      add(skill, { kind: "job", title: job.org, detail: job.role, href: `index.html#${job.id}` });
    }
  }
  for (const project of projects) {
    for (const skill of project.skills) {
      add(skill, { kind: "project", title: project.title, detail: "Project", href: `projects.html#${project.id}` });
    }
  }
  return usage;
}

export const usage = buildUsage();
