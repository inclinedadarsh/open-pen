import React from "react";
import { Routes, Route } from 'react-router-dom'

import { Home } from './pages'
import { Nav } from './components'

const App = () => {
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	)
};

export default App;
