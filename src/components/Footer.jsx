import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
	return (
		<footer className=' flex flex-col justify-center items-center bg-stone-300 bottom-0 mt-28 h-32'>
      <div className='flex space-x-5'>
			<a href='https://github.com/mattwhen/' target='_blank' rel='noreferrer' className=' text-4xl'>
				<AiFillGithub />
			</a>
      <a
					href='https://www.linkedin.com/in/matthew-nguyen-1724b9132/'
					target='_blank'
          rel='noreferrer'
          className=' text-4xl'
				>
					<AiFillLinkedin />
				</a>
      </div>
			© 2023 Matthew A. Nguyen. All Rights Reserved.
		</footer>
	);
};

export default Footer;
