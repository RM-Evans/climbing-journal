import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import {
  Button,
  Box,
  FormControl,
  TextField,
  Typography,
  Link,
} from '@mui/material'
import { useEffect, useState } from 'react'
// ensures compatibility with the older versions of firebase
import firebase from 'firebase/compat/app'
// imports pre-built UI for firebase authentication
import * as firebaseui from 'firebaseui'
// imports the firebaseui styles using the CDN
import 'firebaseui/dist/firebaseui.css'
import { app } from '../firebase'

export default function Login() {
  const formInput = {
    width: 'auto',
    paddingBottom: '20px',
  }

  const auth = getAuth()

  const provider = new GoogleAuthProvider()
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
  provider.setCustomParameters({
    login_hint: 'user@example.com',
  })

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const doLogin = async () => {
    console.log('login', username, password)
    try {
      await signInWithEmailAndPassword(auth, username, password)
    } catch (err) {
      if (err.code === 'auth/invalid-credential') {
        const doIt = confirm('Would you like us to create that account?')
        if (!doIt) {
          return
        }
        console.log('creating', username, password)
        await createUserWithEmailAndPassword(auth, username, password)
        console.log('created!')
      } else {
        alert('Something went wrong logging in!')
      }
    }
  }

  const doGoogle = async () => {
    const result = await signInWithPopup(auth, provider)
  }

  return (
    <>
      <Box
        id="firebaseui-auth-container"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '300px',
          margin: 'auto',
        }}
      >
        <h1>LOGIN</h1>
        <Typography
          sx={{
            textAlign: 'left',
            paddingBottom: '20px',
            fontSize: 'h5.fontSize',
          }}
        >
          Login
        </Typography>
        <FormControl>
          <TextField
            sx={formInput}
            label="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <TextField
            type="password"
            sx={formInput}
            label="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button onClick={doLogin}>Login</Button>
        (if an account doesn't exist, we'll create it!)
        <Button onClick={doGoogle}>Google Icon Here</Button>
      </Box>
    </>
  )
}
