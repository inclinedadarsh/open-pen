import express from "express";

const router = express.Router();

// Importing Handlers
import loginHandler from "../handlers/loginHandler.js";

// Setting up the routes
router.post("/", loginHandler);

export default router;
