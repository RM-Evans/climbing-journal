import React, { useState, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  TableHead,
  Checkbox
} from '@mui/material'
import './App.css'
import JournalEntryForm from './components/JournalEntryForm'

function App() {

const [rowIndex, setRowIndex] = useState(null)
//!! const [columnIndex, setColumnIndex] = useState()
const [pendingDelete, setPendingDelete] = useState('')
const [selected, setSelected] = useState([])

// const handleCheckedChange = (event) => {
//   setChecked(event.target.checked)
// }
//!!!!!!!!!!!!!!000000000000
// const handleCheckedChange = (event, id) => {
//   const selectedIndex = selected.indexOf(id);
//   let newSelected = [];

//   if (selectedIndex === -1) {
//     newSelected = newSelected.concat(selected, id);
//   } else if (selectedIndex === 0) {
//     newSelected = newSelected.concat(selected.slice(1));
//   } else if (selectedIndex === selected.length - 1) {
//     newSelected = newSelected.concat(selected.slice(0, -1));
//   } else if (selectedIndex > 0) {
//     newSelected = newSelected.concat(
//       selected.slice(0, selectedIndex),
//       selected.slice(selectedIndex + 1),
//     );
//   }
//   setSelected(newSelected);
// };


// const isSelected = (id) => selected.indexOf(id) !== -1;


// const isItemSelected = isSelected(row);


//!!!!!!!000000000000

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

  // console.log(rows) //? I have an array
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(rows))
  }, [rows])

  useEffect(() => {
    console.log(selected)
  },[selected])


  function clickDelete(i) {
    setRowIndex(i)
    const gottenItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) // GET THE KEY AND VALUE PAIR FOR MY ROW
    const filteredItems = gottenItems.filter( (_, x ) => x !== i) // if the index (x) doesnt equal i then filter it out into a new array
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filteredItems)) // return the new values into localStorage
  window.location.reload()
  }

  // ! now i need to 



  // !! I can now see the index of the row

  // save an array of arrays to localStorage. detect (useEffect?) when array changes and
  // delete and save new array

  const tableHeader = {
    fontWeight: 'bold',
  }

  return (
    <div className="App">
      <h1>Welcome to your climbing journal</h1>
    { selected ? (
<div>heres a thing</div>
    ) : null }
      
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
            <Checkbox/> //! throwing error span in tr
              <TableCell sx={tableHeader}>Date</TableCell>
              <TableCell sx={tableHeader}>Type</TableCell>
              <TableCell sx={tableHeader}>Grade</TableCell>
              <TableCell sx={tableHeader}>Location</TableCell>
              <TableCell sx={tableHeader}>Mountain Project Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (

                <TableRow
                key={row.id} 
                onClick={() => clickDelete(index)}
                >
                  <Checkbox 
                  value={index}
                  // checked={isItemSelected}
                  // onClick={() => handleClick(row.id)}
                  // onChange={handleCheckedChange}
                  // ! using same state for all checkboxes rn -- i cant figure out how to use these to get the state of each check box
                  // onClick={() => setPendingDelete(index)}
                  />
                
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
