import React from "react";
import { Link } from "react-router-dom";

import { format } from "date-fns";

const BlogCard = ({ title, summary, createdAt, author, cover, _id }) => {
	return (
		<div className="flex gap-6 h-60 overflow-hidden">
			<Link to={`/post/${_id}`} className="flex-1">
				<img
					src={`http://localhost:3000/${cover}`}
					alt="Blog"
					className="w-full h-full object-cover"
				/>
			</Link>
			<div className="flex-1">
				<Link to={`/post/${_id}`} className="text-2xl font-semibold">{title}</Link>
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
