import React from "react";
import { Routes, Route } from 'react-router-dom'

import { Home } from './pages'
import { Nav } from './components'

const App = () => {
	return (
		<div className="container mx-auto">
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	)
};

export default App;
