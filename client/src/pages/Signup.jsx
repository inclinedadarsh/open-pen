import React from "react";

import { Link } from "react-router-dom";
import { Input, ButtonFull } from "../components";

const Signup = () => {
	return (
		<div className="mt-12 w-96 mx-auto">
			<h1 className="font-display text-4xl font-bold text-center">
				Create your account
			</h1>
			<form action="" className="mt-6">
				<Input type="text" placeholder="Name" />
				<Input type="text" placeholder="Email" />
				<Input type="password" placeholder="Password" />
				<ButtonFull text="Create Account" type="submit" />
			</form>
			<p className="text-center mt-3 text-sm md:text-base text-gray-500">
				Already have an account?{" "}
				<Link to="/signin" className="text-black underline text-medium">
					Sign In
				</Link>
			</p>
		</div>
	);
};

export default Signup;
