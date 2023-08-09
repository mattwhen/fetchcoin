import React from 'react';
import { useEffect, useState } from 'react';

const Table = () => {

    const [data, setData] = useState([]);

      useEffect(() => {
        // Called above the returned JSX syntax
        // Pass two arguments into our useEffect() hook: a Function and Array.
        // callback function is called after the component renders.
        // The second argument is called our dependencies array. This array should include all of the values that our side effect relies upon. 

        const url = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=10'
        
        function getData() {

            fetch(url)
            .then(response => response.json())
            .then(json => setData(json))
            .then(data => data.coins.map(item => console.log(item)));
        };
        
        getData();

      }, []);


	return (
		<div className='overflow-x-auto border-2 border-slate-950 rounded-sm mx-2'>
			<table className=' table-auto'>
				<thead>
					<tr>
						<th className=' bg-slate-500 text-white'>Rank</th>
						<th className=' bg-slate-500 text-white'>Name</th>
						<th className=' bg-slate-500 text-white'>Price</th>
					</tr>
				</thead>
                <tbody>
                    <tr>
                        {/* <td>{data.coins}</td> */}
                        <td>data data data datat datadtasdt</td>
                        <td>data data data datat datadtasdt</td>
                        <td>data data data datat datadtasdt</td>
                        <td>data data data datat datadtasdt</td>
                        <td>data data data datat datadtasdt</td>
                    </tr>
                </tbody>
			</table>
		</div>
	);
};

export default Table;
