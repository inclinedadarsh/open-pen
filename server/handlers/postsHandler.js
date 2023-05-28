import fs from "fs";

import PostModel from "../models/PostModel.js";

const postsHandler = async (req, res) => {
	const { title, summary, content } = req.body;

	const { originalname, path } = req.file;
	const parts = originalname.split(".");
	const ext = parts[parts.length - 1];
	const newPath = `${path}.${ext}`;

	fs.renameSync(path, newPath);

	const post = { title, summary, content, image: newPath };

	try {
        const newPost = await PostModel.create(post);
        // console.log(newPost);
        res.status(201).json(newPost);
	} catch (err) {
		res.status(500).json({
			message: "Internal server error. Try again later.",
		});
	}
};

export default postsHandler;
