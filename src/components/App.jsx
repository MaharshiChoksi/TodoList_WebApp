import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../Routes/Home'
import Contact from '../Routes/Contact'
import ErrPage from '../Routes/ErrPage'
import { Deleted } from '../Routes/Deleted'

function App() {

	return (
		<div className="App flex flex-col min-h-screen">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/deleted" element={<Deleted />} />
					<Route path="*" element={<ErrPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
