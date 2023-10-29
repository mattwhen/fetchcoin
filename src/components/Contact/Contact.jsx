import React from 'react';

const Contact = () => {

	return (
		<>
		<div className='footer-section flex flex-col items-center bg-slate-100 pb-20' id='contact'>
		  <div className='mb-10'>
			<h2 className='text-3xl font-bold'>CONTACT US</h2>
		  </div>
		  <div className='mb-10'>
			<p className=''>Contact for Inquiry </p>
		  </div>
		  <div className=''>
		   <button className='rounded-md border border-black p-4 hover:bg-cyan-500 hover:border-cyan-500'><a href='mailto:matt@mattwhen.com'>Contact me!</a></button>
		  </div>
		</div>
	  </>
	);
};

export default Contact;
