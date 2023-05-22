import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();

// Connecting to the database
mongoose.connect(process.env.DATABASE_URI);
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to database"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
