import React from "react";

import { format } from "date-fns";

const BlogCard = ({ title, summary, createdAt, author, cover }) => {
	return (
		<div className="flex gap-6 h-60 overflow-hidden">
			<div className="flex-1">
				<img
					src={`http://localhost:3000/${cover}`}
					alt="Blog"
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="flex-1">
				<h2 className="text-2xl font-semibold">{title}</h2>
				<div className="mt-3 flex gap-3 text-gray-700 font-medium">
					<span className="blog-author">
						Author: {author.username}
					</span>
					<span>&bull;</span>
					<span className="blog-date">
						{format(new Date(createdAt), "MMM dd, yyyy hh:mm a")}
					</span>
				</div>
				<p className="mt-3">{summary}</p>
			</div>
		</div>
	);
};

export default BlogCard;
