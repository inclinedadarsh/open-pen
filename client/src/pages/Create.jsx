import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

import { Navigate } from "react-router-dom";

import { Input, ButtonFull } from "../components";

const Create = () => {
	const [title, setTitle] = useState("");
	const [summary, setSummary] = useState("");
	const [content, setContent] = useState("");
	const [files, setFiles] = useState([]);
	const [redirect, setRedirect] = useState(false);

	const modules = {
		toolbar: [
			[{ header: [1, 2, 3, false] }],
			["bold", "italic", "underline", "strike", "blockquote"],
			[
				{ list: "ordered" },
				{ list: "bullet" },
				{ indent: "-1" },
				{ indent: "+1" },
			],
			["link", "image"],
			["clean"],
		],
	};

	const formats = [
		"header",
		"bold",
		"italic",
		"underline",
		"strike",
		"blockquote",
		"list",
		"bullet",
		"indent",
		"link",
		"image",
	];

	const createNewPost = async event => {
		try {
			const formData = new FormData();

			formData.append("title", title);
			formData.append("summary", summary);
			formData.append("content", content);
			formData.append("file", files[0]);

			event.preventDefault();

			// console.log(formData.entries());
			const res = await axios.post(
				"http://localhost:3000/posts",
				formData,
				{ withCredentials: true }
			);
			console.log(res);
			setRedirect(true);
		} catch (err) {
			console.log(err);
		}
	};

	if (redirect) {
		return <Navigate to="/" />;
	}

	return (
		<div>
			<form onSubmit={createNewPost}>
				<Input
					placeholder="Title"
					setValue={setTitle}
					type="text"
					value={title}
				/>
				<Input
					placeholder="Summary"
					value={summary}
					setValue={setSummary}
					type="text"
				/>
				<input
					type="file"
					className="mt-6 px-4 py-3 bg-white border-2 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black block w-full text-sm md:text-base"
					onChange={e => setFiles(e.target.files)}
				/>
				<ReactQuill
					theme="snow"
					value={content}
					onChange={newValue => setContent(newValue)}
					className="mt-6 block w-full"
					modules={modules}
					formats={formats}
				/>
				<div className="w-1/2">
					<ButtonFull text="Create Post" type={"submit"} />
				</div>
			</form>
		</div>
	);
};

export default Create;
