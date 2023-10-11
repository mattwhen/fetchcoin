import React from 'react';

const Contact = () => {
    const scrollToTop = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	return (
		<>
			<h2 className='text-3xl text-center mt-20'>Contact</h2>
			<div className='flex justify-center mt-5'>
				<button
					className='scroll-btn bg-sky-500 p-3 rounded-md text-white text-4xl'
					onClick={scrollToTop}
				>
					🔝
				</button>
			</div>
		</>
	);
};

export default Contact;
