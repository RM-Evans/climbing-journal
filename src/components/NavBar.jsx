import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import SignOut from './SignOut'

export default function NavBar() {
  const navBarContainer = {
    display: 'flex',
    justifyContent: 'end',
    // border: 2,
    // boxShadow: '0px 21px 39px -19px rgba(0,0,0,0.75)',
  }

  // const navBarItem = {
  //   margin: 100,
  // }
  return (
    <>
      <Box component="section" sx={navBarContainer}>
        <Link to="/home" style={{ underline: 'none' }}>
          Home
        </Link>
        <Link to="signup">Sign Up</Link>

        <Link to="login" style={{ border: 2 }}>
          Login
        </Link>
        <SignOut />
      </Box>
    </>
  )
}
