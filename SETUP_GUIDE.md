# Salesforce Quiz — Setup & Operations Guide

Practical guide for the **already-deployed** game: how to run it in the meeting,
edit the questions, and fix things if they go wrong. For first-time Firebase
setup from scratch, see `README.md`.

---

## 1. Where everything lives

| Thing | Value |
|-------|-------|
| **Live site** | https://pwillemot.github.io/sf-quiz-game/ |
| **Host screen** (projector) | https://pwillemot.github.io/sf-quiz-game/host.html |
| **Player screen** (phone) | https://pwillemot.github.io/sf-quiz-game/play.html |
| **GitHub repo** | https://github.com/pwillemot/sf-quiz-game (public) |
| **Local folder** | `…/ArcelorMittal/Long SIC/sf-quiz-game/` |
| **Firebase project** | `sf-quiz-63d9f` (region europe-west1) |
| **Firebase console** | https://console.firebase.google.com/project/sf-quiz-63d9f |

Hosting is **GitHub Pages** (static files). Live sync between the host screen
and the phones runs through **Firebase Realtime Database**. There is no server
to start and nothing to install — it's just a website.

---

## 2. Running the game in the meeting

1. On the **projector**, open the **host screen** and click **🖥 Host a game**.
2. A big **PIN** and a **QR code** appear.
3. Tell the room: *scan the QR code with your phone camera* (or go to the site
   and type the PIN). Names appear in the lobby as people join.
4. Once everyone's in, click **Start quiz**.
5. Each question runs **10 seconds** (ends early once everyone has answered).
   The correct answer + how people voted is revealed, then the **leaderboard**.
6. Click **Next question** to continue. After the last question the **final
   results** show, with medals on each player's phone.

**Golden rules**
- Keep **one** host tab open — it drives the whole game.
- **Refreshing the host page starts a brand-new game with a new PIN.** Only do
  that to reset between rounds — never mid-game.
- Phones can lock/sleep between questions; scores are kept, players just tap to
  answer when the next question appears.

**Pre-meeting checklist**
- [ ] Open host.html once beforehand and confirm the PIN + QR show (not the
      "configure Firebase" screen).
- [ ] Scan the QR with your own phone and play one question end-to-end.
- [ ] Have the questions reviewed (see §3 — 4 answers still need verifying).
- [ ] Projector resolution OK? The host screen scales, but bigger is better.

---

## 3. Editing the questions

All 7 questions live in **`js/questions.js`**. Each looks like:

```js
{
  text: "In what year was Salesforce founded?",
  options: ["1995", "1999", "2004", "2010"],
  correct: 1,          // 0=A(first), 1=B, 2=C, 3=D  -> here "1999"
  time: 10,            // seconds for this question
},
```

Rules: exactly **4 options**, `correct` is the **0-based** index of the right
one, keep option text short (it must fit a phone button).

### ⚠️ 4 answers still need verifying
These are marked `// TODO VERIFY` in the file because they depend on current /
internal naming or the exact figure you want:

1. **Salesforce logo** — what the logo depicts (currently "A cloud").
2. **"Headless 360 → current name"** — confirm the current/internal product
   name and which option is correct.
3. **Salesforce Tower / office size** — pick the exact fact/figure you want to
   quiz on.
4. (Double-check the founding-year and HQ ones too, but those are safe.)

### How to publish an edit
After changing any file:

```bash
cd "…/ArcelorMittal/Long SIC/sf-quiz-game"
git add -A
git commit -m "Tweak quiz questions"
git push
```

GitHub Pages rebuilds automatically in **~1 minute**. Hard-refresh the browser
(Cmd+Shift+R) to bust the cache.

---

## 4. Changing the look / behaviour

| Want to… | Edit |
|----------|------|
| Change quiz title | `QUIZ_TITLE` in `js/questions.js` |
| Change per-question time | `time:` on each question in `js/questions.js` |
| Change colours / styling | `css/styles.css` (`--sf-blue`, `--a`…`--d`, etc.) |
| Change scoring | `endQuestion()` in `host.html` (500 base + 500 speed bonus) |
| Change how many leaderboard rows show | `.slice(0, 8)` in `host.html` |

---

## 5. Troubleshooting

**Host/player shows "⚙️ configure Firebase"**
The keys in `js/firebase-config.js` are missing/placeholder. They're already
filled in on the deployed site, so this only happens if the file was reverted.

**"Permission denied" / players can't join, no names appear**
The Firebase database rules got locked down (or test-mode expired). Fix in
Console → **Realtime Database → Rules**, publish exactly:
```json
{ "rules": { "games": { "$pin": { ".read": true, ".write": true } } } }
```

**QR code doesn't render on the host screen**
It's drawn by a CDN library (`qrcodejs`). If the venue blocks that CDN, players
can still join manually: go to the site and type the PIN shown on screen.

**Nothing syncs / leaderboard stuck**
Check the host laptop has internet (Firebase needs it). Reload the host page to
start a fresh game (new PIN) as a last resort.

**Site shows an old version after an edit**
GitHub Pages caches. Wait 1–2 min after `git push`, then hard-refresh
(Cmd+Shift+R). Confirm the build finished at
repo → **Actions** / **Settings → Pages**.

**Local testing on a phone didn't work**
Expected — the Mac firewall / corporate Wi-Fi blocks laptop↔phone. Always test
via the **public GitHub Pages URL**, which works on any network.

---

## 6. Data & privacy notes

- Firebase **web config keys are public by design** — they're safe in the repo.
  Access is controlled by the database rules, which only allow the `games/`
  branch used by this quiz.
- Player data is trivial (a display name + score) and lives only under
  `games/{PIN}`. To wipe everything, delete the `games` node in the Firebase
  console, or delete the whole Realtime Database.
- This is fine for an internal, one-off meeting game. Don't reuse this open-rule
  setup for anything holding real/sensitive data.
