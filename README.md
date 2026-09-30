# Salesforce Quiz 🎯☁️

A live, **Kahoot-style** trivia game for kicking off a meeting.

- **Host screen** (on the projector): shows a game PIN + **QR code**, a live
  lobby of players, each question with a **10-second timer**, the answer
  distribution, and a **live leaderboard** between questions.
- **Players** scan the QR code (or open the site + type the PIN) and answer on
  their **phones** — four big coloured buttons, just like Kahoot.
- **Scoring** rewards both correctness and speed (500–1000 points per question).

It's a static site (HTML/CSS/JS) hosted on **GitHub Pages**, using a free
**Firebase Realtime Database** for the live sync between the host screen and the
phones. No build step, no server to run, no credit card.

---

## What you need to do (≈10 minutes, once)

### 1. Create a free Firebase project

1. Go to <https://console.firebase.google.com> and sign in with a Google account.
2. **Add project** → give it any name (e.g. `sf-quiz`) → you can disable Google
   Analytics → **Create project**. This uses the free **Spark** plan (no credit
   card).
3. In the left menu: **Build → Realtime Database → Create Database**.
   - Pick a location (e.g. *europe-west1*).
   - Choose **Start in test mode** → **Enable**.
     *(Test mode is fine for a short meeting game. See "Locking it down" below
     if you want a proper rule.)*
4. Register a web app: click the **gear ⚙ → Project settings**, scroll to
   **Your apps**, click the **`</>`** (Web) icon, give it a nickname, **Register
   app**. Firebase shows you a `firebaseConfig = { ... }` object.

### 2. Paste your config

Open **`js/firebase-config.js`** and replace every `REPLACE_ME` with the values
from that `firebaseConfig` object. The important one is **`databaseURL`** — make
sure it's included (it looks like
`https://sf-quiz-default-rtdb.europe-west1.firebasedatabase.app`).

### 3. Publish on GitHub Pages

1. Create a new GitHub repo named **`sf-quiz-game`** and push these files (see
   commands below).
2. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from
   a branch → Branch: `main` / root → Save**.
3. After a minute your game is live at
   `https://<your-username>.github.io/sf-quiz-game/`.

That URL is what players will reach when they scan the QR code.

---

## Running the game

1. On the **projector**, open the site and click **🖥 Host a game**.
2. A **PIN** and **QR code** appear. Ask everyone to scan it (phone camera →
   tap the link) or go to the site and type the PIN.
3. Names pop into the lobby as people join. Click **Start quiz**.
4. Each question runs for 10 seconds (or ends early once everyone has answered).
   The correct answer + distribution is revealed, then the **leaderboard**.
5. Click **Next question** to continue; after the 7th, the **final results**
   show, and each phone shows its rank + medal.

> Tip: keep the host tab as the single source of truth. If you refresh the host
> page it starts a **new game with a new PIN** — do that only between rounds.

---

## Editing the questions

All 7 questions live in **`js/questions.js`**. Each has 4 options, a `correct`
index (0=A, 1=B, 2=C, 3=D) and a `time` in seconds. A few answers are marked
`// TODO VERIFY` because they depend on your internal naming or the exact figure
you want — please review those before the meeting.

---

## Testing locally

Because the pages use JS modules, open them through a tiny local server (not
`file://`):

```bash
cd sf-quiz-game
python3 -m http.server 8000
# then open http://localhost:8000 on your laptop
# and http://<your-laptop-LAN-ip>:8000 on your phone (same Wi-Fi)
```

You still need the Firebase config filled in for the live sync to work.

---

## Push to GitHub

```bash
cd sf-quiz-game
git init
git add .
git commit -m "Salesforce Kahoot-style quiz game"
git branch -M main
git remote add origin https://github.com/<your-username>/sf-quiz-game.git
git push -u origin main
```

---

## Locking it down (optional)

Test-mode rules let anyone read/write your database for 30 days — fine for a
one-off game. If you want it tighter, set these rules in **Realtime Database →
Rules** (players can join and answer, but the structure is constrained):

```json
{
  "rules": {
    "games": {
      "$pin": {
        ".read": true,
        ".write": true
      }
    }
  }
}
```

For anything beyond a casual internal game, add auth — but that's overkill here.

---

## How it fits together

| File | Role |
|------|------|
| `index.html` | Landing page — Host vs. Join |
| `host.html` | Host/projector screen — PIN, QR, timer, reveal, leaderboard |
| `play.html` | Phone player — join, tap answers, see result & rank |
| `js/firebase-config.js` | **Your** Firebase keys (edit this) |
| `js/db.js` | Firebase Realtime DB helpers + data model |
| `js/questions.js` | The 7 questions (edit this) |
| `css/styles.css` | All styling |

Data model (per game, keyed by PIN):

```
games/{PIN}/meta        { state, currentQ, totalQ, questionStartedAt }
games/{PIN}/players/{id}{ name, score }
games/{PIN}/answers/{q}/{id} { choice, ms, name }
```
