import { db } from "../../FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Button from "../../components/Button/Button";

const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{8,}$/;

export default function Signup() {
	const [userInput, setUserInput] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const auth = getAuth();

	// Listen for authentication state changes
	onAuthStateChanged(auth, (user) => {
		if (user) {
			// User is signed in
			console.log("User is signed in:", user);
			// Update the UI or redirect to the dashboard
		} else {
			// User is signed out
			console.log("User is signed out.");
			// Redirect to login page or show sign-in options
			window.location.href = "/login.html"; // Example of redirection
		}
	});

	const handleUserInput = (e) => {
		setUserInput({
			...userInput,
			[e.target.name]: [e.target.value],
		});
		console.log(...userInput.email);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Create a user
		createUserWithEmailAndPassword(
			auth,
			...userInput.email,
			...userInput.password
		)
			.then((userCreds) => {
				// Signed Up
				const user = userCreds.user;
				console.log(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log("Error Signing up user: ", errorCode, errorMessage);
			});

		// Store First, Last, and email into a document in Firebase.
		try {
			const docRef = await addDoc(collection(db, "users"), {
				first: userInput.firstName,
				last: userInput.lastName,
				email: userInput.email,
			});
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}

		// Clear the form upon submission.
		setUserInput({
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
		});
	};

	return (
		<>
			<Nav />
			<section className="bg-dark-blue h-[800px]">
				<div className="modal-container flex justify-center items-center relative">
					<div className="modal-content p-5 bg-white rounded-lg absolute max-w-[425px] w-10/12 lg:w-1/3 h-7/8 max-h-[600px] top-56">
						<form onSubmit={handleSubmit} className="text-black">
							<div>
								<h2 className="text-center text-2xl lg:text-2xl">Sign up</h2>
							</div>
							<div className="flex flex-col justify-center w-full">
								<label for="firstName" className="block mt-3">
									First Name:
								</label>
								<input
									name="firstName"
									value={userInput.firstName}
									onChange={handleUserInput}
									className="text-black border rounded-md py-1 px-2"
									type="text"
								/>
								{/* TODO: Add error messages here. */}
							</div>
							<div className="flex flex-col justify-center w-full">
								<label for="last-name" className="block mt-3">
									Last Name:
								</label>
								<input
									name="lastName"
									value={userInput.lastName}
									onChange={handleUserInput}
									className="text-black border rounded-md py-1 px-2"
									type="text"
								/>
								{/* TODO: Add error messages here. */}
							</div>
							<div className="flex flex-col justify-center w-full">
								<label for="email" className="block mt-3">
									Email:
								</label>
								<input
									name="email"
									value={userInput.email}
									onChange={handleUserInput}
									className="text-black border rounded-md py-1 px-2"
									type="email"
								/>
								{/* TODO: Add error messages here. */}
							</div>
							<div className="flex flex-col justify-center w-full">
								<label for="password" className="block mt-3">
									Password:
								</label>
								<input
									name="password"
									value={userInput.password}
									onChange={handleUserInput}
									className="text-black border rounded-md py-1 px-2"
									type="password"
								/>
								{/* TODO: Add error messages here. */}
							</div>
							<div className="flex flex-col items-center mt-8">
								<Button className="block bg-gold-trim  mb-4 rounded-md w-full h-8 hover:bg-silver hover:text-white hover:bg-gold-trim-hover">
									Create Account
								</Button>
								<button>Submit</button>
								<Link
									to="/login"
									className="mx-4 hvr-fade text-blue-background hover:text-blue-background-hover"
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
