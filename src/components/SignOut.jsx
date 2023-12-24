import { getAuth, signOut } from 'firebase/auth'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function SignOut() {
  const auth = getAuth()
  async function handleSignOut() {
    try {
      await signOut(auth)
    } catch (error) {
      console.log('its a signout' + error)
    }
  }
  const navigate = useNavigate()
  async function actuallySignOut(user) {
    await handleSignOut()
    await navigate('/login')
    if (!auth.currentUser) {
      console.log('no user signed in')
    }
  }
  return (
    <>
      <Button variant="text" onClick={() => actuallySignOut()}>
        sign out
      </Button>
    </>
  )
}
