import React, { useState, useContext } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { Input, ButtonFull } from "../components";

import { UserContext } from "../components/Layout";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { setUserInfo } = useContext(UserContext);

	const loginUser = async event => {
		event.preventDefault();

		try {
			const res = await axios.post(
				"http://localhost:3000/login",
				{
					username,
					password,
				},
				{
					withCredentials: true,
				}
			);
			const userInfo = { username: res.data.username, _id: res.data.id }
			setUserInfo(userInfo);
			alert("Login successful!");
		} catch (err) {
			alert(err.response.data.message);
		}
	};

	return (
		<div className="mt-12 w-96 mx-auto">
			<h1 className="font-display text-4xl font-bold text-center">
				Welcome Back
			</h1>
			<form className="mt-6" onSubmit={loginUser}>
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
				<ButtonFull text="Login" type="submit" />
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

export default Login;
