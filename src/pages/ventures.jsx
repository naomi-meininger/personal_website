import mount from "../mount.jsx";
import Layout, { ExternalLink } from "../components/Layout.jsx";
import CreditLine from "../components/CreditLine.jsx";
import { credits } from "../data/theater.js";
import { publicFile } from "../data/links.js";
import poster from "../assets/images/tick-tick-boom-poster.jpg";

function Ventures() {
  return (
    <Layout current="ventures">
      <div className="wrap page-intro">
        <h1 className="page-title reveal">Theater &amp; teaching</h1>
        <p className="lede reveal">I spent my four years at Tufts in the theater community, onstage, backstage and eventually in the director's chair.</p>
      </div>

      <section className="section" aria-labelledby="tick">
        <div className="wrap feature">
          <figure className="poster reveal">
            <img
              src={poster}
              alt="Poster for tick, tick... BOOM! by Jonathan Larson, directed by Naomi Meininger, showing piano keys and scattered sheet music, September 3 and 4 at Balch Theater"
              width="760"
              height="960"
              loading="lazy"
            />
          </figure>
          <div className="reveal">
            <h2 id="tick">Directing <i>tick, tick... BOOM!</i></h2>
            <p className="kicker">Summer 2023, Balch Theater</p>
            <p>
              My directorial debut. We rehearsed about three times a week all summer, scheduling around everyone's jobs and
              other commitments, and opened in September. I'm so proud of what we made.
            </p>
            <div className="entry-links">
              <ExternalLink href={publicFile("Tick Tick Boom Program -3.pdf")}>Read the program (PDF)</ExternalLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="credits">
        <div className="wrap split">
          <h2 id="credits" className="reveal">Tufts credits</h2>
          <ul className="credits compact">
            {credits.map((c) => (
              <li key={c.show} className="reveal reveal-credit">
                <CreditLine role={<i>{c.show}</i>} who={c.role} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="course">
        <div className="wrap split">
          <h2 id="course" className="reveal">Teaching</h2>
          <div className="reveal">
            <h3><i>Bright Young Women</i>: Feminism and Gender Representation in Disney</h3>
            <p className="credit-meta">Tufts ExCollege</p>
            <p className="course-body">
              The ExCollege lets undergraduates design and teach a class on a topic of their choosing. I've always been
              fascinated by Disney's complicated legacy, and the course grew out of a line in <i>The Little Mermaid</i>'s
              "Part of Your World": Ariel sings about being ready to stand on her own, yet the film's plot pulls in a
              different direction. That tension got me thinking about the roles Ariel and the other Disney princesses
              really play in their films.
            </p>
            <p className="pull">A highlight was bringing in Susan Egan, the voice of Meg in <i>Hercules</i>, to speak to the class.</p>
            <div className="entry-links">
              <ExternalLink href="https://docs.google.com/document/d/1U0ftU8DyDtZW8G0hQ57bYLfVmsKKM-pkveC_3pcIlww/edit?usp=sharing">Syllabus</ExternalLink>
              <ExternalLink href="https://us11.campaign-archive.com/?u=1b61b20b21d482f765d9ebed1&id=ca6dd380ac">Interview about the course</ExternalLink>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

mount(<Ventures />);
