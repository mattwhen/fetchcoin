import React from 'react';
import '../../../src/App.css';
import { AiOutlineSearch } from 'react-icons/ai';

const Search = () => {
	return (
		<>
				<span>{AiOutlineSearch}</span>
			<div className='flex justify-center'>
				<input
					type='text'
					className='h-12 border-2 border-gray-100 rounded-md w-1/2 mb-5 p-4 bg-gray-100 '
					placeholder='Search crypto by name or ticker symbol'
				></input>
			</div>
		</>
	);
};

export default Search;
