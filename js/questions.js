// ---------------------------------------------------------------------------
// Quiz questions
// ---------------------------------------------------------------------------
// Edit freely before the meeting. Rules:
//   - Exactly 4 options each (the UI is built for 4 coloured tiles).
//   - "correct" is the 0-based index of the right option (0=A, 1=B, 2=C, 3=D).
//   - "time" is the countdown in seconds for that question (default 10).
//   - Keep option text short so it reads well on a phone.
//
// A few answers below are marked  // TODO VERIFY  because they depend on your
// internal naming / the exact figure you want to use — check these before the
// session and adjust "correct" or the option text as needed.
// ---------------------------------------------------------------------------

export const QUIZ_TITLE = "Salesforce Quiz";

export const questions = [
  {
    text: "In what year was Salesforce founded?",
    options: ["1995", "1999", "2004", "2010"],
    correct: 1,
    time: 10,
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
    // TODO VERIFY: set the correct shape/colour of the current Salesforce logo.
    text: "What does the Salesforce logo depict?",
    options: ["A lightning bolt", "A cloud", "A blue star", "A wave"],
    correct: 1,
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
