import { useEffect, useState } from "react";
import mount from "../mount.jsx";
import Layout from "../components/Layout.jsx";
import CreditLine from "../components/CreditLine.jsx";
import { skillGroups } from "../data/skills.js";
import { usage, skillSlug } from "../data/usage.js";

// Find the skill named by the URL hash, e.g. skills.html#spring-boot -> "Spring Boot".
const slugToSkill = new Map(skillGroups.flatMap((g) => g.items).map((name) => [skillSlug(name), name]));
const skillFromHash = () => slugToSkill.get(decodeURIComponent(window.location.hash.slice(1))) ?? null;

function UsagePanel({ skill, onClear }) {
  const entries = usage.get(skill) ?? [];
  return (
    <div className="usage-panel" aria-live="polite">
      <div className="usage-head">
        <h3>Where I've used {skill}</h3>
        <button type="button" className="usage-clear" onClick={onClear}>Close</button>
      </div>
      <ul className="credits compact">
        {entries.map((entry) => (
          <li key={entry.href}>
            <a className="usage-link" href={entry.href}>
              <CreditLine role={entry.title} who={entry.detail} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillGroup({ group, selected, onSelect }) {
  const open = selected && group.items.includes(selected);
  return (
    <section className="skill-group reveal">
      <h2>{group.name}</h2>
      <div>
        <ul className="skill-list">
          {group.items.map((item) => {
            const count = usage.get(item)?.length ?? 0;
            if (count === 0) return <li key={item}>{item}</li>;
            return (
              <li key={item}>
                <button
                  type="button"
                  className="skill"
                  id={skillSlug(item)}
                  aria-pressed={selected === item}
                  aria-label={`${item}, used in ${count} ${count === 1 ? "job or project" : "jobs and projects"}`}
                  onClick={() => onSelect(item)}
                >
                  {item}
                  <span className="uses" aria-hidden="true">{count}</span>
                </button>
              </li>
            );
          })}
        </ul>
        {open && <UsagePanel skill={selected} onClear={() => onSelect(selected)} />}
      </div>
    </section>
  );
}

function Skills() {
  const [selected, setSelected] = useState(skillFromHash);

  // Keep the selection in the URL so a link like skills.html#python opens with Python selected.
  useEffect(() => {
    const onHashChange = () => setSelected(skillFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Arriving from a skill tag on another page: bring the selected skill into view.
  useEffect(() => {
    const initial = skillFromHash();
    if (initial) document.getElementById(skillSlug(initial))?.closest(".skill-group")?.scrollIntoView({ block: "start" });
  }, []);

  const toggle = (skill) => {
    const next = selected === skill ? null : skill;
    setSelected(next);
    const url = next ? `#${skillSlug(next)}` : window.location.pathname;
    window.history.replaceState(null, "", url);
  };

  return (
    <Layout current="skills">
      <div className="wrap page-intro">
        <h1 className="page-title reveal">Skills</h1>
        <p className="lede reveal">
          Day to day at Disney Streaming I work mostly in Scala, Java and Python, on AWS with DynamoDB, PostgreSQL and
          Redis, shipping through Docker, Kubernetes and Spinnaker.
        </p>
        <p className="muted reveal">Select an underlined skill to see the jobs and projects where I've used it.</p>
      </div>

      <div className="wrap">
        {skillGroups.map((group) => (
          <SkillGroup key={group.name} group={group} selected={selected} onSelect={toggle} />
        ))}
      </div>
    </Layout>
  );
}

mount(<Skills />);
