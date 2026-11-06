// The Master's Program page. Each class is one entry in `courses`, newest first.
// To add a class, copy the template at the bottom of this file into the list and fill it in.
// `caseStudy` is optional: set it to "ecotein" (or another case study you add) to show a full project write-up.

export const program = {
  degree: "M.S. Integrated Design, Business, and Technology",
  school: "University of Southern California",
  started: "August 2026",
  intro:
    "I started my master's at USC in August 2026, alongside my job at Disney Streaming. The program sits between engineering, design and business, and this page collects the classes and projects from it.",
};

// Shown beside a term's class count, e.g. for a semester that hasn't started yet.
export const termNotes = {
  "Spring 2027": "upcoming",
};

export const courses = [
  {
    id: "idsn-536",
    code: "IDSN 536",
    name: "Designing Networked Objects: From IoT to Smart Environments",
    term: "Spring 2027",
    summary:
      "An introduction to interaction design through physical computing: learning the technical basics to build innovative, interactive experiences into physical objects.",
  },
  {
    id: "idsn-579",
    code: "IDSN 579",
    name: "Social Media Incubator: Data-Driven Growth for Founders",
    term: "Spring 2027",
    summary:
      "A hands-on, challenge-based incubator where founders post weekly, analyze real data and refine their strategy in real time, covering marketing analytics, content performance, social media funnels, and organic and paid growth. The goal is a data-backed social media system that drives customer acquisition and supports fundraising.",
  },
  {
    id: "idsn-515",
    code: "IDSN 515",
    name: "Professional Practices Residential",
    term: "Spring 2027",
    summary:
      "A five-day residential on campus, February 4 to 8, 2027, with industry partner Fastport Honda. Working in interdisciplinary teams, we'll design solutions that combine physical products, AI and operational data to make transportation safer, smarter and more sustainable.",
    highlights: [
      "Areas we'll explore: AI-assisted routing, dispatch and fleet operations; smart charging and mobility infrastructure; data-driven and agentic AI systems; and new products and service models for commercial transportation.",
      "Each team will identify an unmet customer need and deliver customer insights, high-fidelity visualizations, an AI and data strategy, a business model and pilot success metrics.",
    ],
  },
  {
    id: "idsn-599",
    code: "IDSN 599",
    name: "Special Topics: Product Management for Challenge-Based Innovation",
    term: "Fall 2026",
    summary:
      "A semester working in a five-person product team to take a product from a blank page to an investor pitch: problem research, value proposition, go-to-market, market sizing, competitive analysis and a five-year pro forma.",
    caseStudy: "ecotein",
  },
  {
    id: "idsn-538",
    code: "IDSN 538",
    name: "Extended Reality Technologies",
    term: "Fall 2026",
    summary: "Working with XR wearables and the principles of UX and UI design for extended reality.",
    upcoming: "Final project coming soon",
  },
];

/* Template for a new class:
  {
    id: "idsn-xxx",              // used in the page link, e.g. masters.html#idsn-xxx
    code: "IDSN XXX",
    name: "Class name",
    term: "Spring 2027",
    summary: "One or two sentences on what the class covered.",
    highlights: ["Something you made or learned", "Another one"],   // optional
    links: [{ label: "Final project (PDF)", href: "https://..." }],  // optional
    upcoming: "Final project coming soon",                         // optional placeholder; remove once the project is up
  },
*/
