import fs from "fs";
import jwt from "jsonwebtoken";

import PostModel from "../models/PostModel.js";

const postsPostHandler = async (req, res) => {
	const { title, summary, content } = req.body;

	const { originalname, path } = req.file;
	const parts = originalname.split(".");
	const ext = parts[parts.length - 1];
	const newPath = `${path}.${ext}`;

	fs.renameSync(path, newPath);

	// const post = { title, summary, content, image: newPath };

	try {
		const { accessToken } = req.cookies;
		// console.log(accessToken);
		if (!accessToken)
			return res.status(401).json({ error: "User not logged in" });
		const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
		const info = jwt.verify(accessToken, ACCESS_TOKEN_SECRET);
		// post.author = info.id;
		// console.log(info);

		const post = {
			title,
			summary,
			content,
			cover: newPath,
			author: info.id,
		};

		const newPost = await PostModel.create(post);
		res.status(201).json(newPost);
	} catch (err) {
		res.status(500).json({
			message: "Internal server error. Try again later.",
			err,
		});
	}
};

const postsGetHandler = async (req, res) => {
	try {
		const posts = await PostModel.find()
			.populate("author", ["username"])
			.sort({ createdAt: -1 });
		res.status(200).json(posts);
	} catch (err) {
		res.status(500).json({
			message: "Internal server error. Try again later.",
		});
	}
};

const singlePostGetHandler = async (req, res) => {
	const { id } = req.params;
	try {
		const postDoc = await PostModel.findById(id).populate("author", [
			"username",
		]);
		res.status(200).json(postDoc);
	} catch (error) {
		res.status(404).json({ message: "Post not found", error });
	}
};

const postsUpdateHandler = async (req, res) => {
	const { title, summary, content } = req.body;

	const { id } = req.params;

	let newPath = null;

	if (req.file) {
		const { originalname, path } = req.file;
		const parts = originalname.split(".");
		const ext = parts[parts.length - 1];
		newPath = `${path}.${ext}`;

		fs.renameSync(path, newPath);
	}

	try {
		const postDoc = await PostModel.findById(id);

		const { accessToken } = req.cookies;
		if (!accessToken)
			return res.status(401).json({ error: "User not logged in" });

		const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
		const info = jwt.verify(accessToken, ACCESS_TOKEN_SECRET);

		const isAuthor = postDoc.author.equals(info.id);

		if (!isAuthor) 
			return res.status(401).json({ error: "User not authorized" });

		const post = {
			title,
			summary,
			content,
			cover: newPath || postDoc.cover,
		}

		const updatedPost = await postDoc.updateOne(post);
		res.status(200).json(updatedPost);
	} catch (error) {
		res.status(404).json({ message: "Post not found", error });
	}
};

export {
	postsPostHandler,
	postsGetHandler,
	singlePostGetHandler,
	postsUpdateHandler,
};
