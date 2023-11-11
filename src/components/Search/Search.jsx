import React from 'react';
import '../../../src/App.css';
import { AiOutlineSearch } from 'react-icons/ai';

const Search = ({displayMatch}) => {

	return (
		<>
				<span>{AiOutlineSearch}</span>
			<div className='flex justify-center'>
				<input
					type='text'
					className='h-12 border-2 border-gray-100 rounded-md w-3/4 text-sm mb-5 p-4 bg-gray-100 lg:w-1/4 lg:text-large'
					placeholder='Search crypto by name or ticker symbol'
                    onChange={displayMatch}
				></input>
			</div>
		</>
	);
};

export default Search;
