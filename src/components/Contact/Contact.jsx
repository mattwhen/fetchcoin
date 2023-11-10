import React from 'react';

const Contact = () => {
	const fields = [
		{
			id: 0,
			name: 'Contact Us',
		},
		{
			id: 1,
			name: 'Contact us during our normal working ours to learn more about our product. Fetchcoin values your feedback to provide you with the best possible experience.',
		},
		{
			id: 2,
			text: 'Houston, TX'
		},
		{
			id: 3,
			text: '68243 Native St.'
		},
		{
			id: 4,
			text: 'Tel. +1 123-456-8790'
		},
		{
			id: 5,
			text: 'Mon - Fri 8:00AM - 5:00PM'
		}
	];

	return (
		<div className=' max-w-md m-auto'>
			<h2 className='mt-20 text-4xl mb-10'>Contact Us</h2>
			<p className='mb-10 text-md'>Contact us during our normal working ours to learn more about our product. Fetchcoin values your feedback to provide you with the best possible experience.</p>
			{fields.map(item => {
				return (
					<p key={item.id} className='text-lg leading-10'>{item.text}</p>
				)
			})}
		</div>
	);
};

export default Contact;
