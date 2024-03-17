import React from 'react';
import { FaGithub, FaLinkedin, FaTiktok, FaXTwitter } from 'react-icons/fa6';
import FooterLinks from '../FooterLinks/FooterLinks';

const Footer = () => {
	
	return (
		<footer className='px-6 bg-footer-bg'>
			<div className='footerContainer flex flex-col lg:flex-row lg:justify-center lg:items-start py-14'>
				<FooterLinks />
				{/* {footerLinks.map(({ id, title, links }) => {
					return (
						<div className='my-4 mx-4'>
							<h2 className='text-2xl'>{title}</h2>
							<ul className='flex flex-col' key={id}>
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
				})} */}
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
				<p className='text-sm md:text-md'>© 2023 Matthew A. Nguyen. All Rights Reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
