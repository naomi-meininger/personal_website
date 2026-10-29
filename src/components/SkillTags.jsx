import { skillHref } from "../data/usage.js";

// Small links under a job or project; each opens the Skills page with that skill selected.
export default function SkillTags({ skills }) {
  if (!skills || skills.length === 0) return null;
  return (
    <ul className="skill-tags" aria-label="Skills used">
      {skills.map((skill) => (
        <li key={skill}>
          <a href={skillHref(skill)}>{skill}</a>
        </li>
      ))}
    </ul>
  );
}
