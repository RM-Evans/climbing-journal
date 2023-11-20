import React, { useState, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  TableHead,
} from '@mui/material'
import './App.css'
import JournalEntryForm from './components/JournalEntryForm'

function App() {
  //get stuff from form
  function createData(date, climbingType, grade, climbingLocation, mpLink) {
    return { date, climbingType, grade, climbingLocation, mpLink }
  }

  const LOCAL_STORAGE_KEY = 'myRows'

  const [rows, setRows] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  )

  const addEntry = (entry) => {
    // set the table rows to be the new entry, then all the old entries also
    setRows([entry, ...rows])
    // console.log('here' + rows)
  }
  console.log(rows) //? I have an array
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(rows))
  }, [rows])

  const tableHeader = {
    fontWeight: 'bold',
  }

  //save an array of arrays to localStorage. detect (useEffect?) when array changes and
  // delete and save new array

  return (
    <div className="App">
      <h1>Welcome to your climbing journal</h1>
      <JournalEntryForm addEntry={addEntry} />
      <TableContainer
        sx={{
          maxWidth: 4 / 5,
          border: '0.5px solid',
          borderRadius: 1,
          margin: 'auto',
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={tableHeader}>Date</TableCell>
              <TableCell sx={tableHeader}>Type</TableCell>
              <TableCell sx={tableHeader}>Grade</TableCell>
              <TableCell sx={tableHeader}>Location</TableCell>
              <TableCell sx={tableHeader}>Mountain Project Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow>
                <TableCell>{row.date.toString()}</TableCell>
                <TableCell>{row.climbingType}</TableCell>
                <TableCell>{row.grade}</TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell>{row.mpLink}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default App
