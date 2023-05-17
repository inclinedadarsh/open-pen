import React from "react";
import { Routes, Route } from 'react-router-dom'

import { Home } from './pages'
import { Layout } from './components'

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />} >
				<Route index element={<Home />} />
				<Route path="/signin" element={<div>Sign In</div>} />
				<Route path="/signup" element={<div>Sign Up</div>} />
			</Route>
		</Routes>
	)
};

export default App;
