import { Box, FormControl, TextField, Typography, Link } from '@mui/material'

export default function SignUp() {
  const formInput = {
    width: 'auto',
    paddingBottom: '20px',
  }
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '300px',
          margin: 'auto',
        }}
      >
        <Typography
          sx={{
            textAlign: 'left',
            paddingBottom: '20px',
            fontSize: 'h5.fontSize',
          }}
        >
          Sign Up
        </Typography>
        <FormControl>
          <TextField sx={formInput} label="email" />
        </FormControl>
        <FormControl>
          <TextField sx={formInput} label="password" />
        </FormControl>
        <Link
          href="/Login"
          sx={{
            textAlign: 'left',
            fontSize: 'h8.fontSize',
          }}
        >
          Already have an account?
        </Link>
      </Box>
    </div>
  )
}
