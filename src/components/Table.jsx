import React from 'react';
import { useEffect, useState } from 'react';

export default function Table() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const numOfCoinsPerPage = 50;

	useEffect(() => {
		// Pass two arguments into our useEffect() hook: a Function and Array.
		// callback function is called after the component renders.
		// The second argument is called our dependencies array. This array should include all of the values that our side effect relies upon.

		const url = `https://api.coinstats.app/public/v1/coins?skip=0&limit=1000`;

		// Render data initially.
		fetch(url, {
			headers: {
				'Cache-Control': 'max-age=3600', // set caching for 1 hour.
			}
		})
			.then((response) => response.json()) // Returns a promise which resolves to a JavaScript object.
			.then((json) => {
				setData(json);
				setLoading(false);
			})
			.catch((error) => console.error(error));

		// Update the data in the table every 10 seconds.
		let intervalData = setInterval(() => {
			fetch(url)
				.then((response) => response.json())
				.then((json) => {
					setData(json);
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
	function renderClassName(currentChange) {
		if (currentChange === 0) return 'no-change';
		return currentChange > 0 ? 'green-change' : 'red-change';
	}

	// Simplifies the formatting for the Market Cap for a simplier look using the Intl method.
	function renderMarketCap(marketCap) {
		return Intl.NumberFormat('en', { notation: 'compact' }).format(marketCap);
	}

	// While fetching data, display message to user that the data is currently trying to render itself.
	if (loading) return <h1>Fetching data...</h1>;

	// <------------------------------------ USED FOR ADDING ADDITONAL DATA. REMOVE WHEN COMPLETE. ------------------------------>
	console.log('COIN DATA', data.coins.length);

	return (
		<React.Fragment>
			{/* <------------------------------------ TABLE SECTION ------------------------------> */}
			<div id='crypto' className='overflow-x-auto border-2 border-sky-700 rounded-md mx-2'>
				<table className='table-auto'>
					<thead>
						<tr>
							<th className=' text-gray-500 font-medium text-left pl-2 pt-3'>
								Rank
							</th>
							<th className=' text-gray-500 font-medium text-left pl-2 pt-3'>
								Name
							</th>
							<th className=' text-gray-500 font-medium text-left pr-8 pt-3'>
								Price
							</th>
							<th className=' text-gray-500 font-medium text-left pr-8 pt-3'>
								24h %
							</th>
							<th className=' text-gray-500 font-medium text-left pt-3'>
								Market Cap
							</th>
						</tr>
					</thead>
					<tbody>
						{/* Render Coinstats API data */}
						{data.coins
							.slice(
								page * numOfCoinsPerPage - numOfCoinsPerPage,
								page * numOfCoinsPerPage
							)
							.map((item) => (
								<React.Fragment key={item.id}>
									<tr>
										<td className='RANK'>
											<div className='p-4 pl-5 pr-8'>{item.rank}</div>
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
													<span className='text-sm font-bold leading-4 text-left'>
														{item.name}
													</span>
													<span className='text-sm font-semi'>
														{item.symbol}
													</span>
												</div>
											</div>
										</td>
										<td className='PRICE'>
											<div className='w-40'>
												<span className='text-right font-semi font-bold'>
													{/* Rounds price to two decimal places */}$
													{numberWithCommas(item.price.toFixed(2))}
												</span>
											</div>
										</td>
										<td>
											<div className='flex justify-start w-36'>
												<span
													// Sets the class depending on whether the price is POSITIVE or NEGATIVE.
													className={renderClassName(item.priceChange1d)}
												>
													{item.priceChange1d}%
												</span>
											</div>
										</td>
										<td>
											<div className=' w-24'>
												<span className='font-semi pr-2 font-bold'>
													${renderMarketCap(item.marketCap)}
												</span>
											</div>
										</td>
									</tr>
								</React.Fragment>
							))}
					</tbody>
				</table>
			</div>
			{/*  <------------------------------------ END TABLE SECTION ------------------------------> */}

			{/*  <------------------------------------ PAGINATION SECTION ------------------------------> */}
			<div className='pagination m-5'>
				<ul className='flex justify-evenly'>
					{/* Renders the previous page of Coin data */}
					<li onClick={() => page < 1 || page > data.coins.length ? false : setPage(page - 1)}>⬅️</li>
					{/* Create a new array with our Coin data, taking the total amount of coins in our API call
							and divide it by the number of coins rendered onto the page.*/}
					{[...Array(data.coins.length / numOfCoinsPerPage)].slice(0, 5).map((_, index) => {
						// Render the number of pages in our Pagination section, based on the length of our newly created Array.
						return (
							<li key={index.id} onClick={() => setPage(index + 1)}>
								{index + 1}
							</li>
						);
					})}
					<li>...{() => setPage(page + 1)}</li>
					{/* Displays the last page of our Pagination */}
					<li onClick={() => setPage(data.coins.length / 50)}>{data.coins.length}</li>
					{/* Renders the next page of Coin data */}
					<li onClick={() => page < 1 || page > data.coins.length ? false : setPage(page + 1)}>➡️</li>
				</ul>
			</div>
		</React.Fragment>
	);
}
