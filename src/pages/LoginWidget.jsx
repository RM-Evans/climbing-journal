import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Box, FormControl, TextField, Typography, Link } from '@mui/material'
import { useEffect } from 'react'
// ensures compatibility with the older versions of firebase
import firebase from 'firebase/compat/app'
// imports pre-built UI for firebase authentication
import * as firebaseui from 'firebaseui'
// imports the firebaseui styles using the CDN
import 'firebaseui/dist/firebaseui.css'
import { app } from '../firebase'

export default function Login() {
  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      // since Firebase v9 and above service are imported when needed instad of being a namespace
      new firebaseui.auth.AuthUI(getAuth(app))

    ui.start('#firebaseui-auth-container', {
      signInSuccessUrl: '/home',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          clientId:
            '1087181270222-hemmuogsrncvfk1igl9q4slnsds8ra27.apps.googleusercontent.com',
        },
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        },
        // leave for ANOTHER video
        // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
      ],
      // required to enable one-tap sign-up credential helper
      credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
    })
  }, [])

  const formInput = {
    width: 'auto',
    paddingBottom: '20px',
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
        {/* <Typography
          sx={{
            textAlign: 'left',
            paddingBottom: '20px',
            fontSize: 'h5.fontSize',
          }}
        >
          Login
        </Typography>
        <FormControl>
          <TextField sx={formInput} label="email" />
        </FormControl>
        <FormControl>
          <TextField sx={formInput} label="password" />
        </FormControl>
        <Link
          href="/SignUp"
          sx={{
            textAlign: 'left',
            fontSize: 'h8.fontSize',
          }}
        >
          Don't have an account?
        </Link> */}
      </Box>
    </>
  )
}
