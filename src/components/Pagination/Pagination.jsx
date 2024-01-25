import React from 'react';
import './Pagination.css';

const Pagination = ({
	data,
	page,
	setPage,
	numOfCoinsPerPage,
	handleClick,
}) => {
	return (
		<>
			<div className='flex justify-center m-5 lg:max-w-4xl lg:m-auto lg:mt-5 lg:flex'>
				<ul className='flex justify-between w-full md:w-1/2'>
					{/* Renders the PREVIOUS page of Coin data */}
					<li
						className='hidden md:cursor-pointer md:mr-8 md:flex md:align-middle'
						onClick={() => (page <= 1 ? null : setPage(page - 1))}
					>
						⬅️
					</li>
					{/* Create a new array with our Coin data, taking the total amount of coins in our API call
							and divide it by the number of coins rendered onto the page.*/}
					{/* TODO: When the user is on the 5th page, render page numbers from 5 - 10 and so on... */}
					{[...Array(data.length / numOfCoinsPerPage)]
						.slice(0, 5)
						.map((_, index) => {
							// Render the number of pages in our Pagination section, based on the length of our newly created Array.
							return (
								<li
									className={
										page === index + 1
											? 'selected-page'
											: 'pagination-item pagination-item:hover'
									}
									key={index.id}
									onClick={() => handleClick(index + 1)}
								>
									{index + 1}
								</li>
							);
						})}
					{/* Takes the current page, and adds 5. For example, if you're on page 4, clicking
					the "..." will render page 9 data. */}
					<li
						className='pagination-item pagination-item:hover'
						onClick={() => (page < 20 ? setPage(page + 5) : null)}
					>
						...
					</li>
					{/* Displays the LAST page of Coin data */}
					<li
						className='pagination-item pagination-item:hover'
						onClick={() => setPage(data.length / 50)}
					>
						{data.length / 50}
					</li>
					{/* Renders the NEXT page of Coin data */}
					<li
						className='hidden md:cursor-pointer md:ml-8 md:flex md:align-middle'
						onClick={() =>
							page >= data.length / 50 ? null : setPage(page + 1)
						}
					>
						➡️
					</li>
				</ul>
			</div>
		</>
	);
};

export default Pagination;
