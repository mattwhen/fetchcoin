import React from 'react';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';


const Header = () => {
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
			<nav className=' flex items-center  px-4 bg-slate-500 h-16'>
          <a href='#home' id='hamburger-menu' className='text-4xl flex align-middle' onClick={() => handleNavState()}><GiHamburgerMenu /></a>
				<section className='mobile-menu lg:hidden'>
          <ul className={navOpen ? 'show-mobile-nav' : 'hidden'}>
              <li className="border-b border-gray-400 my-4">
                <a href="/about">ABOUT</a>
              </li>
              <li className="border-b border-gray-400 my-4">
                <a href="/portfolio">CRYPTOCURRENCIES</a>
              </li>
              <li className="border-b border-gray-400 my-4">
                <a href="/contact">CONTACT</a>
              </li>
            </ul>
				</section>
			</nav>
      <style>
        {`
        .hide-mobile-nav{
          display: hidden;
        }
      
      .show-mobile-nav {
          position: absolute;
          width: 100%;
          height: 100vh; 
          top: 4rem;
          left: 0;
          background: #495057;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }
        `}
      </style>
		</div>
	);
};

export default Header;
