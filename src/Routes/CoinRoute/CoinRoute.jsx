import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import coinInfo from '../../services/api';
import './CoinRoute.css';
import {
	numberWithCommas,
	percentageChange,
	renderNumberFormatting,
} from '../../helpers/helperFunctions';

export default function About() {
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
					<div className='sidebar'>
						<div className='coin-header'>
							<div className="name-header">
							<img id='coin-icon' src={coinData.icon} alt={`${coinId} icon`} />
							<p className='text-2xl'>{coinData.name}</p>
							<p>Rank: {coinData.rank}</p>
							</div>
						</div>
						<div className='coin-price'>
							<p className='font-bold text-4xl'>
								{numberWithCommas(coinData.price.toFixed(2))}
							</p>
							<p className={percentageChange(coinData.priceChange1d)}>
								{coinData.priceChange1d + '%'}
							</p>
						</div>
					</div>
					<div className='graph-data'>
						<h4>Graph Data</h4>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste porro fugit incidunt inventore exercitationem, nostrum vitae voluptatibus ad nobis, impedit tempore sint dolores modi mollitia magnam, voluptatum unde distinctio! Nemo!
						Minus tenetur assumenda rerum enim eveniet nostrum illum iure repellat, culpa sit laborum, incidunt temporibus quae, tempora at veniam consectetur id soluta ipsum ipsa. Optio assumenda odit ducimus veritatis repudiandae.</p>
					</div>
					<div className='news-section'>
						<h4>News Section</h4>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, aliquam. Veniam, impedit delectus? Natus amet consequuntur, ipsum facere hic optio, aliquid iusto illo assumenda nesciunt neque laborum corrupti ducimus? Natus?
						Nostrum vitae corrupti enim et ex repudiandae officiis reprehenderit maxime blanditiis, aut iure eligendi animi quam accusamus sequi consequatur vero nobis eveniet nihil voluptatibus sunt atque voluptas! Consectetur, nihil iure!</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
