import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import Button from '@mui/material/Button'
import { Box } from '@mui/system'
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs from 'dayjs'
import React, { useState } from 'react'
import vgrades from '../VGrades'
import yosemiteGrades from '../YosemiteGrades'

export default function EntryForm(props) {
  const modalStyle = {
    bgcolor: 'white',
    padding: '30px',
    borderRadius: 1.2,
    minWidth: 400,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }

  // const selectRef = useRef(null)
  // const gradeRef = useRef(null)
  // const locationRef = useRef(null)
  // const dateRef = useRef(null)
  // const mpLinkRef = useRef(null)

  const [grade, setGrade] = useState('')
  const [location, setLocation] = useState('')
  const [date, setDate] = useState(null)
  const [mpLink, setMpLink] = useState('')
  const [climbingType, setClimbingType] = useState('')

  const updateClimbingType = (val) => {
    // the grade value might not be available if they change types
    // so reset it
    setGrade('')
    setClimbingType(val)
  }

  const onSubmit = () => {
    const model = {
      grade,
      location,
      date,
      mpLink,
    }

    // TODO actually validate
    const valid = true
    if (!valid) {
      return
    }
    props.onSubmit(model)
  }

  return (
    <>
      <Box sx={modalStyle}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingBottom: 3,
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              defaultValue={dayjs()}
              label="Date of climb"
              value={date}
              onChange={setDate}
              sx={{ width: 2 / 5 }}
            />
          </LocalizationProvider>
          <FormControl>
            <InputLabel id="climbing-type-label">Type</InputLabel>

            <Select
              defaultValue={''}
              label="012" //this wont work but i need it bc it gives me white space to add the inputLabel as a component?????
              value={climbingType}
              onChange={(e) => updateClimbingType(e.target.value)}
              sx={{ minWidth: 90, paddingLeft: '30' }}
              required
            >
              <MenuItem value="Sport">Sport</MenuItem>
              <MenuItem value="Trad">Trad</MenuItem>
              <MenuItem value="Bouldering">Bouldering</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="climbing-grade-label">Grade</InputLabel>

            <Select
              defaultValue={''}
              label="0123" //this wont work but i need it bc it gives me white space to add the inputLabel as a component?????
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              sx={{ minWidth: 90, paddingLeft: '30' }}
              required
            >
              <MenuItem value={''}>Please make a selection</MenuItem>
              {climbingType === 'Bouldering'
                ? vgrades.map((v) => (
                    <MenuItem value={v.val}>{v.grade}</MenuItem>
                  ))
                : yosemiteGrades.map((v) => (
                    <MenuItem value={v.val}>{v.grade}</MenuItem>
                  ))}
            </Select>
          </FormControl>
        </Box>
        <FormControl
          sx={{
            paddingBottom: 3,
          }}
        >
          <TextField
            id="outlined-basic"
            label="Climb Location"
            variant="outlined"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </FormControl>
        <FormControl
          sx={{
            paddingBottom: 3,
          }}
        >
          <TextField
            id="outlined-basic"
            label="Mountain Project Link"
            variant="outlined"
            value={mpLink}
            onChange={(e) => setMpLink(e.target.value)}
          />
          <a href="https://www.mountainproject.com/" target="_blank">
            search on mountain project here
          </a>
        </FormControl>
        <Button onClick={onSubmit} variant="outlined">
          submit
        </Button>
      </Box>
    </>
  )
}
