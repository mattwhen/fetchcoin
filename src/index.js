import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './components/ErrorPage/ErrorPage';
import './App.css';
import CoinRoute from './Routes/CoinRoute/CoinRoute';

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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
