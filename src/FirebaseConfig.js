import { initializeApp } from 'firebase/app';
import { getAuth, sendSignInLinkToEmail, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBADrE_egtaqi6UndL4gtXYpC4vIgO19jQ',
	authDomain: 'fetchcoin-56235.firebaseapp.com',
	projectId: 'fetchcoin-56235',
	storageBucket: 'fetchcoin-56235.appspot.com',
	messagingSenderId: '329155771608',
	appId: '1:329155771608:web:2aff17272a64a64d736bad',
};

const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();

export {auth, app};