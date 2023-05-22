import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

import UserModel from "../models/UserModel.js";

const loginHandler = async (req, res) => {
	const { username, password } = req.body;
	try {
		const user = await UserModel.findOne({ username });
		if (!user) {
			return res
				.status(404)
				.json({ status: "failed", message: "User not found" });
		}
		const isPasswordCorrect = await bcrypt.compare(password, user.password);
		if (!isPasswordCorrect) {
			return res
				.status(400)
				.json({ status: "failed", message: "Invalid credentials" });
		}

		const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
		const accessToken = jwt.sign(
			{ username, id: user._id },
			ACCESS_TOKEN_SECRET
		);
		if (!accessToken) {
			return res
				.status(500)
				.json({ status: "failed", message: "Something went wrong" });
		}

		res.status(200)
			.cookie("accessToken", accessToken)
			.json({ status: "success", message: "Logged in successfully" });
	} catch (err) {
		res.status(500).json(err);
	}
};

export default loginHandler;
