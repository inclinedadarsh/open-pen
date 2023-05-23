import React from "react";

import { Link } from "react-router-dom";

const NavLink = ({ to, type, text }) => {
	return (
		<Link
			to={to}
			className={
				type === "primary"
					? "px-7 py-3 font-medium bg-black text-white border-black border-2 hover:bg-white hover:text-black"
					: "px-7 py-3 font-medium border-black border-2 hover:bg-black hover:text-white"
			}
		>
			{text}
		</Link>
	);
};

export default NavLink;
