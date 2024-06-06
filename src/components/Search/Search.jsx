import React from 'react';
import '../../../src/App.css';
import { AiOutlineSearch } from 'react-icons/ai';
import './Search.css';

const Search = ({
	filteredData,
	setFilteredData,
	searchBarValue,
	setSearchBarValue,
	data,
	value,
}) => {
	function handleFilter(e) {
		setSearchBarValue(e.target.value);
		const filter = data.filter((coin) => {
			return coin.symbol.includes(searchBarValue.toUpperCase());
		});

		setFilteredData(filter);
	}
	return (
		<>
			<span>{AiOutlineSearch}</span>
			<div className='relative flex flex-col items-center justify-center my-4'>
				<input
					type='text'
					className='h-12 border-2 border-gray-100 rounded-md w-3/4 text-sm mb-5 p-4 bg-gray-100 md:w-3/5 lg:w-1/4 lg:text-large'
					placeholder='Search crypto by name or ticker symbol'
					onChange={handleFilter}
				></input>
				<div className={value ? 'suggestionsContainer' : 'hidden'}>
					<ul className='suggestions  top-96 lg:top-72 hover:cursor-pointer hover:bg-blue-background-hover'>
						{filteredData?.slice(0, 10).map((coin) => {
							return (
								<li className='hover:bg-blue-highlight hover:text-white'>
									<span className='text-blue-background font-bold hover:text-white'>
										{coin.name}
									</span>
									<span>{coin.symbol}</span>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Search;
