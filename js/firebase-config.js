// ---------------------------------------------------------------------------
// Firebase configuration
// ---------------------------------------------------------------------------
// 1. Go to https://console.firebase.google.com  ->  Add project (free "Spark"
//    plan, no credit card needed).
// 2. In the project, click the </> ("Web") icon to register a web app.
// 3. Enable "Realtime Database" (Build -> Realtime Database -> Create Database
//    -> Start in TEST mode for the meeting; see README for the security rule).
// 4. Copy the config object Firebase shows you and paste the values below,
//    replacing every REPLACE_ME.
//
// The databaseURL is the important one for this app. It looks like:
//   https://your-project-id-default-rtdb.europe-west1.firebasedatabase.app
// (region may differ) or the older https://your-project-id.firebaseio.com
// ---------------------------------------------------------------------------

export const firebaseConfig = {
    apiKey: "AIzaSyBPDuyommf0wsUkmAoYUbCljIUWQ3Zo0Nc",
    authDomain: "sf-quiz-63d9f.firebaseapp.com",
    databaseURL: "https://sf-quiz-63d9f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sf-quiz-63d9f",
    storageBucket: "sf-quiz-63d9f.firebasestorage.app",
    messagingSenderId: "582390570147",
    appId: "1:582390570147:web:fdf3b67de4cd336616f316"
  };

// Quick sanity check so you get a friendly error instead of a cryptic one.
export const isConfigured = !Object.values(firebaseConfig).some(
  (v) => typeof v === "string" && v.includes("REPLACE_ME")
);
