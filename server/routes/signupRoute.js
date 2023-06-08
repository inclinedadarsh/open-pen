import express from "express";

const router = express.Router();

// Importing Handlers
// import { signupHandler } from "../handlers";
import signupHandler from "../handlers/signupHandler.js";
import loginHandler from "../handlers/loginHandler.js";

// Setting up the routes
router.use(signupHandler)
router.post("/", loginHandler);

export default router;
