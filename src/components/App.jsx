import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../Routes/Home'
import Contact from '../Routes/Contact'
import ErrPage from '../Routes/ErrPage'
import { Deleted } from '../Routes/Deleted'
import { useState } from 'react'
import { Login, Register } from './Login'




const PrivateRoute = ({ element, isAuthenticated }) => {
	return isAuthenticated ? element : <Navigate to="/Login" />
}

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	return (
		<div className="App flex flex-col min-h-screen">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<PrivateRoute element={<Home />} isAuthenticated={isAuthenticated} />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/deleted" element={<PrivateRoute element={<Deleted />} isAuthenticated={isAuthenticated} />} />
					<Route path="/Login" element={<Login/>}></Route>
					<Route path="/Register" element={<Register/>}></Route>
					<Route path="*" element={<ErrPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
