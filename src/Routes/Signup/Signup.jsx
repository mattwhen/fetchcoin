import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import Button from '../../components/Button/Button';

// Initialize Firebase and create a Firebase App object
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, sendSignInLinkToEmail } from 'firebase/auth';
import { useState } from 'react';
import { auth, app } from '../../FirebaseConfig';


const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{8,}$/;

export default function Signup() {
	const [userInput, setUserInput] = useState({
		email: '',
	});

	const handleUserInput = (e) => {
		setUserInput({
			...userInput,
			[e.target.name]: [e.target.value]
		})
		console.log(userInput);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const email = userInput.email;

		const actionCodeSettings = {
			// URL you want to redirect back to. The domain (www.example.com) for this
			// URL must be in the authorized domains list in the Firebase Console.
			url: 'https://localhost:3000/',
			// This must be true.
			handleCodeInApp: true,
			iOS: {
			  bundleId: 'com.example.ios'
			},
			android: {
			  packageName: 'com.example.android',
			  installApp: true,
			  minimumVersion: '12'
			},
			dynamicLinkDomain: 'example.page.link'
		  };

		sendSignInLinkToEmail(auth, email, actionCodeSettings)
			.then(() => {
				// Link was sent to user.
				// Save the email locally (Local Storage) so the user is not prompted to input email 
				// on same device.
				window.localStorage.setItem('Email', email);
			})
			.then(() => console.log(window.localStorage.getItem('Email')))
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.error('Error sending email link: ', errorCode, errorMessage);
			})
	}
	return (
		<>
			<Nav />
			<section className='bg-dark-blue h-[800px]'>
				<div className='modal-container flex justify-center items-center relative'>
					<div className='modal-content p-5 bg-white rounded-lg absolute max-w-[425px] w-10/12 lg:w-1/3 h-7/8 max-h-[600px] top-56'>
						<form onSubmit={handleSubmit} className='text-black'>
							<div>
								<h2 className='text-center text-2xl lg:text-2xl'>Sign up</h2>
							</div>
							<div className='flex flex-col justify-center w-full'>
								<label for='email' className='block mt-3'>
									Email:
								</label>
								<input
									name='email'
									value={userInput.email}
									onChange={handleUserInput}
									className='text-black border rounded-md py-1 px-2'
									type='email'
								/>
								{/* TODO: Add error messages here. */}
							</div>
							<div className='flex flex-col items-center mt-8'>
								<Button className='block bg-gold-trim  mb-4 rounded-md w-full h-8 hover:bg-silver hover:text-white hover:bg-gold-trim-hover'>
									Create Account
								</Button>
								<Link
									to='/login'
									className='mx-4 hvr-fade text-blue-background hover:text-blue-background-hover'
								>
									Login
								</Link>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}
