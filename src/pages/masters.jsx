import mount from "../mount.jsx";
import Layout, { ExternalLink } from "../components/Layout.jsx";
import Ecotein from "../components/Ecotein.jsx";
import { program, courses } from "../data/masters.js";

// Full project write-ups a class can point to with `caseStudy`.
const caseStudies = { ecotein: Ecotein };

function Course({ course }) {
  const CaseStudy = course.caseStudy ? caseStudies[course.caseStudy] : null;
  return (
    <article className="course" id={course.id} aria-labelledby={`${course.id}-title`}>
      <div className="course-head reveal">
        <p className="course-meta">{course.code}</p>
        <h3 id={`${course.id}-title`} className="course-title">{course.name}</h3>
        <p>{course.summary}</p>
        {course.highlights?.length > 0 && (
          <ul className="course-highlights">{course.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
        )}
        {course.links?.length > 0 && (
          <div className="entry-links">{course.links.map((l) => <ExternalLink key={l.href} href={l.href}>{l.label}</ExternalLink>)}</div>
        )}
      </div>
      {CaseStudy && <CaseStudy />}
    </article>
  );
}

// Group classes by term, keeping the order they're listed in masters.js (newest first).
function byTerm(list) {
  const terms = [];
  for (const c of list) {
    let t = terms.find((x) => x.term === c.term);
    if (!t) terms.push((t = { term: c.term, courses: [] }));
    t.courses.push(c);
  }
  return terms;
}

function Masters() {
  return (
    <Layout current="masters">
      <div className="wrap page-intro">
        <h1 className="page-title reveal">Current: Master's Program</h1>
        <p className="lede reveal">{program.degree}, {program.school}. Started {program.started}.</p>
        <p className="reveal">{program.intro}</p>
      </div>

      {byTerm(courses).map((t) => {
        const id = `term-${t.term.toLowerCase().replace(/\s+/g, "-")}`;
        return (
          <section key={t.term} className="term" aria-labelledby={id}>
            <div className="wrap">
              <div className="group-head reveal">
                <h2 id={id}>{t.term}</h2>
                <p>{t.courses.length} {t.courses.length === 1 ? "class" : "classes"}</p>
              </div>
              {t.courses.map((c) => <Course key={c.id} course={c} />)}
            </div>
          </section>
        );
      })}
    </Layout>
  );
}

mount(<Masters />);
