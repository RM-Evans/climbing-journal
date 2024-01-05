import Modal from '@mui/material/Modal'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { collection, getDocs, getDoc, setDoc, doc } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { db } from '../firebase'

import Actions from '../components/Actions'
import EntryForm from '../components/EntryForm'
import EntryTable from '../components/EntryTable'

export default function Layout(props) {
  //! const LOCAL_STORAGE_KEY = 'myRows'

  const [open, setOpen] = useState(false)
  // const [rows, setRows] = useState(
  //   JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  // )

  const [rows, setRows] = useState([])

  const [uid, setUid] = useState('')

  const auth = getAuth()

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid
      const userRef = doc(db, 'users', uid)
      const getUserRef = await getDoc(userRef)
      const doesExist = getUserRef.exists()

      if (doesExist) {
        // reference the UID and get the
        const UserDocThatExists = getUserRef.data()
        // ? console.log(UserDocThatExists)
        // make a reference to the collection of docs belonging to this user
        const userClimbRef = collection(db, 'users', uid, 'climbs')
        //  now i get the docs from the current user
        const getUserClimbRef = await getDocs(userClimbRef)
        // console.log(getUserClimbRef.docs[0].data())
      } else {
        // set user ID
        setDoc(userRef, {
          UID: uid,
        })
      }

      // ? console.log(uid)

      // ...
    } else {
      // User is signed out
      // ...

      console.log('there is no user signed in ')
    }
  })

  const onNewEntry = () => {
    setOpen(true)
  }

  const onModalClose = () => {
    console.log('closed')
    setOpen(false)
  }

  const onSubmit = (model) => {
    console.log('submitted', model)

    setRows([model, ...rows])
    //?? before i do this, i need to get uid without manually grabbing it
    // setDoc(doc(db, 'users', 'vAUXcP32yhMkqK7PWuOqNSnYYur2', 'climbs'), {
    //   model,
    // })
    // if i push rows then it will rewrite the subcollection, right?
    onModalClose()
  }

  function deleteRow() {
    setRows(rows.filter((i) => i.checked !== true))
  }

  // const rowRef = collection(db, 'climbing-entry')
  const docRef = doc(db, 'climbing-entry', 'klpHoY0MiR6wMvfbFtnd')

  useEffect(() => {
    const getRowsFirestore = async () => {
      // const rowData = await getDocs(rowRef)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        // console.log('Document data:', docSnap.data())
        setRows([docSnap.data()])
      } else {
        // docSnap.data() will be undefined in this case
        console.log(`nO SuCH dOCuMenT
        `)
      }
      // console.log(rowData.docs[0]._document.data.value.mapValue.fields)
      // const receivedRowData = rowData.docs.forEach((docs) => docs.data())
      // console.log(receivedRowData)
      // setRows(receivedRowData)
    }
    getRowsFirestore()
  }, [])

  const modalContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  }

  const modalStyle = {
    bgcolor: 'white',
    padding: '30px',
    borderRadius: 1.2,
    minWidth: 400,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }

  return (
    <>
      <h1>home page</h1>

      <Actions onNewEntry={onNewEntry} rows={rows} deleteRow={deleteRow} />
      <EntryTable rows={rows} setRows={setRows} />
      <Modal open={open} onClose={onModalClose} sx={modalContainerStyle}>
        <Box sx={modalStyle}>
          <EntryForm onSubmit={onSubmit} />
        </Box>
      </Modal>
    </>
  )
}
