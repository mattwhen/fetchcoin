import React from 'react';
import LightLogo from '../../images/Logo_whiteBg.png';
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';
import '../../App.css';
import './Nav.css';

const Nav = () => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [showNav, setShowNav] = useState(true);
	// const [previousScroll, setPreviousScroll] = useState(0);

	// Prevent/hide scrolling when the Navigation menu is opened.
	const mobileOpenHandler = () => {
		if (mobileOpen) {
			document.getElementsByTagName('body')[0].style.overflow = 'visible';
			setMobileOpen(false);
		} else {
			document.getElementsByTagName('body')[0].style.overflow = 'hidden';
			setMobileOpen(true);
		}
	};

	const navLinks = [
		{
			id: 0,
			title: 'ABOUT',
			link: '#about',
		},
		{
			id: 1,
			title: 'CRYPTO',
			link: '#crypto',
		},
		{
			id: 2,
			title: 'MISSION',
			link: '#mission',
		},
		{
			id: 3,
			title: 'CONTACT',
			link: '#contact',
		},
	];

	// const scrollHandler = () => {
	// 	window.addEventListener('scroll', function (e) {
	// 		// Get the new Value
	// 		let currentScroll = window.pageYOffset;

	// 		// IF the current scroll is greater than previousScroll, show Navbar
	// 		if (currentScroll > previousScroll) {
	// 			setShowNav(true);
	// 		} else {
	// 			setShowNav(false);
	// 		}

	// 		setPreviousScroll(currentScroll);
	// 	});
	// };

	return (
		<>
			<nav className='bg-white sticky top-0 z-50 h-16 max-w-[1920px] shadow-sm'>
				{/* DESKTOP NAVIGATION LINKS */}
				<div
					className='hidden w-full px-4 text-black lg:flex lg:items-center lg:justify-center'
					id='desktopUl'
				>
					<div className='logo lg:flex lg:justify-center'>
						<a href='https://mattwhen.github.io/fetchcoin/' className=''>
							<img
								src={LightLogo}
								className='cursor-pointer'
								alt='Company Logo'
								width={150}
								height={150}
							></img>
						</a>
					</div>
					<div className='nav-links lg:flex lg:justify-center'>
						{navLinks.map(({ id, title, link }) => {
							return (
								<a
									key={id}
									href={link}
									className='mx-5 hvr-underline-from-left hvr-underline-from-left:before hvr-underline-from-left:focus:before hvr-underline-from-left:focus:active'
								>
									{title}
								</a>
							);
						})}
					</div>
					{/* Log in & Sign up buttons */}
					<div className='hidden lg:flex'>
						<a
							href='/'
							className='log-in rounded-full mr-2 text-center w-24 bg-white-hover text-black py-2 px-4 hover:bg-gold-trim-hover'
						>
							Log in
						</a>
						<a
							href='/'
							className='sign-up rounded-full text-center w-24 bg-gold-trim text-white py-2 px-4 hover:bg-gold-trim-hover'
						>
							Sign up
						</a>
					</div>
				</div>
				{/* Mobile view */}
				<div className='flex items-center lg:hidden'>
					<img
						src={LightLogo}
						className='cursor-pointer'
						alt='Company Logo'
						width={150}
						height={150}
						onClick={() =>
							(window.location.href = 'https://mattwhen.github.io/fetchcoin/')
						}
					></img>
					<div
						id='hamburger-menu'
						className='text-4xl flex align-middle text-gray-500 ml-auto lg:hidden'
						onClick={mobileOpenHandler}
					>
						{mobileOpen ? (
							<RxCross1 className='z-50 transition-all text-gray-700' />
						) : (
							<GiHamburgerMenu className=' text-gray-700' />
						)}
					</div>
				</div>
				{/* HAMBURGER MENU OPTIONS */}
				<ul
					className={
						mobileOpen ? 'show-mobile-nav bg-white ' : 'hide-mobile-nav'
					}
				>
					{navLinks.map(({ id, title, link }) => {
						return (
							<li key={id}>
								<a href={link} onClick={() => mobileOpenHandler(false)}>
									{title}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
};

export default Nav;
