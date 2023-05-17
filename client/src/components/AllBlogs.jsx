import React from "react";

import BlogCard from "./BlogCard";

const AllBlogs = () => {
	return (
		<div className="mt-20 mb-20 flex flex-col gap-12">
			<BlogCard />
			<BlogCard />
			<BlogCard />
			<BlogCard />
		</div>
	);
};

export default AllBlogs;
