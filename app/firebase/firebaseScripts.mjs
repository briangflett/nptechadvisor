// This testing wrapper lets us run test firebase modules locally.
// using javascript module files (*.mjs) outside of Next.js
// Make sure the code is in sync with the code in firebaseClient.tsx
import dotenv from "dotenv";

import { initializeApp } from "firebase/app";
//  import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";

dotenv.config({ path: "./.env.local" });
console.log(
  "process.env.NEXT_PUBLIC_USE_EMULATORS = ",
  process.env.NEXT_PUBLIC_USE_EMULATORS
);

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

console.log("firebaseConfig = ", firebaseConfig);

const app = initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);
const storage = getStorage(app);

console.log("db = ", db);

// Use the local emulators if set up in the environment config
if (process.env.NEXT_PUBLIC_USE_EMULATORS === "true") {
  console.log("Using the local emulators for Firebase");
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
}

console.log("at end of firebaseTesting.mjs");

export { auth, db, app, functions, storage };
