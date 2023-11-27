import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import { Box } from '@mui/system'
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs from 'dayjs'
import React, { useRef, useState } from 'react'
import vgrades from '../VGrades'
import yosemiteGrades from '../YosemiteGrades'

export default function JournalEntryForm(props) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [climbingType, setClimbingType] = useState('')
  function handleClimbingType(mouseEvent) {
    setClimbingType(mouseEvent.target.value)
  }

  // useEffect(() => {
  //   console.log('hi', props)
  // }, [climbingType])

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

  function getUniqueID() {
    // Get the timestamp and convert
    // it into alphanumeric input
    return Date.now().toString(36)
  }

  // const doTheThing = () => {
  //   props.addEntry({ date: new Date(), climbingType: 'Sport', location: 'Lcc' })
  // }

  const selectRef = useRef(null)
  const gradeRef = useRef(null)
  const locationRef = useRef(null)
  const dateRef = useRef(null)
  const mpLinkRef = useRef(null)

  function handleSubmit(event) {
    event.preventDefault()

    console.log('date:', dateRef.current.value)
    console.log('climbing type:', selectRef.current.value)
    console.log('grade:', gradeRef.current.value)

    console.log('climb location:', locationRef.current.value)
    console.log('mountain project link:', mpLinkRef.current.value)
  }

  const doTheThing = () => {
    const dateVal = dateRef.current.value
    const selectVal = selectRef.current.value
    const gradeVal = gradeRef.current.value
    const locationVal = locationRef.current.value
    let ID = getUniqueID()

    if ((dateVal && selectVal && locationVal && gradeVal !== '') || undefined) {
      props.addEntry({
        id: ID,
        checked: false,
        date: dateRef.current.value,
        climbingType: selectRef.current.value,
        grade: gradeRef.current.value,
        location: locationRef.current.value,
        mpLink: mpLinkRef.current.value,
      })
      handleClose()
    }

    // let vgradeList = vgrades.map((v) => (
    //   <MenuItem value={v.val}>{v.grade}</MenuItem>
    // ))
  }

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{ display: 'flex', justifySelf: 'left', marginLeft: '9%' }}
      >
        + new entry
      </Button>
      {/* <Button onClick={doTheThing}>+ Test button</Button> */}
      <Modal open={open} onClose={handleClose} sx={modalContainerStyle}>
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
                inputRef={dateRef}
                sx={{ width: 2 / 5 }}
              />
            </LocalizationProvider>
            <FormControl>
              <InputLabel id="climbing-type-label">Type</InputLabel>

              <Select
                defaultValue={''}
                value={climbingType}
                label="012" //this wont work but i need it bc it gives me white space to add the inputLabel as a component?????
                onChange={handleClimbingType}
                inputRef={selectRef}
                sx={{ minWidth: 90, paddingLeft: '30' }}
                required
              >
                <MenuItem value="Sport">Sport</MenuItem>
                <MenuItem value="Trad">Trad</MenuItem>
                <MenuItem value="Bouldering">Bouldering</MenuItem>
                {/* <MenuItem value="Ice">Ice</MenuItem> */}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id="climbing-grade-label">Grade</InputLabel>

              <Select
                defaultValue={''}
                label="0123" //this wont work but i need it bc it gives me white space to add the inputLabel as a component?????
                inputRef={gradeRef}
                sx={{ minWidth: 90, paddingLeft: '30' }}
                required
              >
                {/* I shoulder return this with an if statement */}
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
              inputRef={locationRef}
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
              inputRef={mpLinkRef}
            />
            <a href="https://www.mountainproject.com/" target="_blank">
              search on mountain project here
            </a>
          </FormControl>
          <Button onClick={doTheThing} variant="outlined">
            submit
          </Button>
        </Box>
      </Modal>
    </div>
  )
}
