import React from 'react';

export default function FooterLinks() {
	const footerLinks = [
		{
			id: 0,
			title: 'About Us',
			links: ['Partnership', 'Careers', 'Investor Relations'],
		},
		{
			id: 1,
			title: 'Contact & Support',
			links: ['Help Center', 'Support', 'Contact Us', 'FAQ'],
		},
		{
			id: 2,
			title: 'Our Information',
			links: [
				'Return Policy',
				'Privacy Policy',
				'Terms & Conditions',
				'Site Map',
			],
		},
		{
			id: 3,
			title: 'My Account',
			links: [
				'Press Inquiries',
				'Social Media',
				'Directories',
				'Images & B-roll',
			],
		},
		{
			id: 4,
			title: 'Community',
			links: ['Forums', 'Blog', 'Podcast'],
		},
		{
			id: 5,
			title: 'Business Solutions',
			links: ['Advertising', 'Marketing', 'Sales'],
		},
	];

	return (
		<>
			{footerLinks.map((link) => {
				return (
                <div className='my-4 mx-4'>
                    <h2 className='text-2xl'>{link.title}</h2>
					<ul className='flex flex-col' key={link.id}>
						<li className='cursor-pointer hvr-fade hover:text-yellow'>{link.links}</li>
					</ul>
                </div>
				);
			})}
		</>
	);
}
