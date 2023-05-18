import React from "react";

const ButtonFull = ({ type, text }) => {
	return (
		<button
			type={type}
			className="mt-6 py-4 bg-black text-white focus-visible:bg-gray-900 hover:bg-gray-900 font-semibold focus:outline-none block w-full text-sm md:text-base"
		>
			{text}
		</button>
	);
};

export default ButtonFull;
