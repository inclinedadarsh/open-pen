import React from "react";

import { Outlet } from "react-router-dom";
import { Nav } from "./";

const Layout = () => {
	return (
		<div className="container mx-auto">
			<Nav />
			<Outlet />
		</div>
	);
};

export default Layout;
