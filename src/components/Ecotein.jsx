import { useState } from "react";
import { ExternalLink } from "./Layout.jsx";
import { publicFile } from "../data/links.js";
import {
  team, myRole, challenges, steps, productSpec, drivers, pathway, market, marketSources,
  positioning, comparisonColumns, comparison, priceBenchmark, impact, financials,
  unitEconomics, sensitivity, stages, useOfFunds, proForma, insights, teamProcess, mindMaps,
} from "../data/ecotein.js";

const deckPdf = publicFile("ecotein-deck.pdf");
const money = (n) => `${n < 0 ? "−" : ""}$${Math.abs(n).toLocaleString("en-US")}`;

// The Ecotein mark: a fish drawn in dots, bigger toward the head.
function DotFish({ className }) {
  const dots = [];
  for (let col = 0; col < 15; col++) {
    const t = col / 14;
    const half = Math.round(2 * Math.sin(Math.PI * (0.18 + 0.72 * t)));
    for (let row = -half; row <= half; row++) {
      dots.push({ cx: 60 + col * 14, cy: 50 + row * 13, r: 2.2 + t * 4.2 });
    }
  }
  const tail = [[6, 14], [16, 24], [26, 34], [36, 44], [42, 50], [36, 56], [26, 66], [16, 76], [6, 86]];
  return (
    <svg className={className} viewBox="0 0 280 100" aria-hidden="true">
      {tail.map(([x, y], i) => <circle key={`t${i}`} cx={x + 4} cy={y} r="2" className="fish-tail" />)}
      {dots.map((d, i) => <circle key={i} cx={d.cx} cy={d.cy} r={d.r} className="fish-body" />)}
      <circle cx="241" cy="44" r="4.5" className="fish-eye" />
    </svg>
  );
}

function MineTag({ children }) {
  return <span className="eco-mine">{children}</span>;
}

function Section({ id, title, mine, children, tone }) {
  return (
    <section className={`eco-section${tone ? ` eco-${tone}` : ""}`} aria-labelledby={id}>
      <div className="wrap eco-split">
        <div className="eco-head reveal">
          <h3 id={id}>{title}</h3>
          {mine && <MineTag>{mine}</MineTag>}
        </div>
        <div className="eco-body">{children}</div>
      </div>
    </section>
  );
}

function Pictogram({ filled, total, shape }) {
  return (
    <div className="pictogram" aria-hidden="true">
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={`pict pict-${shape}${i < filled ? " on" : ""}`}></span>
      ))}
    </div>
  );
}

