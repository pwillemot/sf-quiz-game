# Salesforce Quiz — Status & To-Do

_Last updated: 2026-09-30_

## ✅ Done & live

Deployed at **https://pwillemot.github.io/sf-quiz-game/**
(Host: `/host.html` · Player: `/play.html`)

- Live Kahoot-style game: PIN + QR, 10s timer, reveal, live leaderboard, scoring
  (500 correct + up to 500 speed bonus).
- Firebase Realtime Database backend (`sf-quiz-63d9f`, region europe-west1),
  rules opened on `games/` only.
- **ArcelorMittal branding** on all pages: light theme, Oswald + Inter fonts,
  orange→red→magenta gradient, AM topbar.
- **Lobby:** centered "Salesforce Quiz" title, "Scan to join" heading, PIN
  beside the QR code, **no visible URL** (players just scan).
- **Player join screen:** centered card with the header.
- **Image support** in questions — see below.
- QR is relative, so it auto-points to the live Pages URL (never localhost).

## 🟠 Open — needs input / adjustments

### 1. Verify 4 question answers (`js/questions.js`, marked `// TODO VERIFY`)
- **Salesforce logo** (Q5) — best done as a **picture-answer** question: drop 4
  logo images in `img/` and uncomment the `optionImages` line on that question.
- **"Headless 360 → current name"** — confirm the current/internal product name
  and which option is correct.
- **Salesforce Tower / office size** — pick the exact fact/figure to quiz on.
- Double-check the founding-year (1999) and HQ (San Francisco) ones too (safe).

### 2. Optional: add pictures
Two ways, both documented at the top of `js/questions.js`:
- **On a question:** `image: "img/your-file.jpg"` → big picture above the answers.
- **As the answers:** `optionImages: ["img/a.png", ...]` → image tiles A/B/C/D.
- Put files in the `img/` folder (or use full `https://` URLs). Recommended:
  question images ~1200px wide (landscape), option images ~400px square.

## 🔁 How to edit & redeploy

```bash
cd "…/ArcelorMittal/Long SIC/sf-quiz-game"
# edit js/questions.js (or any file)
git add -A
git commit -m "Update quiz questions"
git push
# GitHub Pages rebuilds in ~1 min; hard-refresh (Cmd+Shift+R)
```

## 🧪 Testing notes

- **Phone testing:** use the **public Pages URL** (scan the QR). Local
  `localhost` only works on the laptop — phones can't reach the laptop because
  of the Mac firewall / Wi-Fi isolation.
- **Full game on one machine:** open `host.html` in one tab, `play.html` in 2–3
  other tabs with different names, then play through.
- Refreshing the **host** page starts a **new game with a new PIN** — only do
  that between rounds, never mid-game.

## 📎 Reference

- `README.md` — first-time Firebase setup from scratch.
- `SETUP_GUIDE.md` — run / edit / troubleshoot the deployed game.
- Repo: https://github.com/pwillemot/sf-quiz-game
