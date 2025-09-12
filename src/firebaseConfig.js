// // src/firebaseConfig.js
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth"; // signInWithPopup is typically used in the component where you trigger sign-in, not directly in the config.
//
// const firebaseConfig = {
//     // Please get your actual API_KEY from your Firebase Project Settings in the Firebase Console.
//     // It's a unique string for your web app.
//     apiKey: "YOUR_ACTUAL_API_KEY_HERE",
//     authDomain: "moneymanage-a8580.firebaseapp.com",
//     projectId: "moneymanage-a8580",
//     storageBucket: "moneymanage-a8580.appspot.com",
//     messagingSenderId: "438290925415",
//     // Please get your actual APP_ID from your Firebase Project Settings in the Firebase Console.
//     // It's specific to the web app you registered.
//     appId: "YOUR_ACTUAL_APP_ID_HERE"
// };
//
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
//
// // Export auth and provider
// export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();
