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
		const url = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=10';
		fetch(url)
			.then((response) => response.json())
			.then((json) => {
				setData(json);
                setLoading(false);
			})
			.catch((error) => console.error(error));
	}, []);

	if (loading) return <h1>Fetching data...</h1>; // While fetching data, display message to user that the data is currently trying to render.

	console.log('data initial state', data.coins);

	return (
		<div className='overflow-x-auto border-2 border-slate-950 rounded-sm mx-2'>
			<table className=''>
				<thead>
					<tr>
						<th className=' bg-slate-500 text-white'>Rank</th>
						<th className=' bg-slate-500 text-white'>Name</th>
						<th className=' bg-slate-500 text-white'>Price</th>
					</tr>
				</thead>
				<tbody>
                    {data.coins.map(item => (
                        <>
                        <tr>
                        <td>
                            <div className='flex justify-between'>
                            {item.rank}
                        <img src={item.icon} className='w-8' alt='crypto-icon'></img>
                        {item.name}

                            </div>
                        
                        </td>
                        </tr>
                        </>
                    ))}

				</tbody>
			</table>
		</div>
	);
};

export default Table;
