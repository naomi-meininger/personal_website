import mount from "../mount.jsx";
import Layout, { ExternalLink } from "../components/Layout.jsx";
import Ecotein from "../components/Ecotein.jsx";
import { program, courses } from "../data/masters.js";

// Full project write-ups a class can point to with `caseStudy`.
const caseStudies = { ecotein: Ecotein };

function Course({ course }) {
  const CaseStudy = course.caseStudy ? caseStudies[course.caseStudy] : null;
  return (
    <section className="course" id={course.id} aria-labelledby={`${course.id}-title`}>
      <div className="wrap course-head reveal">
        <p className="course-meta">{course.code}, {course.term}</p>
        <h2 id={`${course.id}-title`} className="course-title">{course.name}</h2>
        <p className="lede">{course.summary}</p>
        {course.highlights?.length > 0 && (
          <ul className="course-highlights">{course.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
        )}
        {course.links?.length > 0 && (
          <div className="entry-links">{course.links.map((l) => <ExternalLink key={l.href} href={l.href}>{l.label}</ExternalLink>)}</div>
        )}
      </div>
      {CaseStudy && <CaseStudy />}
    </section>
  );
}

function Masters() {
  return (
    <Layout current="masters">
      <div className="wrap page-intro">
        <h1 className="page-title reveal">Current: Master's Program</h1>
        <p className="lede reveal">{program.degree}, {program.school}. Started {program.started}.</p>
        <p className="reveal">{program.intro}</p>
        {courses.length > 1 && (
          <nav className="course-index reveal" aria-label="Classes">
            <ul>{courses.map((c) => <li key={c.id}><a href={`#${c.id}`}>{c.code}: {c.name}</a></li>)}</ul>
          </nav>
        )}
      </div>
      {courses.map((c) => <Course key={c.id} course={c} />)}
    </Layout>
  );
}

mount(<Masters />);
