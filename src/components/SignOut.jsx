import { getAuth, signOut } from 'firebase/auth'
import { Button, Link } from '@mui/material'
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
  async function actuallySignOut() {
    await handleSignOut()
    await navigate('/login')
    if (!auth.currentUser) {
      console.log('no user signed in')
    }
  }
  return (
    <>
      <Link sx={{ cursor: 'pointer' }} onClick={() => actuallySignOut()}>
        Sign Out
      </Link>
    </>
  )
}
