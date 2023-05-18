import React from "react";

import { Header, AllBlogs } from "../components";

const Home = () => {
	return (
		<main className="md:w-3/4 w-full px-4 mx-auto mt-9">
			<Header />
			<AllBlogs />
		</main>
	);
};

export default Home;
