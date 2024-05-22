import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './components/ErrorPage/ErrorPage';
import './App.css';
import CoinRoute from './Routes/CoinRoute/CoinRoute';
import Login from './Routes/Login/Login';
import Signup from './Routes/Signup/Signup';

// Initialize Firebase and create a Firebase App object
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyBADrE_egtaqi6UndL4gtXYpC4vIgO19jQ",
	authDomain: "fetchcoin-56235.firebaseapp.com",
	projectId: "fetchcoin-56235",
	storageBucket: "fetchcoin-56235.appspot.com",
	messagingSenderId: "329155771608",
	appId: "1:329155771608:web:2aff17272a64a64d736bad"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

const router = createBrowserRouter([
	{
		path: '/fetchcoin',
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/coin/:coinId',
		element: <CoinRoute />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/login',
		element: <Login />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/signup',
		element: <Signup />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
