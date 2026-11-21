import { DotFish } from "./Ecotein.jsx";

// Small square marks for projects on the Projects page.
// Ecotein and TheaterMax use their own logos; the rest are simple original icons.
// To give a new project a mark, add an entry here keyed by its id in projects.js.

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

const marks = {
  theatermax: {
    tone: "theatermax",
    // TheaterMax's own logo mark: a gold star.
    svg: <path d="M16 4.5l3.4 7.1 7.8 1-5.7 5.4 1.4 7.7L16 22l-6.9 3.7 1.4-7.7-5.7-5.4 7.8-1z" fill="currentColor" />,
  },
  greenroom: {
    tone: "greenroom",
    // greenroom's own logo idea: a ticket with a spark and a perforated stub.
    svg: (
      <>
        <path d="M5 8h22a2 2 0 0 1 2 2v3.5a2.5 2.5 0 0 0 0 5V22a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3.5a2.5 2.5 0 0 0 0-5V10a2 2 0 0 1 2-2z" fill="currentColor" />
        <path d="M12 11q.6 4.4 5 5-4.4.6-5 5-.6-4.4-5-5 4.4-.6 5-5z" className="mark-accent" />
        <path d="M22 10.5v11" stroke="#7a1626" strokeWidth="1.4" strokeDasharray="1.6 2.2" />
      </>
    ),
  },
  "ar-rehearsal": {
    tone: "xr",
    // A headset with a gold mark on the stage floor in view.
    svg: (
      <>
        <path d="M5 10h22a2 2 0 0 1 2 2v5a3 3 0 0 1-3 3h-5l-2-3h-6l-2 3H6a3 3 0 0 1-3-3v-5a2 2 0 0 1 2-2z" {...stroke} />
        <ellipse cx="16" cy="26" rx="5" ry="1.8" className="mark-accent" />
      </>
    ),
  },
  ecotein: { tone: "ecotein", custom: <DotFish className="mark-fish" /> },
  alarm: {
    tone: "terminal",
    // A terminal prompt with an alert light.
    svg: (
      <>
        <path d="M6 11l5 5-5 5" {...stroke} />
        <path d="M14 22h8" {...stroke} />
        <circle cx="25" cy="8" r="3" className="mark-accent" />
      </>
    ),
  },
  "end-game-simulator": {
    // A game clock.
    svg: (
      <>
        <circle cx="16" cy="18" r="9" {...stroke} />
        <path d="M16 18V13M13 5h6M24 9l2-2" {...stroke} />
        <path d="M16 18l4 3" {...stroke} className="mark-accent-stroke" />
      </>
    ),
  },
  "theta-budget-tracker": {
    // A budget split into slices.
    svg: (
      <>
        <circle cx="16" cy="16" r="10" {...stroke} />
        <path d="M16 6v10h10" {...stroke} />
        <path d="M16 16L9 23" {...stroke} />
        <path d="M16 6a10 10 0 0 1 10 10H16z" className="mark-accent" />
      </>
    ),
  },
  "theta-tracker": {
    // A points tally with a check.
    svg: (
      <>
        <path d="M7 8v16M11 8v16M15 8v16M19 8v16M5 18l16-6" {...stroke} />
        <path d="M22 21l3 3 5-6" {...stroke} className="mark-accent-stroke" />
      </>
    ),
  },
  e4u: {
    // A dumbbell.
    svg: (
      <>
        <path d="M10 16h12" {...stroke} />
        <rect x="5" y="10" width="4" height="12" rx="1" {...stroke} />
        <rect x="23" y="10" width="4" height="12" rx="1" {...stroke} />
        <path d="M3 13v6M29 13v6" {...stroke} className="mark-accent-stroke" />
      </>
    ),
  },
  "image-compressor": {
    // Pixels shrinking as they're compressed.
    svg: (
      <>
        {[0, 1, 2, 3].flatMap((row) =>
          [0, 1, 2, 3].map((col) => {
            const size = 5.5 - col * 1.2;
            return (
              <rect key={`${row}-${col}`} x={5 + col * 6.5 + (5.5 - size) / 2} y={5 + row * 6.5 + (5.5 - size) / 2}
                width={size} height={size} rx="1" className={col === 0 ? "mark-accent" : "mark-fill"} />
            );
          })
        )}
      </>
    ),
  },
  "music-and-math": {
    // A music note above a rising trend of data points.
    svg: (
      <>
        <path d="M18 19V6l9-2v12" {...stroke} />
        <ellipse cx="15.5" cy="19" rx="3" ry="2.3" fill="currentColor" />
        <ellipse cx="24.5" cy="16" rx="3" ry="2.3" fill="currentColor" />
        <circle cx="4" cy="28" r="1.8" className="mark-accent" />
        <circle cx="9" cy="26.5" r="1.8" className="mark-accent" />
        <circle cx="14" cy="25" r="1.8" className="mark-accent" />
      </>
    ),
  },
};

export default function ProjectMark({ id }) {
  const mark = marks[id];
  if (!mark) return null;
  return (
    <span className={`project-mark${mark.tone ? ` mark-${mark.tone}` : ""}`} aria-hidden="true">
      {mark.custom ?? <svg viewBox="0 0 32 32">{mark.svg}</svg>}
    </span>
  );
}
