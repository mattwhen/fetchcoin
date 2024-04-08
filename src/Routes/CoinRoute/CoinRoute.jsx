import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import coinInfo from '../../services/api';
import './CoinRoute.css';
import News from '../../components/News/News';
import Graph from '../../components/Graph/Graph';
import CoinInfo from '../../components/CoinInfo/CoinInfo';

export default function CoinRoute() {
	let { coinId } = useParams();

	const [coinData, setCoinData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await coinInfo(coinId);
				setCoinData(data);
				setLoading(false);
				console.log(data);
			} catch (error) {
				console.log('Error fetching coin', error);
			}
		};
		fetchData();
	}, [coinId]);

	if (loading) {
		return <div>Loading</div>;
	}

	return (
		<>
			<Nav />
			{/* <h1>{coinId}</h1> */}
			<div className='container'>
				<div className='coin-container'>
					<CoinInfo coinData={coinData} coinId={coinId} />
					<div className='graph-data'>
						<Graph />
					</div>
					<div className='news-section'>
						<News />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
