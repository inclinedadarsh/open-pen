import express from "express";
import multer from "multer";

const router = express.Router();

const uploadMiddleware = multer({dest: "uploads/"});

import postsHandler from "../handlers/postsHandler.js";

router.post("/", uploadMiddleware.single('file'), postsHandler);

export default router;