import bcrypt from "bcrypt";

import UserModel from "../models/UserModel.js";

const singupHandler = async (req, res) => {
	const { username, password } = req.body;
	try {
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = { username, password: hashedPassword };
		const newUser = await UserModel.create(user);
		res.status(201).json(newUser);
	} catch (err) {
		// console.log(err);
		res.status(500).json(err);
	}
};

export default singupHandler;
