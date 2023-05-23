const logoutHandler = (req, res) => {
	res.cookie("accessToken", "")
		.status(200)
		.json({ message: "User logged out successfully!" });
}

export default logoutHandler;