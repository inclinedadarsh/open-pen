import React from "react";

const BlogCard = () => {
	return (
		<div className="flex gap-6 h-60 overflow-hidden">
			<div className="flex-1">
				<img
					src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
					alt="Blog"
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="flex-1">
				<h2 className="text-2xl font-semibold">
					Getting started with web development and exploring
					opportunities in it.
				</h2>
				<div className="mt-3 flex gap-3 text-gray-700 font-medium">
					<span className="blog-author">Author: Adarsh Dubey</span>
					<span>&bull;</span>
					<span className="blog-date">Date: 12/12/2021</span>
				</div>
				<p className="mt-3">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Repudiandae incidunt et amet veritatis, libero sit quidem
					debitis cupiditate doloribus ab magnam illum accusamus.
					Labore qui suscipit voluptatem eius doloribus.
				</p>
			</div>
		</div>
	);
};

export default BlogCard;
