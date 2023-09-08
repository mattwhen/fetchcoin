import React from 'react';
import { TfiWallet, TfiCreditCard } from 'react-icons/tfi';
import { AiOutlineStock } from 'react-icons/ai';

const Mission = () => {


	return (
		<>
			<div id='mission' className='CONTAINER flex flex-col justify-center gap-10 text-center'>
				<h2 className=' text-4xl mt-20'>Our Mission</h2>
				<div className='p-5 border-solid border-2 rounded-md border-sky-700 mx-2'>
					<h3 className='text-3xl pb-5'>Title 1</h3>
					<div className='flex flex-col justify-center items-center'>
						<TfiWallet className='text-5xl mb-5' />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
							dolore minus beatae alias unde, iusto vero, dolores nemo ab iste
							vel, veniam quas laboriosam error quaerat rerum dolorem ipsum! At!
							Cumque doloremque eius error veniam ad beatae fuga magni explicabo
							dicta facilis facere sapiente quae reiciendis officia quos rerum,
							voluptates possimus aliquam fugit maxime, inventore at. Magnam
							culpa nemo quidem?
						</p>
					</div>
				</div>
				<div className='p-5 border-solid border-2 rounded-md border-sky-700 mx-2'>
					<div className='flex flex-col justify-center items-center'>
						<h3 className='text-3xl pb-5'>Title 2</h3>
						<AiOutlineStock className='text-5xl mb-5' />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
							dolore minus beatae alias unde, iusto vero, dolores nemo ab iste
							vel, veniam quas laboriosam error quaerat rerum dolorem ipsum! At!
							Cumque doloremque eius error veniam ad beatae fuga magni explicabo
							dicta facilis facere sapiente quae reiciendis officia quos rerum,
							voluptates possimus aliquam fugit maxime, inventore at. Magnam
							culpa nemo quidem?
						</p>
					</div>
				</div>
				<div className='p-5 border-solid border-2 rounded-md border-sky-700 mx-2'>
					<div className='flex flex-col justify-center items-center'>
						<h3 className='text-3xl pb-5'>Title 3</h3>
						<TfiCreditCard className='text-5xl mb-5'/>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
							dolore minus beatae alias unde, iusto vero, dolores nemo ab iste
							vel, veniam quas laboriosam error quaerat rerum dolorem ipsum! At!
							Cumque doloremque eius error veniam ad beatae fuga magni explicabo
							dicta facilis facere sapiente quae reiciendis officia quos rerum,
							voluptates possimus aliquam fugit maxime, inventore at. Magnam
							culpa nemo quidem?
						</p>
					</div>
				</div>
			
			</div>
		</>
	);
};

export default Mission;
