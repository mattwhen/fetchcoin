import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./Pagination.css";

const Pagination = ({ data, page, setPage, numOfCoinsPerPage }) => {
	const [currentRange, setCurrentRange] = useState([1, 2, 3]);

	const handleNextClick = () => {
		if (page === 50) {
			return null;
		}

		const newPage = page + 1;
		const isInRange = currentRange.includes(newPage);
		console.log(newPage);

		if (isInRange) {
			setPage(page + 1);
		}

		// IF newPage is NOT within the range, we update the currentRange.
		else {
			// Update the currentRange with a new set of numbers that extend from the previous set of numbers (e.g. 1-5 to 6-10).
			// Use map() to increment the currentRange by one.
			// Update setPage() to the new data range.
			setPage(page + 1);
			setCurrentRange(currentRange.map((num) => num + 1));
		}
	};

	const handlePreviousClick = () => {
		// If the previous page falls outside of the currentRange, do something.
		// Update the current range values to the last five digits.

		const prevPage = page - 1; // [6, 7, 8, 9, 10] => [1, 2, 3, 4, 5]
		const isInRange = currentRange.includes(prevPage);

		if (page === 1) {
			return null;
		}

		if (isInRange) {
			setPage(page - 1);
		} else {
			setCurrentRange(currentRange.map((num) => num - 1));
			setPage(page - 1);
		}
	};

	const displayFirstPage = () => {
		setPage(1);
		setCurrentRange([1, 2, 3, 4, 5]);
	};

	const handlePageSkipAhead = () => {
		// IF page is greater than 50? Don't do anything
		if (page > 50) {
			return null;
		}
		if(page + 5 < data.length / numOfCoinsPerPage) {
			setPage(page + 5);
			setCurrentRange(currentRange.map((num) => num + 5))
		}
	};

	const handlePageSkipBehind = () => {
		// If page is less than 1? Don't do anything.
		if (page < 1) {
			return null;
		}
	};

	const handleDisplayLastPage = () => {
		setPage(data.length / numOfCoinsPerPage);
	};
	return (
		<>
			<div className="flex justify-center my-5 lg:max-w-4xl lg:m-auto lg:mt-5 lg:flex">
				<ul className="flex justify-evenly items-center w-full md:w-1/2">
					{/* Renders the PREVIOUS page of Coin data */}
					<li
						className="hidden md:cursor-pointer md:mr-8 md:flex md:align-middle"
						onClick={handlePreviousClick}
					>
						<FaArrowLeftLong className="w-6 h-6" />
					</li>
					{/* Not visible until page count is greater than 5 */}
					{page > 3 ? (
						<li
							className="pagination-item pagination-item:hover"
							onClick={displayFirstPage}
						>
							{" "}
							1
						</li>
					) : null}
					{page > 3 ? (
						<li
							className="pagination-item pagination-item:hover"
							onClick={handlePageSkipBehind}
						>
							{" "}
							...
						</li>
					) : null}
					{/* Not visible until page count is greater than 5 */}
					{page > 5
						? currentRange.slice(2, 5).map((num, index) => (
								<li
									// Apply styling based on the current page being selected.
									onClick={() => setPage(num)}
									className={
										page === num
											? "selected-page"
											: "pagination-item pagination-item:hover"
									}
								>
									{num}
								</li>
						  ))
						: currentRange.map((num, index) => (
							<li
								// Apply styling based on the current page being selected.
								onClick={() => setPage(num)}
								className={
									page === num
										? "selected-page"
										: "pagination-item pagination-item:hover"
								}
							>
								{num}
							</li>
					  ))}
					<li
						className="pagination-item pagination-item:hover"
						onClick={handlePageSkipAhead}
					>
						{" "}
						...
					</li>
					<li
						className="pagination-item pagination-item:hover"
						onClick={handleDisplayLastPage}
					>
						{/* Displays the LAST page of Coin data */}
						{data.length / numOfCoinsPerPage}
					</li>
					{/* Renders the NEXT page of Coin data */}
					<li className="hidden md:cursor-pointer md:ml-8 md:flex md:align-middle">
						<FaArrowRightLong className="w-6 h-6" onClick={handleNextClick} />
					</li>
				</ul>
			</div>
		</>
	);
};

export default Pagination;
