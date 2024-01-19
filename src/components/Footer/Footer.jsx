import React from 'react';
import { FaGithub, FaLinkedin, FaTiktok, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
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
		<footer className='bg-gray bg-stone-300 bottom-0 mt-28'>
			<div className='footerContainer flex items-start justify-center py-14'>
				{footerLinks.map(({ id, title, links }) => {
					return (
						<div className='lg:mx-8'>
							<h2 className='text-2xl'>{title}</h2>
							<ul className='flex flex-col'>
								<li className='cursor-pointer hvr-fade hover:text-yellow'>
									{links[0]}
								</li>
								<li className='cursor-pointer hvr-fade hover:text-yellow'>
									{links[1]}
								</li>
								<li className='cursor-pointer hvr-fade hover:text-yellow'>
									{links[2]}
								</li>
								<li className='cursor-pointer hvr-fade hover:text-yellow'>
									{links[3]}
								</li>
							</ul>
						</div>
					);
				})}
			</div>
			<ul className='flex justify-center items-center space-x-5 mb-4'>
				<li className='text-center rounded-full'>
					<FaGithub className='text-3xl cursor-pointer m-auto' />
				</li>
				<FaLinkedin className='text-3xl cursor-pointer m-auto' />
				<FaTiktok className='text-3xl cursor-pointer m-auto' />
				<FaXTwitter className='text-3xl cursor-pointer m-auto' />
			</ul>
			<div className='flex justify-center pb-8'>
				<p>© 2023 Matthew A. Nguyen. All Rights Reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
