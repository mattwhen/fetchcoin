import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Button from "../../components/Button/Button";

export default function Login() {
	const [userInput, setUserInput] = useState({
		email: "",
		password: "",
	});

	const auth = getAuth();

	const handleChange = (e) => {
		setUserInput({
			...userInput,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const email = userInput.email;
		const password = userInput.password;

		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			window.location.href = "/fetchcoin";
			console.log(userCredential);
		} catch (error) {
			console.error("Error signing in!", error);
		}
	};

	return (
		<>
			<Nav />
			<section className="h-[800px]">
				<div className="modal-container flex justify-center items-center relative ">
					<div className="modal-content p-5 bg-white border-2 border-blue-background rounded-lg absolute max-w-[425px] w-10/12 lg:w-1/3 h-7/8 max-h-[400px] top-56">
						<form onSubmit={handleSubmit}>
							<div>
								<h2 className="text-center text-2xl lg:text-2xl">Sign in</h2>
							</div>
							<div className="flex flex-col justify-center w-full">
								<label htmlFor="email" className="block">
									Email:
								</label>
								<input
									className="text-black border rounded-md py-1 px-2"
									id="email"
									name="email"
									type="email"
									value={userInput.email}
									onChange={handleChange}
								/>
								<label htmlFor="password" className="block mt-3">
									Password:
								</label>
								<input
									className="text-black border rounded-md py-1 px-2"
									id="password"
									name="password"
									type="password"
									value={userInput.password}
									onChange={handleChange}
								/>
							</div>
							<div className="flex flex-col items-center mt-8">
								<Button className="block bg-gold-trim mb-4 rounded-md w-full h-8 hover:bg-gold-trim-hover">
									Log in
								</Button>
								<div className="flex flex-col items-center">
									Don't have an account?
									<Link
										to="/signup"
										className="mx-4 rounded-md  text-blue-background hover:text-blue-background-hover"
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
