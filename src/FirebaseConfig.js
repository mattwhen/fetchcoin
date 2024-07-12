import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
	getAuth,
	setPersistence,
	signInWithEmailAndPassword,
	browserSessionPersistence,
} from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

const firebaseApp = initializeApp({
	apiKey: "AIzaSyBADrE_egtaqi6UndL4gtXYpC4vIgO19jQ",
	authDomain: "fetchcoin-56235.firebaseapp.com",
	projectId: "fetchcoin-56235",
	storageBucket: "fetchcoin-56235.appspot.com",
	messagingSenderId: "329155771608",
	appId: "1:329155771608:web:2aff17272a64a64d736bad",
});

export const auth = getAuth(firebaseApp);

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
	if (user) {
		// User is signed in
		console.log("User is signed in:", user);
		// Update the UI or redirect to the dashboard
	} else {
		// User is signed out
		console.log("User is signed out.", user);
		// Redirect to login page or show sign-in options
		// window.location.href = "/login"; // Example of redirection
	}
});

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(firebaseApp);
