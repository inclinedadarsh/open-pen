// Importing all the packages
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Importing the routes
import signupRoute from "./routes/signupRoute.js";
import loginRoute from "./routes/loginRoute.js";
import profileRoute from './routes/profileRoute.js'
import logoutRoute from "./routes/logoutRoute.js";
import postsRoute from "./routes/postsRoute.js";

// Creating the express app
const app = express();

// Setting up the middlewares
app.use(express.json());
app.use(cors({
	origin: "http://localhost:5173",
	credentials: true,
}));
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}
app.use(cookieParser());
app.use("/uploads", express.static(`${__dirname}/uploads`));

// Setting up the routes
app.use("/signup", signupRoute);
app.use("/login", loginRoute);
app.use("/profile", profileRoute);
app.use("/logout", logoutRoute);
app.use("/posts", postsRoute);

export default app;
