import bcrypt from "bcrypt";

import UserModel from "../models/UserModel.js";

const singupHandler = async (req, res, next) => {
	const { username, password } = req.body;
	console.log("singupHandler ran");
	console.log('This middleware was triggered for the URL:' + req.url);
	try {
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = { username, password: hashedPassword };
		const newUser = await UserModel.create(user);
		next();
	} catch (err) {
		if (err.code === 11000) {
			return res
				.status(409)
				.json({ status: "failed", message: "User already exists. Try loggin in." });
		} else {
			res.status(500).json({
				message: "Internal server error. Try again later.",
				err: err.message,
			});
		}
	}
};

export default singupHandler;
