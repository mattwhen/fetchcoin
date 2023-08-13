import React from 'react';
import { useEffect, useState } from 'react';

const Table = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Called above the returned JSX syntax
		// Pass two arguments into our useEffect() hook: a Function and Array.
		// callback function is called after the component renders.
		// The second argument is called our dependencies array. This array should include all of the values that our side effect relies upon.
		const url = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=50';
		fetch(url)
			.then((response) => response.json())
			.then((json) => {
				setData(json);
				setLoading(false);
			})
			.catch((error) => console.error(error));
	}, []);

	function numberWithCommas(num) {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}

	if (loading) return <h1>Fetching data...</h1>; // While fetching data, display message to user that the data is currently trying to render.

	console.log('data initial state', data.coins);

	return (
		<div className='overflow-x-auto border-2 border-slate-950 rounded-sm mx-2'>
			<table className='table-auto'>
				<thead>
					<tr>
						<th className=' text-gray-500 font-medium text-center'>Rank</th>
						<th className=' text-gray-500 font-medium text-left pl-12'>Name</th>
						<th className=' text-gray-500 font-medium text-center pr-8'>Price</th>
						<th className=' text-gray-500 font-medium'>Market Cap</th>
					</tr>
				</thead>
				<tbody>
					{data.coins.map((item) => (
						<>
							<tr>
								<td className='RANK'>
									<div className='p-4 pl-5'>{item.rank}</div>
								</td>
								<td>
									<div className='NAME flex items-center pl-5 mr-10 w-32'>
										<div className='text-left'>
											<img
												src={item.icon}
												className='w-8 h-8 mr-4'
												alt='crypto-icon'
											></img>
										</div>
										<div className='flex flex-col'>
											<span className='text-md'>{item.symbol}</span>
											<span className='text-sm'>{item.name}</span>
										</div>
									</div>
								</td>
								<td className='PRICE'>
									<div className=' mr-9 text-center'>
										{/* Rounds price to two decimal places */}$
										{numberWithCommas(item.price.toFixed(2))}
									</div>
								</td>
								<td>${numberWithCommas(item.marketCap.toFixed(2))}</td>
							</tr>
						</>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
