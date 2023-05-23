import express from "express";

import logoutHandler from '../handlers/logoutHandler.js'

const router = express.Router();

router.get("/", logoutHandler);

export default router;
