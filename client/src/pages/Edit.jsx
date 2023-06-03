import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

import { useParams, Navigate } from "react-router-dom";

import { Input, ButtonFull } from "../components";

const Edit = () => {
	const { id } = useParams();

	const [title, setTitle] = useState("");
	const [summary, setSummary] = useState("");
	const [content, setContent] = useState("");
	const [files, setFiles] = useState([]);
	const [redirect, setRedirect] = useState(false);

	useEffect(() => {
		const getPostInfo = async () => {
			const res = await axios.get(`http://localhost:3000/posts/${id}`);
			setTitle(res.data.title);
			setSummary(res.data.summary);
			setContent(res.data.content);
		};

		getPostInfo();
	}, []);

	const updatePost = async event => {
		event.preventDefault();

		const formData = new FormData();

		formData.set("title", title);
		formData.set("summary", summary);
		formData.set("content", content);
		if (files?.[0]) formData.set("file", files[0]);

		try {
			await axios.put(`http://localhost:3000/posts/${id}`, formData, {
				withCredentials: true,
			});
			setRedirect(true);
		} catch (error) {
			console.log(error);
		}
	};

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

	if (redirect) {
		return <Navigate to={`/post/${id}`} />;
	}

	return (
		<div>
			<form onSubmit={updatePost}>
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
					<ButtonFull text="Update Post" type={"submit"} />
				</div>
			</form>
		</div>
	);
};

export default Edit;
