import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Home } from '../Routes/Home'

function App() {

	return (
		<div className="App flex flex-col min-h-screen">
			<BrowserRouter>
				<Home />
			</BrowserRouter>
		</div>
	)
}

export default App
