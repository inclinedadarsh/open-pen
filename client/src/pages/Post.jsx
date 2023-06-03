import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";
import { NavLink } from "../components/";

import { UserContext } from "../components/Layout";

const Post = () => {
	const { userInfo } = useContext(UserContext);

	const { id } = useParams();

	const [post, setPost] = useState({});
	const [errMsg, setErrMsg] = useState("");

	useEffect(() => {
		const getPost = async () => {
			try {
				const res = await axios.get(
					`http://localhost:3000/posts/${id}`
				);
				setPost(res.data);
				// console.log(res.data);
			} catch (error) {
				if (error.response.status === 404) {
					setPost(null);
					setErrMsg("Post Not Found!");
				} else if (error.response.status === 500) {
					setPost(null);
					setErrMsg("Server Error!");
				}
			}
		};

		getPost();
	}, []);

	if (!post) {
		return <div>{errMsg}</div>;
	}

	// console.log(`--------------------`);
	// console.log(`userInfo.id: ${userInfo.id}`);
	// console.log(`post.author?._id: ${post.author?._id}`);

	return (
		<div className="max-w-4xl mx-auto mt-6">
			<h1 className="text-center text-5xl font-display font-bold mt-6 mb-2">
				{post.title}
			</h1>
			<p className="text-center text-gray-500 font-medium py-1">
				By <span className="text-black">@{post.author?.username}</span>
			</p>
			<p className="text-center text-gray-500 font-medium py-1">
				{post.createdAt &&
					format(new Date(post.createdAt), "MMM dd, yyyy hh:mm a")}
			</p>
			{userInfo.id == post.author?._id && (<div className="mx-auto w-fit my-6">
				<NavLink text="Edit Post" to={`/edit/${post._id}`} type="secondary" />
			</div>)}
			<img
				src={`http://localhost:3000/${post.cover}`}
				alt={post.title}
				className="w-full mt-4"
			/>
			<div
				dangerouslySetInnerHTML={{ __html: post.content }}
				className="post-content"
			/>
		</div>
	);
};

export default Post;
