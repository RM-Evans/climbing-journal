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

  const navBarContainer = {
    display: 'flex',
    justifyContent: 'end',
    // border: 2,
    // boxShadow: '0px 21px 39px -19px rgba(0,0,0,0.75)',
  }

  // const navBarItem = {
  //   margin: 100,
  // }

  const visible = {
    display: 'flex',
  }

  const hidden = {
    display: 'hidden',
  }
  // style={loginMethods ? hidden : visible}

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
            <Link to="/home" style={{ underline: 'none' }}>
              Home
            </Link>
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
