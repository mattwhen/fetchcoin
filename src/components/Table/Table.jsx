import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { numberWithCommas, percentageChange, renderNumberFormatting } from '../../helpers/helperFunctions';
import Loading from '../Loading/Loading';
import Pagination from '../Pagination/Pagination';
import './Table.css';

const apiKey = process.env.REACT_APP_KEY;

export default function Table() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);

	const numOfCoinsPerPage = 20;
	const url = `https://openapiv1.coinstats.app/coins?limit=1000`;

	const tableHeaders = [
		{
			id: 0,
			name: 'Rank',
		},
		{
			id: 1,
			name: 'Name',
		},
		{
			id: 2,
			name: 'Price',
		},
		{
			id: 3,
			name: '24 %',
		},
		{
			id: 4,
			name: 'Market Cap',
		},
		{
			id: 5,
			name: 'Total Supply',
		},
		{
			id: 6,
			name: 'Volume',
		},
	];

	const mapHeaders = tableHeaders.map((coin) => (
		<tr
			key={coin.id}
			className='text-black font-normal ml-4 flex items-center w-full h-10'
		>
			{coin.name}
		</tr>
	));

	function handleClick(currentPage) {
		console.log('Current Page:', currentPage);
		setPage(currentPage);
	}

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: new Headers({
				accept: 'application/json',
				'Accept-Encoding': 'br',
				'Cache-Control': 'max-age=31536000', // Cache data for one year.
				'X-API-KEY': apiKey,
			}),
		};

		const fetchData = () => {
			try {
				// Render data initially.
				fetch(url, options)
					.then((response) => response.json()) // Returns a promise which resolves to a JavaScript object.
					.then((json) => {
						setData(json.result);
						setLoading(false);
					})
					.catch((error) => console.error(error));
				
					// Update the data in the table every 10 seconds.
					let intervalData = setInterval(() => {
						fetch(url, options)
							.then((response) => response.json())
							.then((json) => {
								console.log('10 sec interval fetch');
								setData(json.result);
							})
							.catch((error) => console.error(error));
					}, 10000);
			
					return () => clearInterval(intervalData);

			} catch (error) {
				console.error('Error fetching data for Table component', error);
			}
		}
		fetchData();

	}, []);

	// While fetching data, display spinning icon to user that the data is currently trying to render itself.
	if (loading) return <Loading mapHeaders={mapHeaders} />;

	return (
		<>
			<div id='crypto' className=''>
				<Pagination
					data={data}
					page={page}
					setPage={setPage}
					numOfCoinsPerPage={numOfCoinsPerPage}
					handleClick={handleClick}
				/>
			</div>
			{/* <------------------------------------ TABLE SECTION ------------------------------> */}
			<section className='overflow-x-auto rounded-md mx-2 lg:max-w-5xl lg:m-auto'>
				<table className='table-auto mt-8'>
					<thead className='flex items-center  bg-silver-background'>
					{mapHeaders}
					</thead>
					<tbody className='w-40'>
						{/* Render Coinstats API data */}
						{data
							.slice(
								page * numOfCoinsPerPage - numOfCoinsPerPage,
								page * numOfCoinsPerPage
							)
							.map((coin, i) => (
								<>
											<Link to={`/coin/${coin.id}`} >
										<tr
											key={i}
											className='h-14 hover-crypto flex items-center lg:hover:cursor-pointer'
										>
											<td className='RANK'>
												<div className='ml-6 w-32 font-light '>{coin.rank}</div>
											</td>
											<td>
												<div className='NAME flex items-center pl-2 w-44 overflow-auto'>
													<div className='text-left'>
														<img
															src={coin.icon}
															className='w-8 h-8 mr-4'
															alt='crypto-icon'
														></img>
													</div>
													<div className='flex flex-col justify-center'>
														<span className='text-sm leading-4 text-left font-bold'>
															{coin.name}
														</span>
														<span className='text-sm font-semi'>
															{coin.symbol}
														</span>
													</div>
												</div>
											</td>
											<td className='PRICE'>
												<div className='w-40 ml-2'>
													<span
														className={percentageChange(coin.priceChange1d)}
													>
														{/* Rounds price to two decimal places */}
														{numberWithCommas(coin.price.toFixed(2))}
													</span>
												</div>
											</td>
											<td>
												<div className='flex justify-start w-32'>
													<span
														// Sets the class depending on whether the price is POSITIVE or NEGATIVE.
														className={percentageChange(coin.priceChange1d)}
													>
														{coin.priceChange1d}%
													</span>
												</div>
											</td>
											<td>
												<div className=' w-36'>
													<span className='ml-2 font-normal'>
														{renderNumberFormatting(coin.marketCap)}
													</span>
												</div>
											</td>
											<td>
												<div className='w-32 ml-2'>
													<span className='font-normal'>
														{renderNumberFormatting(coin.totalSupply)}
													</span>
												</div>
											</td>
											<td>
												<div className='w-40 ml-2'>
													<span className='font-normal'>
														{renderNumberFormatting(coin.volume)}
													</span>
												</div>
											</td>
										</tr>
									</Link>
								</>
							))}
					</tbody>
				</table>
			</section>
			{/*  <------------------------------------ END TABLE SECTION ------------------------------> */}
			<Pagination
				data={data}
				page={page}
				setPage={setPage}
				numOfCoinsPerPage={numOfCoinsPerPage}
				handleClick={handleClick}
			/>
		</>
	);
}
