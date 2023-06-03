import React, { useEffect, useContext } from "react";

import LogoMark from "../assets/logo-mark.svg";
import logoutIcon from "../assets/logout.svg";
import { Link } from "react-router-dom";
import { NavLink } from ".";
import axios from "axios";

import { UserContext } from "../components/Layout";

const Nav = () => {
	const { userInfo, setUserInfo } = useContext(UserContext);

	useEffect(() => {
		const fetchUserInfo = async () => {
			try {
				const res = await axios.get("http://localhost:3000/profile", {
					withCredentials: true,
				});
				setUserInfo(res.data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchUserInfo();
	}, []);

	const logoutUser = async () => {
		try {
			await axios.get("http://localhost:3000/logout", {
				withCredentials: true,
			})
			setUserInfo({});
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<nav className="flex justify-between items-center py-6">
			<Link
				to="/"
				className="flex gap-4 text-lg md:text-xl font-semibold items-center"
			>
				<img
					src={LogoMark}
					alt="Open Pen Logo"
					className="w-4 md:w-6"
				/>
				<span className="">/</span>
				<span>Open Pen</span>
			</Link>
			<div className="flex gap-4 items-center">
				{userInfo?.username ? (
					<>
						<NavLink
							to="/create"
							type="primary"
							text="Create Post"
						/>
						<Link onClick={logoutUser}>
							<img
								src={logoutIcon}
								alt="Logout"
								className="w-6 ml-4"
							/>
						</Link>
					</>
				) : (
					<>
						<NavLink to="/login" type="secondary" text="Login" />
						<NavLink to="/signup" type="primary" text="Sign up" />
					</>
				)}
			</div>
		</nav>
	);
};

export default Nav;
