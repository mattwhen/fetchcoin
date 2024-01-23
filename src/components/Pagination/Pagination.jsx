import React from 'react';

const Pagination = ({data, page, setPage, numOfCoinsPerPage, handleClick}) => {
  return (
    <>
    	{/*  <------------------------------------ PAGINATION SECTION ------------------------------> */}
			<div className='flex justify-center pagination m-5 lg:max-w-4xl lg:m-auto lg:mt-5 lg:flex'>
				<ul className='flex items-center'>
					{/* Renders the previous page of Coin data */}
					<li
						className='cursor-pointer mr-8 flex align-middle'
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
					<li
						className='pagination-item pagination-item:hover'
						onClick={() => setPage(page + 5)}
					>
						...
					</li>
					{/* Displays the last page of our Pagination */}
					<li
						className='pagination-item pagination-item:hover'
						onClick={() => setPage(data.length / 50)}
					>
						{data.length / 50}
					</li>
					{/* Renders the next page of Coin data */}
					<li
						className='cursor-pointer ml-8'
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
}

export default Pagination;
