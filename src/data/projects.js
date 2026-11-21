import compressionResults from "../assets/images/compression-results.jpg";
import { publicFile } from "./links.js";

// Newest first. `topics` drive the filter on the Projects page.
// "Currently building" slides at the top of the Projects page, in order. `id` matches a project
// below (its entry is where "Read more" goes). Set `isPublic: true` once a link can be opened by
// anyone; until then the slide shows "Demo link coming soon" instead of an Open button.
export const current = [
  {
    id: "theatermax",
    title: "TheaterMax",
    kicker: "Personal project",
    text: "One place to compare theater tickets across every seller: prices, dates, seats, and lottery and rush deals for Broadway and Off-Broadway.",
    href: "https://naomi-meininger.github.io/theatermax/",
    isPublic: true,
  },
  {
    id: "greenroom",
    title: "greenroom",
    kicker: "IDSN 599: Product Management",
    text: "A booking workspace for music agents: every hold, offer and contract on a tour in one place, with venues ranked by fan demand, routing optimized and the net for each show estimated before you commit.",
    href: "https://claude.ai/artifact/VFnatqWfMsJuknMFSKPUQH",
    isPublic: false,
  },
  {
    id: "ar-rehearsal",
    title: "AR Rehearsal",
    kicker: "IDSN 538: Extended Reality Technologies",
    text: "An interactive Spline prototype of rehearsing with an AR headset that shows an actor her marks, cues and lines on stage, across three scenes you can walk through.",
    href: "https://claude.ai/artifact/REkPGXG34CZwRhnzY6hS41",
    isPublic: false,
  },
];

