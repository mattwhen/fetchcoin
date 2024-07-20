import React from 'react';
import '../../../src/App.css';
import SearchIcon from '@mui/icons-material/Search';
import './module.Search.css';

const Search = ({
	filteredData,
	setFilteredData,
	searchBarValue,
	setSearchBarValue,
	data,
	value,
}) => {
	function handleSuggestions(e) {
		const searchValue = e.target.value;
		setSearchBarValue(searchValue);
		const filter = data.filter((coin) => {
			return (
				coin.id.includes(searchBarValue.toLowerCase()) ||
				coin.symbol.includes(searchBarValue.toUpperCase())
			);
		});
		
		setFilteredData(filter);
	}
	
	function handleMatches() {
		// TODO: Highlight the user's value's and match it with the suggestions that render.
		console.log(this.value);
		// const regex = new RegExp(this.value);
	}

	return (
		<>
			<div className='relative flex flex-col items-center justify-center my-4'>
				<div className='searchContainer flex justify-center items-center relative w-[300px] md:w-[350px] lg:w-[500px] lg:text-large'>
					<input
						className='h-12 border-2 border-black rounded-md w-[230px] md:w-full lg:w-full text-sm py-4 px-10 bg-gray-100'
						type='text'
						placeholder='Search crypto by name or ticker symbol'
						onChange={handleSuggestions}
					/>
					<i className='absolute opacity-50 left-10 min-[425px]:left-12 md:left-2'>
						<SearchIcon />
					</i>
				</div>
				<div className={value ? 'suggestionsContainer' : 'hidden'}>
					<ul className='suggestions top-96 lg:top-72 hover:cursor-pointer hover:bg-blue-background-hover'>
						{filteredData?.slice(0, 10).map((coin) => {
							return (
								<li className='hover:bg-blue-highlight hover:text-white'>
									<div className='flex items-center'>
										<span className='font-bold hover:text-white' onChange={handleMatches}>
											{coin.name.toUpperCase()}
										</span>
										<span className='ml-4'>
											<img width={30} height={30} src={coin.icon} alt={coin.name}></img>
										</span>
									</div>
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
