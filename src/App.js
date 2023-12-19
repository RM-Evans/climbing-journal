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
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
