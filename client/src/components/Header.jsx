import React from "react";

const Header = () => {
	return (
		<header>
			<h1 className="flex flex-col gap-2 md:gap-3 font-display text-4xl md:text-6xl font-bold">
				<span>Open Pen:</span>
				<span>Simplify, Express, Share.</span>
			</h1>
			<p className="mt-10 text-sm md:text-lg">
				Streamline your blogging experience with our minimalist platform
				designed for easy content creation and seamless sharing. Focus
				on what matters most - your ideas - while enjoying a
				user-friendly interface that lets your creativity shine. Join us
				today and discover the joy of effortless blogging.
			</p>
		</header>
	);
};

export default Header;
