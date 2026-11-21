import { useEffect, useRef, useState } from "react";
import mount from "../mount.jsx";
import Layout, { ExternalLink } from "../components/Layout.jsx";
import { projects, topics, groups, current } from "../data/projects.js";
import SkillTags from "../components/SkillTags.jsx";
import ProjectMark from "../components/ProjectMark.jsx";
import { publicFile } from "../data/links.js";

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
        <ProjectMark id={project.id} />
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
            {project.links.map((link) => link.internal
              ? <a key={link.href} className="text-link" href={link.href}>{link.label}</a>
              : <ExternalLink key={link.href} href={link.href}>{link.label}</ExternalLink>)}
            {project.status && <span className="status">{project.status}</span>}
          </div>
        )}
      </div>
    </article>
  );
}

// A section heading: the school's official logo when it has one we may use (falling back to text
// if the image can't load), otherwise the name as text.
function GroupTitle({ group }) {
  const [broken, setBroken] = useState(false);
  const id = `group-${group.id}`;
  if (group.logo && !broken) {
    const src = /^https?:/.test(group.logo) ? group.logo : publicFile(group.logo);
    return (
      <h2 id={id} className="group-title-logo">
        <span className="group-logo-tile">
          <img src={src} alt={group.name} referrerPolicy="no-referrer" onError={() => setBroken(true)} />
        </span>
      </h2>
    );
  }
  return <h2 id={id}>{group.name}</h2>;
}

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const sectionName = (id) => groups.find((g) => g.id === projects.find((p) => p.id === id)?.group)?.name ?? "Projects";

// "Currently building" as a deck: one slide per project. Swipe or scroll on touch, arrows or
// the dots anywhere, and Left/Right keys when the deck has focus.
function CurrentCarousel({ onShow }) {
  const track = useRef(null);
  const [index, setIndex] = useState(0);
  const count = current.length;

  // Keep the dots in step with whichever slide is in view (also after a swipe).
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setIndex(Number(e.target.dataset.index)); });
    }, { root: el, threshold: 0.6 });
    el.querySelectorAll(".deck-slide").forEach((slide) => io.observe(slide));
    return () => io.disconnect();
  }, []);

  const go = (i) => {
    const next = (i + count) % count;
    const el = track.current;
    el.scrollTo({ left: el.clientWidth * next, behavior: reducedMotion() ? "auto" : "smooth" });
    setIndex(next);
  };

  const onKey = (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); go(index + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); go(index - 1); }
  };

  return (
    <section className="deck reveal" aria-roledescription="carousel" aria-labelledby="deck-title" onKeyDown={onKey}>
      <div className="deck-top">
        <h2 id="deck-title" className="deck-title">Currently building</h2>
        <p className="deck-count" aria-live="polite">{String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}</p>
      </div>
      <div className="deck-track" ref={track} tabIndex={0} aria-label="Current projects, use the arrow keys to move between slides">
        {current.map((c, i) => (
          <article key={c.id} className="deck-slide" data-index={i} aria-roledescription="slide" aria-label={`${i + 1} of ${count}: ${c.title}`} aria-hidden={i !== index}>
            <ProjectMark id={c.id} />
            <div>
              <p className="deck-kicker">{c.kicker}</p>
              <h3 className="deck-name">{c.title}</h3>
              <p className="deck-text">{c.text}</p>
              <div className="actions">
                {c.isPublic
                  ? <a className="button deck-button" href={c.href} target="_blank" rel="noopener" tabIndex={i === index ? 0 : -1}>Open {c.title}</a>
                  : <span className="deck-soon">Demo link coming soon</span>}
                <a className="text-link deck-link" href={`#${c.id}`} tabIndex={i === index ? 0 : -1}
                  onClick={(e) => { e.preventDefault(); onShow(c.id); }}>Read more in {sectionName(c.id)}</a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="deck-nav">
        <button type="button" className="deck-arrow" onClick={() => go(index - 1)} aria-label="Previous project">←</button>
        <div className="deck-dots">
          {current.map((c, i) => (
            <button key={c.id} type="button" className="deck-dot" aria-label={`Show ${c.title}`} aria-current={i === index} onClick={() => go(i)} />
          ))}
        </div>
        <button type="button" className="deck-arrow" onClick={() => go(index + 1)} aria-label="Next project">→</button>
      </div>
    </section>
  );
}

function Projects() {
  const [topic, setTopic] = useState("All");
  const shown = topic === "All" ? projects : projects.filter((p) => p.topics.includes(topic));

  // Jump to a project's entry, clearing any filter that would hide it.
  const showProject = (id) => {
    setTopic("All");
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (!el) return;
      el.classList.add("is-target", "in");
      el.scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    });
  };

  return (
    <Layout current="projects">
      <div className="wrap page-intro">
        <h1 className="page-title reveal">Projects</h1>
        <p className="lede reveal">Things I've built at USC, at Tufts and on my own, newest first in each.</p>
      </div>

      <div className="wrap">
        <CurrentCarousel onShow={showProject} />
        <div className="filters filters-below reveal" role="group" aria-label="Filter projects by topic">
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

      <div aria-live="polite">
        {groups.map((g) => {
          const items = shown.filter((p) => p.group === g.id);
          if (items.length === 0) return null;
          return (
            <section key={g.id} className="project-group" aria-labelledby={`group-${g.id}`}>
              <div className="wrap">
                <div className="group-head reveal" style={g.accent ? { "--group-accent": g.accent, "--group-accent-2": g.accent2 ?? "transparent" } : undefined}>
                  <GroupTitle group={g} />
                  <p>{g.detail}</p>
                </div>
                {items.map((project) => <Project key={project.title} project={project} />)}
              </div>
            </section>
          );
        })}
      </div>
    </Layout>
  );
}

mount(<Projects />);
