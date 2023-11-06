import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './Styles/index.css'
import useTaskStore from './Hooks/States'

useTaskStore.getState().checkLoginStatus();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
