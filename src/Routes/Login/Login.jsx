import { useState } from 'react';
import { sendSignInLinkToEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import { auth } from '../../FirebaseConfig';


export default function Login() {
	const [userInput, setUserInput] = useState({
		email: '',
		password: '',
	})

	function handleSubmit(event) {
		event.preventDefault();

		const email = userInput.email;
		const password = userInput.password;

		sendSignInLinkToEmail(auth, email, password)
			.then(() => {
				// Link was sent to user.
				// Save the email locally (Local Storage) so the user is not prompted to input email 
				// on same device.
				window.localStorage.setItem('Email', email);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.error('Error sending email link: ', errorCode, errorMessage);
			})
	}

	return (
		<>
			<Nav />
			<section className='h-[800px]'>
				<div className='modal-container flex justify-center items-center relative '>
					<div className='modal-content p-5 bg-white border-2 border-blue-background rounded-lg absolute max-w-[425px] w-10/12 lg:w-1/3 h-7/8 max-h-[400px] top-56'>
						<form onSubmit={handleSubmit}>
							<div>
								<h2 className='text-center text-2xl lg:text-2xl'>Sign in</h2>
							</div>
							<div className='flex flex-col justify-center w-full'>
								<label for='email' className='block'>
									Email:
								</label>
								<input
									id='email'
									name='email'
									className='text-black border rounded-md py-1 px-2'
									type='email'
								/>
								<label for='password' className='block mt-3'>
									Password:
								</label>
								<input
									id='password'
									name='password'
									className='text-black border rounded-md py-1 px-2'
									type='password'
								/>
							</div>
							<div className='flex flex-col items-center mt-8'>
								<button
									type='submit'
									className='block bg-gold-trim mb-4 rounded-md w-full h-8 hover:bg-gold-trim-hover'
								>
									Log in
								</button>
								<div className='flex flex-col items-center'>
									Don't have an account?
									<Link
										to='/signup'
										className='mx-4 rounded-md  text-blue-background hover:text-blue-background-hover'
									>
										Create Account
									</Link>
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}
