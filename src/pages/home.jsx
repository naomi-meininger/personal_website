import mount from "../mount.jsx";
import Layout, { ExternalLink } from "../components/Layout.jsx";
import CreditLine from "../components/CreditLine.jsx";
import { experience, education } from "../data/experience.js";
import { links } from "../data/links.js";
import portrait from "../assets/images/naomi.jpg";

function Home() {
  return (
    <Layout current="home">
      <section className="hero">
        <div className="wrap">
          <div>
            <h1 className="marquee">Naomi<br />Meininger</h1>
            <p className="lede">
              I'm a software engineer at Disney Streaming. I studied computer science at Tufts, with minors in
              mathematics and theater, and graduated magna cum laude in 2024.
            </p>
            <p className="muted">Outside of work I'm an avid musical theater fan, and in 2023 I directed my first show.</p>
            <div className="actions">
              <ExternalLink className="button" href={links.resume}>Download résumé</ExternalLink>
              <ExternalLink href={links.github}>GitHub</ExternalLink>
              <ExternalLink href={links.linkedin}>LinkedIn</ExternalLink>
              <a className="text-link" href={`mailto:${links.email}`}>Email</a>
            </div>
          </div>
          <figure className="arch">
            <img src={portrait} alt="Portrait of Naomi Meininger in front of autumn leaves" width="880" height="1100" />
          </figure>
        </div>
      </section>

      <section className="section" aria-labelledby="experience">
        <div className="wrap split">
          <h2 id="experience">Experience</h2>
          <ol className="credits">
            {experience.map((job) => (
              <li key={`${job.org}-${job.role}`}>
                <CreditLine role={job.role} who={job.org} />
                <p className="credit-meta">{job.dates}</p>
                <p className="credit-note">{job.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="education">
        <div className="wrap split">
          <h2 id="education">Education</h2>
          <div>
            <CreditLine role={education.degree} who={education.school} />
            <p className="credit-meta">{education.detail}</p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="more">
        <div className="wrap split">
          <h2 id="more">More</h2>
          <ul className="next-links">
            <li><a href="projects.html"><strong>Projects</strong><span>Network security, sports analytics, image compression and more</span></a></li>
            <li><a href="skills.html"><strong>Skills</strong><span>Languages, frameworks and tools I work with</span></a></li>
            <li><a href="ventures.html"><strong>Theater &amp; teaching</strong><span>Directing <i>tick, tick... BOOM!</i> and teaching a course on Disney</span></a></li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}

mount(<Home />);
