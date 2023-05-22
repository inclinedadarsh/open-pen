import express from "express";

const router = express.Router();

// Importing Handlers
// import { signupHandler } from "../handlers";
import signupHandler from "../handlers/signupHandler.js";

// Setting up the routes
router.post("/", signupHandler);

export default router;
