import Modal from '@mui/material/Modal'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { collection, getDocs, getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'

import Actions from '../components/Actions'
import EntryForm from '../components/EntryForm'
import EntryTable from '../components/EntryTable'
import SignUp from './SignUp'

export default function Layout(props) {
  const LOCAL_STORAGE_KEY = 'myRows'

  const [open, setOpen] = useState(false)
  // const [rows, setRows] = useState(
  //   JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  // )

  const [rows, setRows] = useState([])

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
    onModalClose()
  }

  function deleteRow() {
    console.log(rows) // logging the onClick Event???
    setRows(rows.filter((i) => i.checked !== true))
  }
  useEffect(() => {
    console.log(rows)
  }, [rows])

  // const rowRef = collection(db, 'climbing-entry')
  const docRef = doc(db, 'climbing-entry', 'klpHoY0MiR6wMvfbFtnd')

  useEffect(() => {
    const getRowsFirestore = async () => {
      // const rowData = await getDocs(rowRef)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data())
        setRows([docSnap.data()])
      } else {
        // docSnap.data() will be undefined in this case
        console.log(`nO SuCH dOCuMenT
        
⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⣖⡲⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡏⠀⠀⠑⣄⢣⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢧⠀⣄⠀⠈⣆⢣⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⢧⠹⡆⠀⠈⢧⢧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣠⠤⢤⣨⣧⡾⠦⠃⠀⢳⣷⠦⣤⣤⡖⠒⠒⠲⢴⣶⣯⣝⠒⠒⢋⡹⠳⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣠⣤⠞⠁⢻⡿⡿⠿⠿⢤⣀⣤⣾⣿⣦⠈⣿⣿⣦⣤⣤⡀⠉⠙⠉⠀⡰⠋⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣀⣤⡞⠁⠀⢀⣀⡀⠿⠿⢆⣠⡼⠟⠋⢉⣾⠏⠀⠛⢻⣿⣛⡛⠁⠀⣀⡤⠚⠀⠀⣀⡀⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣟⠀⣽⣭⡍⠉⠉⠉⠉⠱⣿⣁⣀⣠⣴⣿⠋⠀⠉⠉⠉⢀⣴⣮⡉⠉⠁⢹⠀⢠⣾⣿⣿⡌⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠈⠑⣭⠝⣿⠀⢠⠀⠀⠀⠈⠛⠛⠛⠉⠀⠀⠀⠀⡴⠊⣿⣀⣸⡉⠑⠂⢸⠀⢸⣿⣿⡿⠃⣏⠀⠀⠀⠀⠀⠀⠀⣠⡴⠻⡆⠀⠀⠀
⢠⣞⡿⠚⠋⠉⠙⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠟⠊⠉⠉⠉⠙⠲⡄⠈⢆⠀⠉⠉⢀⣀⠘⢦⠀⢀⡤⠤⣤⡞⣩⣶⢠⠇⠀⠀⠀
⠀⡟⣿⣾⡓⣆⠀⠀⠘⡆⠀⠀⠀⠀⠀⠀⠀⢠⡏⠀⠀⠀⣰⣶⣖⣆⢹⠀⠀⣳⡀⠀⢺⡿⠂⢸⡶⠋⠀⠀⠀⢹⠁⡇⢸⢠⣶⢶⣄
⠀⢧⡙⠿⠟⠃⠀⠀⡰⠃⡀⠀⠀⠀⠀⠀⠀⠈⢧⡀⠀⠀⠘⠿⣿⣿⠏⠀⠀⢸⡇⠀⠀⠀⢠⣾⠁⠀⠀⠀⣠⠞⢰⡇⣸⣿⢏⡏⣽
⠀⠈⠙⢦⣤⣤⠴⠊⣡⠞⢡⡟⠀⠀⠀⠀⠀⠀⠀⠙⣖⣒⡒⣚⣩⡵⠂⠀⠀⠀⠳⣄⠀⣰⣿⣇⠀⢀⣠⣶⣿⣶⣿⡇⢟⡤⠘⣰⠃
⠀⠀⠀⠀⣨⠷⠖⠋⠁⢀⡞⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⠘⡆⢹⣿⡿⠋⠉⡀⠙⣿⠛⢻⣧⣌⣤⣾⡇⠀
⠀⠀⠀⠸⣇⠀⠀⣀⡴⠋⠀⠿⠁⠀⠀⠀⢀⣀⣤⣤⣤⣤⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠧⣀⠉⠀⠀⢾⣿⠀⣯⠀⠈⣿⣿⣿⣿⣿⡄
⠀⠀⠀⠀⠈⠉⢹⠏⠀⠀⠀⠀⠀⢀⣠⣶⣿⣿⡿⠿⠛⠛⠋⣁⡀⠀⠀⣴⣶⣶⣶⣤⠀⠀⢱⡀⠀⠀⠀⠀⢸⠀⠀⢸⣿⣿⡿⠟⠋
⠀⠀⠀⠀⠀⠀⢸⡄⠀⠀⠀⠀⣰⣟⡿⡟⢋⣁⣤⠤⠶⠛⠛⠉⠀⠀⠀⠛⠛⠛⠛⢉⣠⣄⡀⠳⠶⢤⡀⠀⠸⡆⠀⣠⠿⠋⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢧⠀⠀⠀⡾⠙⠧⠔⠚⠛⠳⠤⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠋⠁⠀⢀⣀⣉⣭⡷⠟⠉⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⢧⡀⡼⠁⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⡾⠛⠒⠒⠒⠒⠒⠚⠛⢻⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠁⠀⠀⠀⠀⠀⠀⢀⡸⢋⡽⠿⠿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⠇⣿⠿⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣴⣿⡦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡟⢰⣇⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣷⣦⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⢿⣏⠓⢿⣿⣦⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⠿⠿⠿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣤⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀

        
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
      {/* <SignUp /> */}
      <h1>90127391273</h1>

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
