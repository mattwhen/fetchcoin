import React from 'react';
import LightLogo from '../../images/Logo_whiteBg.png';
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';
import '../../App.css';
import './Nav.css';

const Nav = () => {
	// useState returns an array with exactly two values
	// 1. The current state.
	// 2. The set function that lets you update the state to a different value
	const [navOpen, setNavOpen] = useState(false);
	const [showNav, setShowNav] = useState(true);
	const [previousScroll, setPreviousScroll] = useState(0);

	// Prevent/hide scrolling when the Navigation menu is opened.
	const navOpenHandler = () => {
		if (navOpen) {
			document.getElementsByTagName('body')[0].style.overflow = 'visible';
			setNavOpen(false);
		} else {
			document.getElementsByTagName('body')[0].style.overflow = 'hidden';
			setNavOpen(true);
		}
	};

	const scrollHandler = () => {

		window.addEventListener('scroll', function (e) {
			// Get the new Value
			let currentScroll = window.pageYOffset;

			// IF the current scroll is greater than previousScroll, show Navbar
			if (currentScroll > previousScroll) {
				setShowNav(true);
			} else {
				setShowNav(false);
			}

			setPreviousScroll(currentScroll);
		});
	};

	// Hide Navbar when scrolling down, make it visible when scrolling up.
	useEffect(() => {
		window.addEventListener('scroll', scrollHandler);

		return () => {
		  window.removeEventListener('scroll', scrollHandler);
		};

	}, []);
	
	return (
		<>
			<nav
				className=' flex justify-center items-center bg-white sticky top-0 z-50 h-16 shadow-md'
				id={showNav ? 'navbar-js-show' : 'navbar-js-hidden'}
			>
				<div className='flex items-center mx-0'>
					<div className='left-nav-section'>
						<a href='#home' className=' text-gray-500 text-2xl'>
							<img
								src={LightLogo}
								alt='company-logo'
								className=' rounded-lg'
								onClick={() => {
									document.body.scrollTop = 0;
									document.documentElement.scrollTop = 0;
								}}
								height={150}
								width={150}
							></img>
						</a>
					</div>
					<div className='right-nav-section flex justify-end w-[1000px]'>
						<div className='sm:hidden md:block lg:block'>
							<ul className='flex justify-evenly gap-10 text-black'>
								<li className=''>
									<a
										href='#about'
										onClick={() => {
											document.body.scrollTop = 0;
											document.documentElement.scrollTop = 0;
										}}
										className={'hvr-underline-from-left hvr-underline-from-left:before hvr-underline-from-left:focus:before hvr-underline-from-left:focus:active '}
									>
										ABOUT
									</a>
								</li>
								<li>
									<a href='#crypto' className={'hvr-underline-from-left hvr-underline-from-left:before hvr-underline-from-left:focus:before '} >CRYPTO</a>
								</li>
								<li>
									<a href='#mission'className={'hvr-underline-from-left hvr-underline-from-left:before hvr-underline-from-left:focus:before '} >MISSION</a>
								</li>
								<li>
									<a href='#contact' className={'hvr-underline-from-left hvr-underline-from-left:before hvr-underline-from-left:focus:before '} >CONTACT</a>
								</li>
							</ul>
						</div>
						<a
							href='#home'
							id='hamburger-menu'
							className='text-4xl flex align-middle text-gray-500 md:hidden lg:hidden'
							onClick={navOpenHandler}
						>
							{navOpen ? (
								<RxCross1 className='z-50 transition-all text-gray-700' />
							) : (
								<GiHamburgerMenu className=' text-gray-700' />
							)}
						</a>
					</div>
				</div>
				<section className='mobile-menu md:hidden lg:hidden'>
					<ul
						className={navOpen ? 'show-mobile-nav bg-white' : 'hide-mobile-nav'}
					>
						<li className=' border-gray-400'>
							<a
								href='#about'
								onClick={() => {
									document.body.scrollTop = 0;
									document.documentElement.scrollTop = 0;
									return navOpen ? setNavOpen(false) : setNavOpen(true);
								}}
							>
								ABOUT
							</a>
						</li>
						<li className=' border-gray-400 '>
							<a
								href='#crypto'
								onClick={() => (navOpen ? setNavOpen(false) : setNavOpen(true))}
							>
								CRYPTO
							</a>
						</li>
						<li className=' border-gray-400 '>
							<a
								href='#mission'
								onClick={() => (navOpen ? setNavOpen(false) : setNavOpen(true))}
							>
								MISSION
							</a>
						</li>
						<li className=' border-gray-400 '>
							<a
								href='#contact'
								onClick={() => (navOpen ? setNavOpen(false) : setNavOpen(true))}
							>
								CONTACT
							</a>
						</li>
					</ul>
				</section>
			</nav>
		</>
	);
};

export default Nav;
