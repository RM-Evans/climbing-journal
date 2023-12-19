import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'
import React from 'react'

const tableHeader = {
  fontWeight: 'bold',
}

export default function EntryTable({ rows, setRows }) {
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell sx={tableHeader}>Date</TableCell>
          <TableCell sx={tableHeader}>Type</TableCell>
          <TableCell sx={tableHeader}>Grade</TableCell>
          <TableCell sx={tableHeader}>Location</TableCell>
          <TableCell sx={tableHeader}>Mountain Project Link</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => {
          return (
            <TableRow key={row.id}>
              <TableCell>
                <Checkbox
                  // value={index} -- //! dont need to find it again
                  checked={row.checked === true}
                  // onClick={() => handleClick(row.id)}
                  onChange={(event) => {
                    rows[index].checked = event.target.checked
                    setRows([...rows])
                    console.log(event.target.checked)
                  }}
                />
              </TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.climbingType}</TableCell>
              <TableCell>{row.grade}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.mpLink}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
