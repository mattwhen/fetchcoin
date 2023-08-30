import React from 'react';
import Logo from '../images/Logo.png';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';
import '../App.css';

const Nav = () => {
	// useState returns an array with exactly two values
	// 1. The current state.
	// 2. The set function that lets you update the state to a different value
	const [navOpen, setNavOpen] = useState(false);

	// Prevent/hide scrolling when the Navigation menu is opened.
	if(navOpen) {
		document.getElementsByTagName('body')[0].style.overflow = 'hidden';
	} else {
		document.getElementsByTagName('body')[0].style.overflow = 'visible' 
	}

	return (
		<>
			<nav className=' flex items-center sticky top-0 z-50 h-16  bg-sky-600 p-5 shadow-sm'>
				<div className='flex w-full items-center  justify-between'>
					<div className='left-nav-section'>
						<a href='#home' className=' text-gray-500 text-2xl'>
							<img
								src={Logo}
								alt='company-logo'
								className=' rounded-lg'
								height={50}
								width={50}
							></img>
						</a>
					</div>
					<div className='right-nav-section'>
						<a
							href='#home'
							id='hamburger-menu'
							className='text-4xl flex align-middle text-gray-500 lg:hidden'
							onClick={() => (navOpen ? setNavOpen(false) : setNavOpen(true))}
						>
							{navOpen ? <RxCross1 className='z-50 transition-all' /> : <GiHamburgerMenu className=' text-white'/>}
						</a>
					</div>
				</div>
				<section className='mobile-menu lg:hidden'>
					<ul
						className={
							navOpen ? 'show-mobile-nav bg-white' : 'hide-mobile-nav'
						}
					>
						<li className=' border-gray-400'>
							<a href='#about' onClick={() => (navOpen ? setNavOpen(false) : setNavOpen(true))}>ABOUT</a>
						</li>
						<li className=' border-gray-400 '>
							<a href='#crypto' onClick={() => (navOpen ? setNavOpen(false) : setNavOpen(true))}>CRYPTOCURRENCIES</a>
						</li>
						<li className=' border-gray-400 '>
							<a href='#mission' onClick={() => (navOpen ? setNavOpen(false) : setNavOpen(true))}>MISSION</a>
						</li>
						<li className=' border-gray-400 '>
							<a href='#contact' onClick={() => (navOpen ? setNavOpen(false) : setNavOpen(true))}>CONTACT</a>
						</li>
					</ul>
				</section>
				</nav>
		</>
	);
};

export default Nav;
