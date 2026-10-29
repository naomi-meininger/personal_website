import compressionResults from "../assets/images/compression-results.jpg";
import { publicFile } from "./links.js";

// Newest first. `topics` drive the filter on the Projects page.
export const projects = [
  {
    id: "alarm",
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
    title: "Theta Budget Tracker",
    skills: ["Python", "Flask", "Selenium", "JavaScript", "jQuery", "HTML", "CSS", "Heroku"],
    meta: ["Personal project", "Kappa Alpha Theta", "Python, Flask, Selenium"],
    topics: ["Web apps"],
    body: [
      "As VP of Finance for my sorority, I was the only person who could see the budget, so every board member had to ask me before planning an event. I built a Flask site, hosted on Heroku, that uses Selenium to pull the budget from my account so they could check their own numbers.",
    ],
    links: [{ label: "Code on GitHub", href: "https://github.com/naomi-meininger/theta-budget-website" }],
    status: "No longer hosted",
  },
  {
    id: "theta-tracker",
    title: "Theta Tracker",
    skills: ["Heroku"],
    meta: ["Personal project", "Kappa Alpha Theta"],
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

export const topics = ["Security", "Web apps", "Data & modeling", "Systems"];
