import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../Routes/Home'
import ErrPage from './ErrPage'

function App() {

	return (
		<div className="App flex flex-col min-h-screen">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="*" element={<ErrPage />}/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
