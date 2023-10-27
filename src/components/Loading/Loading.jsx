import React from 'react';

const Loading = ({ mapHeaders }) => {
	return (
		<>
			<section className='overflow-x-auto border-2 border-sky-700 rounded-md mx-2 lg:w-1/2 lg:h-96 lg:m-auto'>
				<table className='table-auto'>
					<thead>
						<tr>{mapHeaders}</tr>
					</thead>
				</table>
						<div className=' relative m-0 flex justify-center mt-20'>
							<div id='loader'></div>
						</div>
			</section>
		</>
	);
};

export default Loading;
