// The number behind the guessing game on the Theater page. Update it after each show you log in Mezzanine.
export const showsSeen = {
  year: 2026,
  count: 34,
  asOf: "October 2026",
};

// Each group gets its own list on the Theater page, newest first. Show titles render in italics.
// `company` is shown for post-college credits; the Tufts list leaves it off.
export const creditGroups = [
  {
    id: "post-college-credits",
    name: "Post-college credits",
    credits: [
      { show: "A Chorus Line", role: "Mark", term: "Summer 2026", company: "After Work Theater" },
    ],
  },
  {
    id: "tufts-credits",
    name: "Tufts credits",
    credits: [
      { show: "Huit Femmes / Eight Women", role: "Stage Manager", term: "Spring 2024" },
      { show: "And Then They Came for Me", role: "Additional Voices", term: "Spring 2024" },
      { show: "The Wolves", role: "Costume Designer", term: "Fall 2023" },
      { show: "Hair", role: "Hair & Makeup Mentor", term: "Fall 2023" },
      { show: "tick, tick... BOOM!", role: "Director", term: "Summer 2023" },
      { show: "Lizzie", role: "Hair & Makeup Designer", term: "Summer 2023" },
      { show: "Falsettos", role: "Deck Stage Manager", term: "Spring 2023" },
      { show: "The Addams Family", role: "Grandma Addams", term: "Fall 2022" },
      { show: "Into the Woods", role: "Hair & Makeup Designer", term: "Fall 2022" },
      { show: "The Lightning Thief: The Percy Jackson Musical", role: "Costume Designer", term: "Spring 2022" },
    ],
  },
];
