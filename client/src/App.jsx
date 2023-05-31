import React from "react";
import { Routes, Route } from 'react-router-dom'

import { Home, Login, Signup, Create, Post } from './pages'
import { Layout } from './components'

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />} >
				<Route index element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/create" element={<Create />} />
				<Route path="/post/:id" element={<Post />} />
			</Route>
		</Routes>
	)
};

export default App;
