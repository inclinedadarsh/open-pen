import React, { useState } from "react";
import axios from 'axios';


import { Link } from "react-router-dom";
import { Input, ButtonFull } from "../components";

const Signup = () => {
	// const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const signupUser = async event => {
		event.preventDefault();
		try {
			const res = await axios.post("http://localhost:3000/signup", {
				username,
				password,
			});

			alert("User created successfully. Please login.");
		} catch (error) {
			// alert(error)
			alert(error.response.data.message);
		}
	}

	return (
		<div className="mt-12 w-96 mx-auto">
			<h1 className="font-display text-4xl font-bold text-center">
				Create your account
			</h1>
			<form className="mt-6" onSubmit={signupUser}>
				{/* <Input type="text" placeholder="Name" value={name} setValue={setName} /> */}
				<Input type="text" placeholder="Username" value={username} setValue={setUsername} />
				<Input type="password" placeholder="Password" value={password} setValue={setPassword} />
				<ButtonFull text="Create Account" type="submit" />
			</form>
			<p className="text-center mt-3 text-sm md:text-base text-gray-500">
				Already have an account?{" "}
				<Link to="/login" className="text-black underline text-medium">
					Login
				</Link>
			</p>
		</div>
	);
};

export default Signup;
