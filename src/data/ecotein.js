// Everything on the Ecotein page, taken from the Team 10 deck (IDSN 599, Fall 2026).
// Change numbers here, not in the page component.

export const team = [
  { name: "Yasmin Aref", focus: "Software engineering" },
  { name: "Paul Kang", focus: "Software engineering" },
  { name: "Seraph Kumar", focus: "Product design" },
  { name: "Adara Lui", focus: "Business and design" },
  { name: "Naomi Meininger", focus: "Software engineering", me: true },
];

export const myRole = [
  {
    title: "Presented the financials",
    body: "I presented the finance section of our pitch: the five-year revenue and EBITDA outlook, unit economics, and how we'd use the $50M raise across two stages.",
    href: "#financials",
  },
  {
    title: "Worked on the unique value proposition",
    body: "I helped shape how we framed why Ecotein matters: protein at scale that doesn't compete for farmland, built around two global problems, hunger and plastic waste.",
    href: "#value",
  },
  {
    title: "Brainstormed with the team",
    body: "I researched challenge areas and built a mind map alongside my teammates before we aligned on turning plastic into protein.",
    href: "#process",
  },
];

export const challenges = [
  { figure: "673M", text: "people went hungry in 2024, about 1 in every 12 people worldwide.", source: "FAO, SOFI 2025", filled: 1, total: 12, shape: "person" },
  { figure: "50%", text: "of habitable land is already farmed, leaving little room to grow more food.", source: "Our World in Data, via WEF 2019", filled: 5, total: 10, shape: "sprout" },
];

export const steps = [
  { title: "Extract", text: "Source plastic from recyclable materials." },
  { title: "Transform", text: "Break the plastic down into building blocks microbes can eat." },
  { title: "Ferment", text: "Grow protein-rich microbes on those building blocks." },
  { title: "Dry into powder", text: "Dry the microbes into a protein powder." },
];

export const productSpec = [
  ["Protein", "about 55%"],
  ["Feedstock", "Recovered PET plastic"],
  ["Sold as", "Feed ingredient, 25 kg bags"],
];

export const drivers = {
  technology: [
    { title: "Pyrolysis", text: "Breaks plastic down with heat, a fit for countries with little farmland." },
    { title: "AI and genomics", text: "Microbes can be modified for higher yield and lower cost." },
    { title: "AI and bioinformatics", text: "Our long-term vision: microbes tuned to each customer's nutritional needs." },
  ],
  market: [
    { title: "Demand for alternative protein", text: "Government funding for alternative protein grew from about $700M in 2021 to over $2.5B in 2025." },
    { title: "Plastic everywhere", text: "Plastic is hard to recycle, and the cost of dealing with it keeps growing." },
    { title: "Plastic costs money to dump", text: "Singapore charges S$89.60 a tonne to burn it." },
  ],
};

export const pathway = [
  { title: "Government funding and support", text: "Grants from Enterprise Singapore, A*STAR and the Singapore Food Story programme." },
  { title: "A lower bar for animal feed", text: "We need feed licenses rather than novel-food approval." },
  { title: "Plastic that's easy to get", text: "Bottle returns supply plastic at little or no cost." },
];

export const market = [
  { key: "TAM", label: "Total addressable market", value: "$202B", text: "All protein for human food ($55B) plus all the protein in fish feed and pet food ($147B), worldwide." },
  { key: "SAM", label: "Serviceable market", value: "$2.0B", text: "Asia-Pacific fishmeal we can replace ($1.9B), plus aid food we could test with WFP and UNICEF ($0.14B). 1% of TAM." },
  { key: "SOM", label: "What we can win by 2031", value: "$15M", text: "Fish feed only, priced 8% below fishmeal per unit of protein." },
];

export const marketSources = [
  { label: "Grand View Research", href: "https://www.grandviewresearch.com/industry-analysis/protein-ingredients-market" },
  { label: "Global Market Insights", href: "https://www.gminsights.com/industry-analysis/animal-feed-protein-ingredients-market" },
  { label: "WFP", href: "https://executiveboard.wfp.org/document_download/WFP-0000157537" },
  { label: "UNICEF", href: "https://www.unicef.org/supply/media/24596/file/RUTF-Market-and-Supply-Update-2025.pdf" },
  { label: "Lifemate", href: "https://lifematetech.com/articles/gas-fermentation-food-feed-capacity-gap" },
];

// Positions on the deck's map: x from virgin (-1) to renewable (1) materials,
// y from low (-1) to high (1) supply reliability.
export const positioning = [
  { name: "Fishmeal", x: -0.72, y: -0.68 },
  { name: "Soybean meal", x: -0.46, y: -0.3 },
  { name: "Unibio", x: -0.17, y: -0.4 },
  { name: "Poultry meal", x: 0.17, y: -0.48 },
  { name: "Insect meal", x: 0.53, y: -0.6 },
  { name: "Solar Foods", x: 0.35, y: 0.38 },
  { name: "Ecotein", x: 0.78, y: 0.7, us: true },
];

