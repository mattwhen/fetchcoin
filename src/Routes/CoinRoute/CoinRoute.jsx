import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import coinInfo from '../../services/api';

export default function About() {
	let { coinId } = useParams();
	
	const [coinData, setCoinData] = useState([]);

	useEffect(() => {
	 const fetchData = async () => {
		 try {
			 const data = await coinInfo(coinId);
			 setCoinData(data);
				console.log(data);
			 
		 } catch (error) {
			 console.log('Error fetching coin', error);
		 }
	 };
	 fetchData();
	}, [coinId])

	return (
		<>
			<Nav />
			{/* <h1>{coinId}</h1> */}
			<img src={coinData.icon} alt={`${coinId} icon`}></img>
			<Footer />
		</>
	);
}
