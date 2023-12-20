import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { Link as MuiLink } from '@mui/material'

export default function NavBar() {
  const navBarContainer = {
    display: 'flex',
    justifyContent: 'end',
    border: 2,
  }

  // const navBarItem = {
  //   margin: 100,
  // }
  return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      {/* <MuiLink sx={{ bgColor: 'red' }}>asdfg</MuiLink> */}
      <Link style={{ underline: 'none' }} to="/">
        Home
      </Link>
    </Box>
    // <Box sx={navBarContainer}>
    //   <Link to="/">Home</Link>

    //   {/* <Link to="signup">Sign Up</Link> */}

    //   <Link to="login" sx={{ border: 2 }}>
    //     Login
    //   </Link>
    // </Box>
  )
}
