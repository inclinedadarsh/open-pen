import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const profileHandler = (req, res) => {
	const { accessToken } = req.cookies;
	if (!accessToken) return res.status(401).json({ error: "User not logged in" });

	const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
	const info = jwt.verify(accessToken, ACCESS_TOKEN_SECRET);
	res.status(200).json(info);
};

export default profileHandler;
