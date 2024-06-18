import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBADrE_egtaqi6UndL4gtXYpC4vIgO19jQ",
	authDomain: "fetchcoin-56235.firebaseapp.com",
	projectId: "fetchcoin-56235",
	storageBucket: "fetchcoin-56235.appspot.com",
	messagingSenderId: "329155771608",
	appId: "1:329155771608:web:2aff17272a64a64d736bad",
};




const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
