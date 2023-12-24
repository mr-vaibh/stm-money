import React, { useEffect } from 'react'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ControlBoxModalTable from './ControlBoxModalTable';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ControlBoxModal({ people, setPeople, open, handleClose }) {
    useEffect(() => {
        // Cleanup logic when the modal is closed without saving
        if (!open) {
            setPeople(prevPeople => {
                const updatedRows = prevPeople.map((row) => {
                    // Check if the name is blank and set it to 'Person X'
                    if (row.name.trim() === '') {
                        return { ...row, name: `Person ${row.id}` };
                    }
                    return row;
                });
                return updatedRows;
            });
        }
    }, [open, setPeople]);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Friends
                </Typography>

                <ControlBoxModalTable people={people} setPeople={setPeople} />
            </Box>
        </Modal>
    )
}
