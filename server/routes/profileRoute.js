import express from "express";

import profileHandler from "../handlers/profileHandler.js";

const router = express.Router();

router.get("/", profileHandler);

export default router;
