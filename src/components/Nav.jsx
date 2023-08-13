import React from 'react';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';


const Nav = () => {
  // useState returns an array with exactly two values
  // 1. The current state. 
  // 2. The set function that lets you update the state to a different value 
  const [navOpen, setNavOpen] = useState(false);

function handleNavState() {
  console.log(navOpen);
  return navOpen ? setNavOpen(false) : setNavOpen(true);
 }  


	return (
		<div className=''>
			<nav className=' flex items-center  px-4 h-16 shadow-lg'>
        <div className='flex w-full p-4 items-center justify-between'>
          <div className='left-nav-section'>
          <a href='#home' className=' text-gray-500 text-2xl'>Fetchcoin</a>
          </div>
          <div className='right-nav-section'>
          <a href='#home' id='hamburger-menu' className='text-4xl flex align-middle text-gray-500' onClick={() => handleNavState()}><GiHamburgerMenu /></a>
          </div>
        </div>
				<section className='mobile-menu lg:hidden'>
          <ul className={navOpen ? 'show-mobile-nav bg-neutral-500' : 'hide-mobile-nav'}>
              <li className="border-b border-gray-400">
                <a href="/about">ABOUT</a>
              </li>
              <li className="border-b border-gray-400 ">
                <a href="/portfolio">CRYPTOCURRENCIES</a>
              </li>
              <li className="border-b border-gray-400 ">
                <a href="/contact">CONTACT</a>
              </li>
            </ul>
				</section>
			</nav>
      <style>
        {`
        .hide-mobile-nav{
          position: absolute;
          width: 100%;
          height: 50vh; 
          top: 4rem;
          left: -100%;
          background: #495057;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          transition: all .4s ease-in-out;
          align-items: center;
        }
      
      .show-mobile-nav {
          position: absolute;
          width: 100%;
          height: 50vh; 
          top: 4rem;
          font-size: 20px;
          left: 0;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          transition: all .4s ease-in-out;
          align-items: center;
        }
        `}
      </style>
		</div>
	);
};

export default Nav;
