import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.get("/", (req, res) => {
	res.send("Hello World!");
});

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		min: 3,
		max: 20,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	}
});

const UserModel = mongoose.model("User", UserSchema);

app.post("/signup", async (req, res) => {
	const { username, password } = req.body;
	try {
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = { username, password: hashedPassword };
		const newUser = await UserModel.create(user)
		res.status(201).json(newUser);
	} catch (err) {
		// console.log(err);
		res.status(500).json(err);
	}
});

mongoose.connect(process.env.DATABASE_URI);
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to database"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
