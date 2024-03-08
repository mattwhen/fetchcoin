import React from 'react';
import { Form, useLoaderData } from 'react-router-dom';

import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

export default function About({ params }) {
	return (
		<>
			<Nav />
			<h1>{params.id}</h1>
			<Footer />
		</>
	);
}
