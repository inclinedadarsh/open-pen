import React, { useEffect, useState } from "react";
import axios from "axios";

import BlogCard from "./BlogCard";

const AllBlogs = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios.get("http://localhost:3000/posts");
			setPosts(res.data);
		};

		fetchPosts();
	}, []);

	return (
		<div className="mt-20 mb-20 flex flex-col gap-12">
			{posts.length > 0 &&
				posts.map(post => {
					const { title, summary } = post;
					return (
						<BlogCard
							key={post._id}
							{...post}
						/>
					);
				})}
		</div>
	);
};

export default AllBlogs;
