import React from "react";

const Input = ({ type, placeholder, value, setValue }) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className="mt-6 px-4 py-3 bg-white border-2 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black block w-full text-sm md:text-base"
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>
	);
};

export default Input;
