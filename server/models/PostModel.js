
import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		summary: {
			type: String,
		},
		content: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const PostModel = mongoose.model("Post", PostSchema);
export default PostModel;
