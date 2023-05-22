// Importing all the packages
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";

// Importing the routes
import signupRoute from "./routes/signupRoute.js";
import loginRoute from "./routes/loginRoute.js";

// Creating the express app
const app = express();

// Setting up the middlewares
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

// Setting up the routes
app.use("/signup", signupRoute);
app.use("/login", loginRoute);

export default app;