function FinancialChart() {
  // One scale for every bar and label: $1M = 8 units.
  const k = 8, zeroY = 36 + 21.83 * k, groupW = 124, barW = 36;
  return (
    <div className="chart-scroll">
      <svg className="fin-chart" viewBox="0 0 640 290" role="img"
        aria-label="Revenue and EBITDA by year in millions of dollars. FY2027 revenue 0.13, EBITDA −0.73. FY2028 1.07 and −1.07. FY2029 2.89 and −1.24. FY2030 9.44 and 0.42. FY2031 21.83 and 6.20.">
        <line x1="0" x2="640" y1={zeroY} y2={zeroY} className="axis" />
        {financials.map((f, i) => {
          const x = 20 + i * groupW;
          const bar = (v, dx, cls) => {
            const h = Math.max(Math.abs(v) * k, 1.5);
            const y = v >= 0 ? zeroY - h : zeroY;
            const ly = v >= 0 ? y - 8 : y + h + 16;
            return (
              <g className={cls}>
                <rect x={x + dx} y={y} width={barW} height={h} rx="3" />
                <text x={x + dx + barW / 2} y={ly} textAnchor="middle">{v.toFixed(2).replace("-", "−")}</text>
              </g>
            );
          };
          return (
            <g key={f.year}>
              {bar(f.revenue, 0, "rev")}
              {bar(f.ebitda, barW + 8, "ebitda")}
              <text x={x + barW + 4} y="280" textAnchor="middle" className="year">{f.year}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function Sensitivity() {
  const [caseId, setCaseId] = useState("base");
  const c = sensitivity.find((s) => s.id === caseId);
  return (
    <div className="eco-panel">
      <h4>What if fishmeal prices fall or yield misses?</h4>
      <div className="seg" role="group" aria-label="Price scenario">
        {sensitivity.map((s) => (
          <button key={s.id} type="button" aria-pressed={s.id === caseId} onClick={() => setCaseId(s.id)}>{s.name}</button>
        ))}
      </div>
      <p className="muted sens-assume">{c.assumption}. We sell at {money(c.price)} a tonne.</p>
      <div className="sens-out" aria-live="polite">
        <div className={c.earned55 < 0 ? "neg" : ""}>
          <span className="sens-num">{money(c.earned55)}</span>
          <span>earned per tonne at 55% yield</span>
        </div>
        <div className={c.earned45 < 0 ? "neg" : ""}>
          <span className="sens-num">{money(c.earned45)}</span>
          <span>earned per tonne at 45% yield</span>
        </div>
      </div>
      <p className="eco-note">
        Earned is per tonne of fish feed after plant costs, royalty and commission, including plastic credits. We break
        even with fishmeal at $1,770 a tonne (55% yield) or $1,900 (45% yield); fishmeal was $2,951 in September 2026.
      </p>
    </div>
  );
}

export default function Ecotein() {
  const unitTotal = unitEconomics.reduce((s, u) => s + u.value, 0);
  const maxPrice = Math.max(...priceBenchmark.map((p) => p.value));
  const dots = useOfFunds.flatMap((u) => Array.from({ length: u.dots }, () => u.tone));

  return (
    <article className="ecotein">
      <header className="eco-hero">
        <div className="wrap eco-hero-inner">
          <div className="reveal">
            <p className="eco-course">IDSN 599 semester project, Team 10</p>
            <h2 className="eco-wordmark">ecotein</h2>
            <p className="eco-tagline">Plastic in, protein out.</p>
            <p className="eco-lede">
              A protein powder for fish feed, made by feeding microbes broken-down plastic waste. We pitched it as a
              startup entering Singapore's aquafeed market.
            </p>
            <div className="actions">
              <ExternalLink className="button eco-button" href={deckPdf}>View the pitch deck (PDF)</ExternalLink>
            </div>
          </div>
          <DotFish className="eco-fish" />
        </div>
      </header>

      <Section id="my-role" title="My role" tone="role">
        <ol className="role-list">
          {myRole.map((r) => (
            <li key={r.title} className="reveal">
              <a href={r.href}><strong>{r.title}</strong></a>
              <p>{r.body}</p>
            </li>
          ))}
        </ol>
        <p className="muted reveal">
          This was a team project. Everything on this page comes from our shared deck and research; sections I owned or
          presented are marked.
        </p>
      </Section>

      <Section id="value" title="Unique value proposition" mine="I worked on this">
        <p className="eco-statement reveal">
          Ecotein meets nutritional needs at scale without relying on traditional agriculture, combining social
          responsibility with economic viability in the face of two global challenges.
        </p>
        <div className="eco-stats">
          {challenges.map((c) => (
            <div key={c.figure} className="eco-stat reveal">
              <p className="eco-figure">{c.figure}</p>
              <p>{c.text}</p>
              <Pictogram {...c} />
              <p className="eco-source">{c.source}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="product" title="The product">
        <p className="reveal">Protein made from dried microbes and plastic waste, in four steps:</p>
        <ol className="eco-steps reveal">
          {steps.map((s) => <li key={s.title}><strong>{s.title}</strong><span>{s.text}</span></li>)}
        </ol>
        <dl className="spec reveal">
          {productSpec.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
        </dl>
      </Section>

      <Section id="go-to-market" title="Go-to-market">
        <p className="eco-statement reveal">We start as an ingredient for fish and shrimp feed mills in Singapore, the market that pays most for protein.</p>
        <ol className="eco-steps reveal">
          {pathway.map((p) => <li key={p.title}><strong>{p.title}</strong><span>{p.text}</span></li>)}
        </ol>
        <p className="expansion reveal"><span>Singapore</span><span aria-hidden="true">→</span><span>Asia-Pacific</span><span aria-hidden="true">→</span><span>Worldwide</span></p>
        <div className="eco-two reveal">
          <div>
            <h4>Why the technology is ready</h4>
            <ul className="eco-list">{drivers.technology.map((d) => <li key={d.title}><strong>{d.title}</strong> {d.text}</li>)}</ul>
          </div>
          <div>
            <h4>Why the market is ready</h4>
            <ul className="eco-list">{drivers.market.map((d) => <li key={d.title}><strong>{d.title}</strong> {d.text}</li>)}</ul>
          </div>
        </div>
      </Section>

      <Section id="market" title="Market size" tone="blue">
        <div className="tam reveal">
          <div className="tam-circles" aria-hidden="true">
            <div className="c-tam"><span>TAM</span></div>
            <div className="c-sam"><span>SAM</span></div>
            <div className="c-som"><span>SOM</span></div>
          </div>
          <dl className="tam-list">
            {market.map((m) => (
              <div key={m.key}>
                <dt><span className="tam-key">{m.key}</span> {m.value}</dt>
                <dd><span className="tam-label">{m.label}.</span> {m.text}</dd>
              </div>
            ))}
          </dl>
        </div>
        <p className="eco-note reveal">
          Circles not to scale. Sources:{" "}
          {marketSources.map((s, i) => (
            <span key={s.href}>{i > 0 && ", "}<ExternalLink href={s.href}>{s.label}</ExternalLink></span>
          ))}.
        </p>
      </Section>

      <Section id="competition" title="Competition">
        <p className="eco-statement reveal">Renewable, resilient and disruptive.</p>
        <div className="posmap reveal" role="img" aria-label="Positioning map. Ecotein sits furthest toward renewable materials and high supply reliability, ahead of Solar Foods. Fishmeal, soybean meal and Unibio use virgin materials; poultry and insect meal are renewable but less reliable.">
          <span className="ax ax-top">High supply reliability</span>
          <span className="ax ax-bottom">Low supply reliability</span>
          <span className="ax ax-left">Virgin materials</span>
          <span className="ax ax-right">Renewable materials</span>
          {positioning.map((p) => (
            <span key={p.name} className={`pos${p.us ? " us" : ""}`}
              style={{ left: `${50 + p.x * 42}%`, top: `${50 - p.y * 40}%` }}>{p.name}</span>
          ))}
        </div>

        <dl className="posquads reveal">
          <div className="us"><dt>Renewable materials, high supply reliability</dt><dd>Ecotein, Solar Foods</dd></div>
          <div><dt>Renewable materials, low supply reliability</dt><dd>Insect meal, poultry meal</dd></div>
          <div><dt>Virgin materials, low supply reliability</dt><dd>Unibio, soybean meal, fishmeal</dd></div>
        </dl>

        <div className="table-scroll reveal">
          <table className="eco-table">
            <caption>Where Ecotein stands today</caption>
            <thead><tr><th scope="col"><span className="visually-hidden">Product</span></th>{comparisonColumns.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
            <tbody>
              {comparison.map((r) => (
                <tr key={r.name} className={r.us ? "us" : ""}>
                  <th scope="row">{r.name}</th>
                  {r.cells.map((c, i) => <td key={i} className={c.startsWith("Yes") ? "yes" : c === "Partly" ? "" : "no"}>{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="eco-note">*A hypothesis: gate fees are off in our base case.</p>

        <h4 className="reveal">We compete with fishmeal, not soy</h4>
        <ul className="hbars reveal" aria-label="Cost per kilogram of protein, US dollars">
          {priceBenchmark.map((p) => (
            <li key={p.name} className={p.us ? "us" : ""}>
              <span className="hb-name">{p.name}</span>
              <span className="hb-track"><span className="hb-bar" style={{ width: `${(p.value / maxPrice) * 100}%` }}></span></span>
              <span className="hb-val">${p.value.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <p className="eco-note">Cost per kg of protein. Ecotein is 8% cheaper than fishmeal, the price fish-feed mills buy against.</p>
      </Section>

      <Section id="impact" title="Impact by 2031" tone="night">
        <p className="eco-statement reveal">No farmland, no wild fish. Just plastic.</p>
        <div className="impact">
          {impact.map((m) => (
            <div key={m.figure} className="reveal">
              <p className="eco-figure">{m.figure}</p>
              <p><strong>{m.label}</strong> {m.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="financials" title="Financials" mine="I presented this">
        <p className="eco-statement reveal">Profitable in 2030, with $6.2M EBITDA by 2031.</p>
        <div className="reveal">
          <p className="legend"><span className="key rev"></span>Revenue <span className="key ebitda"></span>EBITDA <span className="muted">($ millions)</span></p>
          <FinancialChart />
          <p className="eco-note">Gross margin reaches 50% in 2031. Our lowest cash point is −$42.6M in 2029. Assumes $2,300 a tonne, 55% yield and free plastic.</p>
        </div>

        <h4 className="reveal">Every tonne of fish feed earns $1,309</h4>
        <div className="reveal">
          <div className="stack" role="img" aria-label={`Of the $2,300 price per tonne: ${unitEconomics.map((u) => `${u.label} $${u.value}`).join(", ")}.`}>
            {unitEconomics.map((u) => (
              <span key={u.label} className={u.us ? "us" : ""} style={{ width: `${(u.value / unitTotal) * 100}%` }}>
                <b>${u.value.toLocaleString("en-US")}</b>
              </span>
            ))}
          </div>
          <ul className="stack-legend">
            {unitEconomics.map((u, i) => <li key={u.label}><span className={`key s${i}`}></span>{u.label} <b>${u.value.toLocaleString("en-US")}</b></li>)}
          </ul>
          <p className="eco-note">57% contribution margin on fish feed in 2031 (34% in 2027). Plastic costs us $0: we take low-value PET that recyclers reject.</p>
        </div>

        <Sensitivity />

        <h4 className="reveal">Raising $50M in two stages, each unlocked by proof</h4>
        <div className="stages">
          {stages.map((s) => (
            <div key={s.name} className="stage reveal">
              <p className="eco-figure">{s.amount}</p>
              <p className="stage-name">{s.name}, {s.years}: {s.goal}</p>
              <p className="muted">Proves:</p>
              <ul>{s.proves.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="funds reveal">
          <div className="dotgrid" role="img" aria-label="Stage 1 use of funds, each dot is 1%: 82 dots plant build, 5 team, 5 regulatory and R&D, 5 plant costs and pilots, 3 marketing and legal.">
            {dots.map((tone, i) => <span key={i} className={`d-${tone}`}></span>)}
          </div>
          <div>
            <p className="muted">Stage 1 use of funds, each dot is 1%</p>
            <ul className="funds-legend">
              {useOfFunds.map((u) => <li key={u.label}><span className={`key d-${u.tone}`}></span>{u.label}<b>{u.amount}</b></li>)}
            </ul>
            <ExternalLink href={proForma}>Full pro forma (Google Sheets)</ExternalLink>
          </div>
        </div>
      </Section>

      <Section id="insights" title="What experts told us" tone="night">
        <div className="insights">
          {insights.map((x) => (
            <figure key={x.who} className="insight reveal">
              <blockquote>“{x.quote}”</blockquote>
              <figcaption>{x.who} · {x.field}</figcaption>
              <p><strong>What we changed:</strong> {x.change}</p>
            </figure>
          ))}
        </div>
      </Section>

      <Section id="process" title="How we worked" mine="I took part in this">
        <ol className="eco-steps reveal">
          {teamProcess.map((s, i) => <li key={i}><strong>{s.title}</strong><span>{s.text}</span></li>)}
        </ol>
        <p className="reveal"><ExternalLink href={mindMaps}>See our mind maps in Figma</ExternalLink></p>
      </Section>

      <Section id="team" title="Product Team 10">
        <ul className="team reveal">
          {team.map((m) => (
            <li key={m.name} className={m.me ? "me" : ""}>
              <span className="initials" aria-hidden="true">{m.name.split(" ").map((w) => w[0]).join("")}</span>
              <strong>{m.name}</strong>
              <span className="muted">{m.focus}</span>
            </li>
          ))}
        </ul>
        <p className="eco-note">
          Our team used Claude to restyle the deck, research the market and refine the pro forma. We set the direction,
          reviewed every output and checked figures against our sources.
        </p>
      </Section>
    </article>
  );
}
