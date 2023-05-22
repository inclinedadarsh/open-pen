import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Input, ButtonFull } from "../components";

const Signin = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="mt-12 w-96 mx-auto">
			<h1 className="font-display text-4xl font-bold text-center">
				Welcome Back
			</h1>
			<form action="" className="mt-6">
				<Input
					type="text"
					placeholder="Username"
					value={username}
					setValue={setUsername}
				/>
				<Input
					type="password"
					placeholder="Password"
					value={password}
					setValue={setPassword}
				/>
				<ButtonFull text="Sign In" type="submit" />
			</form>
			<p className="text-center mt-3 text-sm md:text-base text-gray-500">
				Don't have an account?{" "}
				<Link to="/signup" className="text-black underline text-medium">
					Sign Up
				</Link>
			</p>
		</div>
	);
};

export default Signin;
