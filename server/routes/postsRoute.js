import express from "express";
import multer from "multer";

const router = express.Router();

const uploadMiddleware = multer({ dest: "uploads/" });

import { postsPostHandler, postsGetHandler, singlePostGetHandler } from "../handlers/postsHandler.js";

router
	.route("/")
	.post(uploadMiddleware.single("file"), postsPostHandler)
	.get(postsGetHandler);

router.route("/:id").get(singlePostGetHandler);

export default router;
