// ---------------------------------------------------------------------------
// Firebase Realtime Database wrapper
// ---------------------------------------------------------------------------
// Thin helpers over the Firebase modular SDK (loaded from the CDN). Everything
// the host and player pages need to talk to the shared game lives here.
//
// Data model (per game, keyed by a short PIN):
//   games/{PIN}/
//     meta:      { state, currentQ, questionStartedAt, createdAt }
//     players/{playerId}: { name, score }
//     answers/{qIndex}/{playerId}: { choice, ms, correct }
//
//   state is one of: "lobby" | "question" | "reveal" | "leaderboard" | "ended"
// ---------------------------------------------------------------------------

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  update,
  get,
  onValue,
  onDisconnect,
  serverTimestamp,
  push,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

import { firebaseConfig, isConfigured } from "./firebase-config.js";

export { isConfigured, serverTimestamp };

let db = null;

export function initDb() {
  if (!isConfigured) {
    throw new Error(
      "Firebase is not configured yet. Edit js/firebase-config.js and replace every REPLACE_ME (see README)."
    );
  }
  if (!db) {
    const app = initializeApp(firebaseConfig);
    db = getDatabase(app);
  }
  return db;
}

// --- path helpers ----------------------------------------------------------
export const gameRef = (pin) => ref(initDb(), `games/${pin}`);
export const metaRef = (pin) => ref(initDb(), `games/${pin}/meta`);
export const playersRef = (pin) => ref(initDb(), `games/${pin}/players`);
export const playerRef = (pin, id) => ref(initDb(), `games/${pin}/players/${id}`);
export const answersRef = (pin, q) => ref(initDb(), `games/${pin}/answers/${q}`);
export const answerRef = (pin, q, id) =>
  ref(initDb(), `games/${pin}/answers/${q}/${id}`);

// --- generic ---------------------------------------------------------------
export { ref, set, update, get, onValue, onDisconnect, push };

// Generate a 6-digit game PIN as a string.
export function makePin() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

// A stable-ish random id for a player (kept in sessionStorage by the page).
export function makeId() {
  return (
    Math.random().toString(36).slice(2, 8) +
    Math.random().toString(36).slice(2, 8)
  );
}
