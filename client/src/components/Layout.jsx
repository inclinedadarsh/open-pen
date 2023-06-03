import React, { createContext, useState } from "react";

import { Outlet } from "react-router-dom";
import { Nav } from "./";

const UserContext = createContext();

const Layout = () => {
	const [userInfo, setUserInfo] = useState({});

	return (
		<UserContext.Provider value={{ userInfo, setUserInfo }}>
			<div className="container mx-auto">
				<Nav />
				<Outlet />
			</div>
		</UserContext.Provider>
	);
};

export default Layout;
export { UserContext };
