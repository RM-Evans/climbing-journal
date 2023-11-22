import { Box, Modal } from "@mui/material";

export default function EntryMoreDetails() {

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
            <Box>
                <Modal>
                    <div>stuff in here</div>
                </Modal>
            </Box>
        </>
     );
}

