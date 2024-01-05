import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import SignOut from './SignOut'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect } from 'react'

export default function NavBar() {
  const [userActivity, setUserActivity] = useState(undefined)
  const [loginMethods, setLoginMethods] = useState(true)

  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    setUserActivity(user)
  })
  // const provider = new GoogleAuthProvider()
  const navBarContainer = {
    display: 'flex',
    justifyContent: 'end',
  }

  const visible = {
    display: 'flex',
  }

  const hidden = {
    display: 'hidden',
  }

  // const loginMethodStyles = `
  //   display: ${loginMethods ? 'flex' : 'hidden'};
  // `
  return (
    <>
      <Box component="section" sx={navBarContainer}>
        {userActivity ? (
          <>
            <span>{userActivity.email}</span>
            <SignOut />
          </>
        ) : (
          <>
            <Link to="/">Home</Link>
            <Link to="signup" style={!loginMethods ? hidden : visible}>
              Sign Up
            </Link>
            <Link to="login" style={!loginMethods ? hidden : visible}>
              Login
            </Link>
          </>
        )}
      </Box>
    </>
  )
}
