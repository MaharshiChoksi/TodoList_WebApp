import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../Routes/Home'
import Contact from '../Routes/Contact'
import ErrPage from '../Routes/ErrPage'
import { Deleted } from '../Routes/Deleted'
import { Login} from './Login'
import { Register} from './Register'
import useTaskStore from '../Hooks/States'


function App() {

	return (
		<div className="App flex flex-col min-h-screen">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={useTaskStore.isAuthenticated ? <Home /> : <Navigate to='/Login' />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/deleted" element={useTaskStore.isAuthenticated ? <Deleted /> : <Navigate to='/Login' />} />
					<Route path="/Login" element={useTaskStore.isAuthenticated ? <Navigate to='/' /> : <Login />}></Route>
					<Route path="/Register" element={useTaskStore.isAuthenticated ? <Navigate to='/' /> : <Register />}></Route>
					<Route path="*" element={<ErrPage />} />

					{/* <Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/deleted" element={<Deleted />} />
					<Route path="/Login" element={<Login />}></Route>
					<Route path="/Register" element={<Register />}></Route>
					<Route path="*" element={<ErrPage />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
