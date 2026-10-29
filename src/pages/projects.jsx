import { useState } from "react";
import mount from "../mount.jsx";
import Layout, { ExternalLink } from "../components/Layout.jsx";
import { projects, topics } from "../data/projects.js";
import SkillTags from "../components/SkillTags.jsx";

// Dim the word "redacted" so the sample output reads like real tool output.
function TerminalLine({ kind, text }) {
  const parts = text.split(/(redacted)/);
  return (
    <span className={kind}>
      {parts.map((part, i) => (part === "redacted" ? <span key={i} className="dim">{part}</span> : part))}
      {"\n"}
    </span>
  );
}

function Project({ project }) {
  return (
    <article className="entry reveal" id={project.id}>
      <div className="entry-meta">
        {project.meta.map((line) => <p key={line}>{line}</p>)}
      </div>
      <div>
        <h3>{project.title}</h3>
        {project.body.map((para) => <p key={para.slice(0, 24)}>{para}</p>)}

        {project.terminal && (
          <div className="terminal" role="img" aria-label={project.terminal.label}>
            {project.terminal.lines.map((line, i) => <TerminalLine key={i} {...line} />)}
          </div>
        )}

        {project.figure && (
          <figure className="figure">
            <img src={project.figure.src} alt={project.figure.alt} width={project.figure.width} height={project.figure.height} loading="lazy" />
            <figcaption>{project.figure.caption}</figcaption>
          </figure>
        )}

        <SkillTags skills={project.skills} />

        {(project.links.length > 0 || project.status) && (
          <div className="entry-links">
            {project.links.map((link) => <ExternalLink key={link.href} href={link.href}>{link.label}</ExternalLink>)}
            {project.status && <span className="status">{project.status}</span>}
          </div>
        )}
      </div>
    </article>
  );
}

function Projects() {
  const [topic, setTopic] = useState("All");
  const shown = topic === "All" ? projects : projects.filter((p) => p.topics.includes(topic));

  return (
    <Layout current="projects">
      <div className="wrap page-intro">
        <h1 className="page-title reveal">Projects</h1>
        <p className="lede reveal">Things I've built in class, for my sorority and on my own, newest first.</p>
        <div className="filters reveal" role="group" aria-label="Filter projects by topic">
          {["All", ...topics].map((t) => {
            const count = t === "All" ? projects.length : projects.filter((p) => p.topics.includes(t)).length;
            return (
              <button key={t} type="button" aria-pressed={topic === t} onClick={() => setTopic(t)}>
                {t} <span className="count">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="wrap" aria-live="polite">
        {shown.map((project) => <Project key={project.title} project={project} />)}
      </div>
    </Layout>
  );
}

mount(<Projects />);
