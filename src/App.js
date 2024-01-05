import React, { useEffect, useLayoutEffect, useState } from 'react'
import './App.css'
import {
  Routes,
  Route,
  useNavigate,
  Navigate,
  redirect,
} from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
// import Login from './pages/LoginSimple'
import Login from './pages/Login'

import NavBar from './components/NavBar'
import SignOut from './components/SignOut'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

function App() {
  // const navigate = useNavigate()
  const auth = getAuth()
  const user = auth.currentUser
  //TODO: should i use useEffect here?
  onAuthStateChanged(auth, (user) => {
    if (user === null) {
      console.log(user)
      return redirect('/login')
    } else {
      return null
    }
  })

  function redirectNonUser() {
    if (user === null) {
      console.log('hey look at me' + user)
      return redirect('/login')
    } else {
      return null
    }
  }

  useEffect(() => {
    redirectNonUser()
  }, [])

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/*         <Route path="/home" element={<Navigate replace to="/" />} />
         */}
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
