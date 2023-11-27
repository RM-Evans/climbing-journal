import Button from '@mui/material/Button'
export default function Actions(props) {
  return (
    <div>
      <Button
        onClick={props.onNewEntry}
        sx={{ display: 'flex', justifySelf: 'left', marginLeft: '9%' }}
      >
        + new entry
      </Button>
    </div>
  )
}
