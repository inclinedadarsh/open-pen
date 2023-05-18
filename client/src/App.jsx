import React from "react";
import { Routes, Route } from 'react-router-dom'

import { Home, Signin } from './pages'
import { Layout } from './components'

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />} >
				<Route index element={<Home />} />
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<div>Sign Up</div>} />
			</Route>
		</Routes>
	)
};

export default App;
