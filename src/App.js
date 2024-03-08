import React from 'react';
import Nav from './components/Nav/Nav';
import Intro from './components/Intro/Intro';
import Table from './components/Table/Table';
import Footer from './components/Footer/Footer';
import './App.css';
import Mission from './components/Mission/Mission';
import Contact from './components/Contact/Contact';

const App = () => {
	return (
		<>
			<Nav />
			<body>
				<Intro />
				<Table />
				<Mission />
				<Contact />
			</body>
			<Footer />
		</>
	);
};

export default App;