export const projects = [
  {
    id: "ar-rehearsal",
    group: "usc",
    title: "AR Rehearsal",
    skills: ["Spline"],
    meta: ["Fall 2026", "IDSN 538: Extended Reality Technologies", "Spline"],
    topics: ["Product", "XR"],
    body: [
      "An interactive prototype of rehearsing with an AR headset and a VR scene partner. The headset shows the actor her marks, cues and lines on stage.",
      "It plays out in three scenes: switch between the audience's view and the actor's, walk her to her gold marks, call for a line, pinch to change the backdrop, and get a warning before a quick change.",
    ],
    links: [],
    status: "In progress",
  },
  {
    id: "theatermax",
    group: "personal",
    title: "TheaterMax",
    skills: ["JavaScript", "Node.js", "GitHub Actions"],
    meta: ["In progress", "Personal project", "JavaScript, Node.js, GitHub Actions"],
    topics: ["Web apps"],
    body: [
      "A site that brings theater ticket sellers into one place, so you can compare prices, dates and seats for Broadway and Off-Broadway shows without checking a dozen websites.",
      "It lists every show with its lowest price, gathers lottery, rush and student deals, and compares sellers side by side on each show page. Scheduled GitHub Actions jobs keep the data fresh, and I'm working with ticket sellers to get live prices through official feeds and APIs.",
    ],
    links: [
      { label: "Open TheaterMax", href: "https://naomi-meininger.github.io/theatermax/" },
      { label: "Code on GitHub", href: "https://github.com/naomi-meininger/theatermax" },
    ],
    status: "Prototype",
  },
  {
    id: "greenroom",
    group: "usc",
    title: "greenroom",
    skills: [],
    meta: ["Fall 2026", "IDSN 599: Product Management for Challenge-Based Innovation", "Product demo"],
    topics: ["Product", "Web apps"],
    body: [
      "A product demo of a booking workspace for music agents and managers, so every hold, offer and contract for a tour lives in one place instead of across email threads and spreadsheets.",
      "It ranks venues by fit and fan demand in each city, optimizes the tour route, estimates the net for each show, and prices travel and backline rentals before anything is booked.",
    ],
    links: [],
    status: "In progress",
  },
  {
    id: "ecotein",
    group: "usc",
    title: "Ecotein",
    skills: [],
    meta: ["Fall 2026", "IDSN 599: Product Management for Challenge-Based Innovation", "Team of five"],
    topics: ["Product"],
    body: [
      "A startup pitch for protein powder made by feeding microbes broken-down plastic, sold first to fish-feed mills in Singapore. I presented our financials and worked on the value proposition.",
    ],
    links: [{ label: "Read the case study", href: "masters.html#idsn-599", internal: true }],
  },
  {
    id: "alarm",
    group: "tufts",
    title: "Alarm.py",
    skills: ["Python", "Scapy"],
    meta: ["Spring 2024", "Network security", "Python, Scapy"],
    topics: ["Security"],
    body: [
      "A network incident detection tool. Point it at a live network stream or a set of PCAP files and it flags likely scans, vulnerabilities and credential leaks as they appear.",
    ],
    terminal: {
      label: "Sample output from Alarm.py showing detected FIN scans, Nikto scans and HTTP credentials",
      lines: [
        { kind: "warn", text: "WARNING: No IPv4 address found on en1 !" },
        { text: "ALERT #1: FIN Scan is detected from 172.19.47.252 (TCP)" },
        { text: "ALERT #2: FIN Scan is detected from 172.19.47.252 (TCP)" },
        { kind: "dim", text: "..." },
        { text: "ALERT #11: Nikto Scan is detected from 10.151.31.252 (TCP port 80)" },
        { kind: "dim", text: "..." },
        { text: "ALERT #29: HTTP credentials is detected from 10.144.31.242 (Username: redacted, Password: redacted)" },
      ],
    },
    links: [{ label: "Code on GitHub", href: "https://github.com/naomi-meininger/alarm" }],
  },
  {
    id: "end-game-simulator",
    group: "tufts",
    title: "End Game Simulator",
    skills: [],
    meta: ["Spring 2024", "Sports Analytics", "With Rohun Nanda, Mehr Dewan and Matt Feinberg"],
    topics: ["Data & modeling"],
    body: [
      "A simulator that tests end-of-game strategies so a team can see which one gives it the best chance of winning.",
    ],
    links: [
      { label: "Class presentation", href: "https://docs.google.com/presentation/d/12SW0c7auWC1h2tl860GD3fyzBPeXcb_hSZoyhimoaWU/edit?usp=sharing" },
      { label: "Code on GitHub", href: "https://github.com/RohunNanda/CS152-FinalProject" },
    ],
  },
  {
    id: "theta-budget-tracker",
    group: "personal",
    title: "Theta Budget Tracker",
    skills: ["Python", "Flask", "Selenium", "JavaScript", "jQuery", "HTML", "CSS", "Heroku"],
    meta: ["Kappa Alpha Theta", "Python, Flask, Selenium"],
    topics: ["Web apps"],
    body: [
      "As VP of Finance for my sorority, I was the only person who could see the budget, so every board member had to ask me before planning an event. I built a Flask site, hosted on Heroku, that uses Selenium to pull the budget from my account so they could check their own numbers.",
    ],
    links: [{ label: "Code on GitHub", href: "https://github.com/naomi-meininger/theta-budget-website" }],
    status: "No longer hosted",
  },
  {
    id: "theta-tracker",
    group: "personal",
    title: "Theta Tracker",
    skills: ["Heroku"],
    meta: ["Kappa Alpha Theta"],
    topics: ["Web apps"],
    body: [
      "Members earn points for optional events and lose them for unexcused absences, and you need zero or more to attend events like formal. Points are private, so a shared spreadsheet wasn't an option, and members had to ask an officer for their total.",
      "Theta Tracker gives each member a private login to check their points and dues, and shows when each was last updated.",
    ],
    links: [{ label: "Code on GitHub", href: "https://github.com/naomi-meininger/theta_tracker" }],
    status: "No longer hosted",
  },
  {
    id: "e4u",
    group: "tufts",
    title: "E4U: Exercise for You",
    skills: ["MongoDB", "Heroku"],
    meta: ["Web Programming", "Team of four", "MongoDB"],
    topics: ["Web apps"],
    body: [
      "A workout app where you create a profile, search an exercise API, log workouts, and view, edit or delete past ones.",
    ],
    links: [{ label: "Open the app", href: "https://inspiredbyw3.herokuapp.com/" }],
  },
  {
    id: "image-compressor",
    group: "tufts",
    title: "Image compressor and decompressor",
    skills: ["C"],
    meta: ["Fall 2022", "Machine Structure and Assembly-Language Programming", "With Stephen Chakoudian"],
    topics: ["Systems"],
    body: [
      "We compressed PPM images to a compact binary format using a discrete cosine transform and bit packing, then used bitwise operations to decompress them, averaging about 2% data loss.",
    ],
    figure: {
      src: compressionResults,
      width: 724,
      height: 836,
      alt: "Three test images shown before compression and after decompression, with error rates between 2.2% and 2.66%",
      caption: "Originals beside their decompressed versions.",
    },
    links: [],
  },
  {
    id: "music-and-math",
    group: "tufts",
    title: "Music and math",
    skills: [],
    meta: ["Spring 2022", "Mathematical Modeling", "With Scott Fullenbaum and Grace Hindermann"],
    topics: ["Data & modeling"],
    body: [
      "We modeled how music has evolved and what has influenced it, three ways: a directed graph of influence between artists, least squares regression on musical features over time, and a neural network that classifies songs by genre.",
    ],
    links: [
      { label: "Final paper (PDF)", href: publicFile("Final_Project_for_website.pdf") },
      { label: "Presentation and code", href: "https://docs.google.com/presentation/d/1qLlpuPIATkukZ-hbOyzz6mRWsLtxt2_uiusQCKGlU2s/edit?usp=sharing" },
    ],
  },
];

export const topics = ["Product", "XR", "Security", "Web apps", "Data & modeling", "Systems"];

// Sections on the Projects page, in display order. Each project's `group` picks one.
// `logo` shows a school's official logo in place of its name (a full URL or a file in public/logos/).
// Only use a logo the school allows for personal use: Tufts publishes its University Logo for that
// (brand.tufts.edu, never the seal); USC limits its marks to official university business, so USC
// gets its colors instead. `accent` and `accent2` color the rule under a heading.
export const groups = [
  { id: "usc", name: "USC", detail: "M.S. Integrated Design, Business, and Technology", accent: "#990000", accent2: "#FFCC00" },
  {
    id: "tufts",
    name: "Tufts University",
    detail: "B.S. Computer Science, minors in Mathematics and Theater",
    accent: "#3172AE",
    accent2: "#7AADE0",
  },
  { id: "personal", name: "Personal projects", detail: "Built on my own time" },
];
