// ---------------------------------------------------------------------------
// Quiz questions
// ---------------------------------------------------------------------------
// Edit freely before the meeting. Rules:
//   - Exactly 4 options each (the UI is built for 4 coloured tiles).
//   - "correct" is the 0-based index of the right option (0=A, 1=B, 2=C, 3=D).
//   - "time" is the countdown in seconds for that question (default 10).
//   - Keep option text short so it reads well on a phone.
//
// IMAGES (optional) --------------------------------------------------------
//   You can add pictures in two ways:
//
//   1. A picture ON THE QUESTION — shown big on the host screen above the
//      answers. Add an "image" field with a path or URL:
//         image: "img/salesforce-tower.jpg",
//
//   2. Pictures AS THE ANSWER OPTIONS — each option becomes an image tile on
//      the host screen (phones still just tap the coloured A/B/C/D button).
//      Use "optionImages" (array of 4 paths/URLs). You can still give short
//      "options" text as a caption/fallback, or leave them as "".
//         optionImages: ["img/logo-a.png","img/logo-b.png","img/logo-c.png","img/logo-d.png"],
//
//   Put image files in an "img/" folder next to these pages, or use full
//   https:// URLs. Recommended: landscape ~1200px wide for question images,
//   square ~400px for option images. See README "Adding pictures".
//
// A few answers below are marked  // TODO VERIFY  because they depend on your
// internal naming / the exact figure you want — check these before the session.
// ---------------------------------------------------------------------------

export const QUIZ_TITLE = "Salesforce Quiz";

export const questions = [
  {
    text: "In what year was Salesforce founded?",
    options: ["1995", "1999", "2004", "2010"],
    correct: 1,
    time: 10,
    // image: "img/example.jpg",   // <- optional picture on the question
  },
  {
    text: "What is Salesforce's agentic AI platform called?",
    options: ["Einstein GPT", "Agentforce", "Copilot 360", "AgentCloud"],
    correct: 1,
    time: 10,
  },
  {
    text: "Where is Salesforce's global headquarters?",
    options: ["New York City", "Seattle", "San Francisco", "Austin"],
    correct: 2,
    time: 10,
  },
  {
    text: "What is the name of Salesforce's HQ tower in San Francisco?",
    options: ["Salesforce Tower", "Dreamforce Tower", "Ohana Tower", "Benioff Tower"],
    correct: 0,
    time: 10,
  },
  {
    // TODO VERIFY: set the correct option / swap in real logo images.
    // Example of the picture-as-answer style — drop 4 logo images in img/ and
    // uncomment optionImages:
    text: "Which of these is the Salesforce logo?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    // optionImages: ["img/logo-a.png","img/logo-b.png","img/logo-c.png","img/logo-d.png"],
    correct: 0,
    time: 10,
  },
  {
    // TODO VERIFY: update to the current/internal name you want to quiz on.
    text: "Headless 360 has been rebranded — what is its current name?",
    options: ["Commerce Headless", "Composable Storefront", "Headless Cloud", "Storefront 360"],
    correct: 1,
    time: 10,
  },
  {
    // TODO VERIFY: approximate size of the SF office / Salesforce Tower — pick the figure you like.
    text: "Roughly how tall is Salesforce Tower (its claim to fame in SF)?",
    options: ["Tallest building in San Francisco", "Shortest tower downtown", "A single-storey office", "Underground bunker"],
    correct: 0,
    time: 10,
  },
];