export const comparisonColumns = ["No farm or fish", "Paid for input", "Cleared for sale", "Scale today"];
export const comparison = [
  { name: "Ecotein", us: true, cells: ["Yes", "Yes*", "Not yet", "Not yet"] },
  { name: "Solar Foods", cells: ["Yes", "No", "Yes (Singapore)", "Yes"] },
  { name: "Unibio", cells: ["Yes", "No", "Yes (Saudi Arabia)", "Yes"] },
  { name: "Insect meal", cells: ["Partly", "Partly", "Yes", "Partly"] },
  { name: "Poultry meal", cells: ["No", "No", "Yes", "Yes"] },
  { name: "Soybean meal", cells: ["No", "No", "Yes", "Yes"] },
  { name: "Fishmeal", cells: ["No", "No", "Yes", "Yes"] },
];

// US$ per kg of protein
export const priceBenchmark = [
  { name: "Fishmeal", value: 4.54 },
  { name: "Ecotein", value: 4.18, us: true },
  { name: "Poultry meal", value: 1.68 },
  { name: "Soybean meal", value: 0.83 },
];

export const impact = [
  { figure: "~7,865 t", label: "of protein a year", text: "made from 14,300 t of plastic" },
  { figure: "~25,000 t", label: "of wild fish", text: "left in the sea each year instead of ground into fishmeal" },
  { figure: "~10,600", label: "acres of farmland", text: "not needed each year, about 6% of Singapore's land" },
];

// $ millions
export const financials = [
  { year: "FY2027", revenue: 0.13, ebitda: -0.73 },
  { year: "FY2028", revenue: 1.07, ebitda: -1.07 },
  { year: "FY2029", revenue: 2.89, ebitda: -1.24 },
  { year: "FY2030", revenue: 9.44, ebitda: 0.42 },
  { year: "FY2031", revenue: 21.83, ebitda: 6.2 },
];

// $ per tonne of fish feed; sums to the $2,300 price
export const unitEconomics = [
  { label: "Plastic and cleaning", value: 182 },
  { label: "Processing", value: 350 },
  { label: "QA, packaging and freight", value: 275 },
  { label: "Royalty and commission", value: 184 },
  { label: "Contribution", value: 1309, us: true },
];

export const sensitivity = [
  { id: "low", name: "Low", assumption: "Fishmeal falls back to early-2025 prices; 55% protein, 15% discount", price: 1150, earned55: -208, earned45: -315 },
  { id: "base", name: "Base", assumption: "Today's fishmeal; 55% protein, about 8% discount", price: 2300, earned55: 850, earned45: 743 },
  { id: "high", name: "High", assumption: "Today's fishmeal; 65% protein measured, 10% discount", price: 2650, earned55: 1172, earned45: 1065 },
];

export const stages = [
  { amount: "$14M", name: "Stage 1", years: "2027 to 2028", goal: "Plant 1 and first sales", proves: ["A protein spec and a pilot yield of 35% or more", "Paid feed trials with mills"] },
  { amount: "$36M", name: "Stage 2", years: "2028 to 2030", goal: "Plant 2 and profitability", proves: ["Supply contracts with feed mills", "Positive EBITDA in 2030"] },
];

// Stage 1 use of funds; `share` is % of gross uses (from the deck), `dots` out of 100 for the dot grid
export const useOfFunds = [
  { label: "Plant 1 build", amount: "$10.50M", share: 82.5, dots: 82, tone: "lime" },
  { label: "Team", amount: "$0.64M", share: 5.0, dots: 5, tone: "periwinkle" },
  { label: "Regulatory and R&D", amount: "$0.59M", share: 4.6, dots: 5, tone: "paper" },
  { label: "Plant costs and pilots", amount: "$0.58M", share: 4.6, dots: 5, tone: "gray" },
  { label: "Marketing and legal", amount: "$0.41M", share: 3.2, dots: 3, tone: "orange" },
];

export const proForma =
  "https://docs.google.com/spreadsheets/d/1jtyvyG6DoslshTeot4kF7PS8KIeW520i/edit?usp=drive_link&ouid=100643048238972513869&rtpof=true&sd=true";

export const insights = [
  { who: "Business consultant", field: "Operations, finance", quote: "The disruptive angle could make this more financially viable than existing ways of reducing plastic.", change: "We lead with the business case: free plastic feedstock, and plastic credits as a second income." },
  { who: "Software engineer", field: "Industrial, data visualization", quote: "Misinformation could scare buyers away, but strong branding and education could help us ride the protein wave.", change: "We sell business to business through feed mills, with safety data first, not a consumer brand." },
  { who: "Process development engineer", field: "Biotech manufacturing", quote: "Scaling is the hard part: commercial production needs bioreactors of roughly 10,000–100,000 L.", change: "We start with a contract fermenter and build our own plants only from 2028." },
  { who: "Healthcare professional", field: "Public health", quote: "Safety data will decide adoption: what happens to the plastic’s contaminants and additives.", change: "A feedstock safety package is a product requirement, and it comes before any sale." },
];

export const teamProcess = [
  { title: "Surface", text: "Each of us researched challenges we cared about and shared them with the team." },
  { title: "Align", text: "We agreed on one challenge area before ideating on solutions." },
  { title: "Diverge", text: "Each of us built a mind map of the drivers, resources and constraints." },
  { title: "Align", text: "We shared findings and settled on the problem and how to frame it." },
  { title: "Ideate and iterate", text: "We kept working together to develop a research-backed solution." },
];
