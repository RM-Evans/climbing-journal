import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Welcome </h1>

      <Routes>
        <Route path="/home" element={<Home />} />
        {/* I need to set path to "/" as a backup, I dont remember how to do that */}
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
