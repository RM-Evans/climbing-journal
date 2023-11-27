import Modal from '@mui/material/Modal'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Actions from './Actions'
import EntryForm from './EntryForm'
import EntryTable from './EntryTable'

export default function Layout(props) {
  const [open, setOpen] = useState(false)
  const [rows, setRows] = useState([
    {
      grade: '5.10b',
      location: 'asdfafd',
      date: '2023-11-01T06:00:00.000Z',
      mpLink: 'asfdasdf',
    },
  ])
  const onNewEntry = () => {
    setOpen(true)
  }

  const onModalClose = () => {
    console.log('closed')
    setOpen(false)
  }

  const onSubmit = (model) => {
    console.log('submitted', model)
    setRows([rows, ...rows])
  }

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
      <Actions onNewEntry={onNewEntry} />
      <EntryTable rows={rows} />
      <Modal open={open} onClose={onModalClose} sx={modalContainerStyle}>
        <Box sx={modalStyle}>
          <EntryForm onSubmit={onSubmit} />
        </Box>
      </Modal>
    </>
  )
}
