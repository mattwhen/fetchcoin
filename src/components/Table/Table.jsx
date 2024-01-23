import React from 'react';
import { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import Search from '../Search/Search';
import './Table.css';
import Pagination from '../Pagination/Pagination';

const apiKey = process.env.REACT_APP_KEY;

export default function Table() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const numOfCoinsPerPage = 50;

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

	const mapHeaders = tableHeaders.map((item) => (
		<th
			key={item.id}
			className='text-black font-normal text-left pl-4 py-2'
			style={{ backgroundColor: '#F8FAFD' }}
		>
			{item.name}
		</th>
	));

	function handleClick(currentPage) {
		setPage(currentPage);
	}

	useEffect(() => {
		// Pass two arguments into our useEffect() hook: a Function and Array.
		// callback function is called after the component renders.
		// The second argument is called our dependencies array. This array should include all of the values that our side effect relies upon.

		const url = `https://openapiv1.coinstats.app/coins?limit=1000`;
		const options = {
			method: 'GET',
			headers: new Headers({
				accept: 'application/json',
				'Accept-Encoding': 'br',
				'Cache-Control': 'max-age=31536000', // Cache data for one year.
				'X-API-KEY': apiKey,
			}),
		};

		// Render data initially.
		fetch(url, options)
			.then((response) => response.json()) // Returns a promise which resolves to a JavaScript object.
			.then((json) => {
				console.log('Json data', json.result);
				setData(json.result);
				setLoading(false);
			})
			.catch((error) => console.error(error));

		// Update the data in the table every 10 seconds.
		let intervalData = setInterval(() => {
			fetch(url, options)
				.then((response) => response.json())
				.then((json) => {
					setData(json.result);
				})
				.catch((error) => console.error(error));
		}, 10000);

		return () => {
			clearInterval(intervalData);
		};
	}, []);

	// Adds comma formatting to "Price" column.
	function numberWithCommas(num) {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}

	// Handles assigning classes to each of the price change elements depending if there was a positive, negative, or no change in it's price.
	function percentageChange(currentChange) {
		if (currentChange === 0) return 'no-change';
		return currentChange > 0 ? 'green-change' : 'red-change';
	}

	// Simplifies the formatting for the Market Cap for a simplier look using the Intl method.
	function renderNumberFormatting(num) {
		return Intl.NumberFormat('en', { notation: 'compact' }).format(num);
	}

	// While fetching data, display message to user that the data is currently trying to render itself.
	if (loading) return <Loading mapHeaders={mapHeaders} />;

	return (
		<>
			{/* <Search displayMatch={displayMatch} /> */}
			{/* <------------------------------------ TABLE SECTION ------------------------------> */}
			<section className='overflow-x-auto rounded-md mx-2 lg:max-w-5xl lg:m-auto'>
				<table className='table-auto'>
					<thead>
						<tr>{mapHeaders}</tr>
					</thead>
					<tbody className='w-40'>
						{/* Render Coinstats API data */}
						{data
							.slice(
								page * numOfCoinsPerPage - numOfCoinsPerPage,
								page * numOfCoinsPerPage
							)
							.map((item, i) => (
								<tr key={i} className='h-14 hover-crypto'>
									<td className='RANK'>
										<div className='ml-6 w-20 font-light'>{item.rank}</div>
									</td>
									<td>
										<div className='NAME flex items-center pl-2 mr-11 w-44 overflow-auto'>
											<div className='text-left'>
												<img
													src={item.icon}
													className='w-8 h-8 mr-4'
													alt='crypto-icon'
												></img>
											</div>
											<div className='flex flex-col'>
												<span className='text-sm leading-4 text-left'>
													{item.name}
												</span>
												<span className='text-sm font-semi'>{item.symbol}</span>
											</div>
										</div>
									</td>
									<td className='PRICE'>
										<div className='w-40 ml-2'>
											<span className={percentageChange(item.priceChange1d)}>
												{/* Rounds price to two decimal places */}
												{numberWithCommas(item.price.toFixed(2))}
											</span>
										</div>
									</td>
									<td>
										<div className='flex justify-start w-32'>
											<span
												// Sets the class depending on whether the price is POSITIVE or NEGATIVE.
												className={percentageChange(item.priceChange1d)}
											>
												{item.priceChange1d}%
											</span>
										</div>
									</td>
									<td>
										<div className=' w-36'>
											<span className=' ml-2'>
												{renderNumberFormatting(item.marketCap)}
											</span>
										</div>
									</td>
									<td>
										<div className='w-32 ml-2'>
											<span className='font-thin'>
												{renderNumberFormatting(item.totalSupply)}
											</span>
										</div>
									</td>
									<td>
										<div className='w-40 ml-2'>
											<span className='font-thin'>
												{renderNumberFormatting(item.volume)}
											</span>
										</div>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</section>
			{/*  <------------------------------------ END TABLE SECTION ------------------------------> */}
			<Pagination data={data} page={page} setPage={setPage} numOfCoinsPerPage={numOfCoinsPerPage} handleClick={handleClick}/>
		</>
	);
}
