import mount from "../mount.jsx";
import Layout from "../components/Layout.jsx";
import { skillGroups } from "../data/skills.js";

function Skills() {
  return (
    <Layout current="skills">
      <div className="wrap page-intro">
        <h1 className="page-title">Skills</h1>
        <p className="lede">
          Day to day at Disney Streaming I work mostly in Scala, Java and Python, with DynamoDB, PostgreSQL and Redis,
          shipping through Docker, Kubernetes and Spinnaker.
        </p>
      </div>

      <div className="wrap">
        {skillGroups.map((group) => (
          <section className="skill-group" key={group.name}>
            <h2>{group.name}</h2>
            <ul className="skill-list">
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        ))}
      </div>
    </Layout>
  );
}

mount(<Skills />);
