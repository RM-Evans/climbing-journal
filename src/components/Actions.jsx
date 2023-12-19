import Button from '@mui/material/Button'
export default function Actions({ onNewEntry, deleteRow, rows }) {
  return (
    <div>
      <Button
        onClick={onNewEntry}
        sx={{ display: 'flex', justifySelf: 'left', marginLeft: '9%' }}
      >
        + new entry
      </Button>
      {/* //TODO add button to delete */}
      {/* rows.find is checking to see if anything is check so we can render the button accordingly */}
      {rows.find((i) => i.checked) ? (
        <Button onClick={deleteRow}>delete</Button>
      ) : null}
    </div>
  )
}
