import express from "express";
import multer from "multer";

const router = express.Router();

const uploadMiddleware = multer({ dest: "uploads/" });

import {
	postsPostHandler,
	postsGetHandler,
	singlePostGetHandler,
	postsUpdateHandler,
} from "../handlers/postsHandler.js";

router
	.route("/")
	.post(uploadMiddleware.single("file"), postsPostHandler)
	.get(postsGetHandler);

router
	.route("/:id")
	.get(singlePostGetHandler)
	.put(uploadMiddleware.single("file"), postsUpdateHandler);

export default router;
