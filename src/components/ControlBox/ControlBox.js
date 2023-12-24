import React, { useState } from 'react'

import Button from '@mui/material/Button';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import ControlBoxModal from './ControlBoxModal';
import ImportExport from './ImportExport';

export default function ControlBox({ people, setPeople }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div id="control-box">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Button variant="contained" onClick={handleOpen} style={{ marginBottom: '10px' }} startIcon={<PeopleAltIcon />}>Manage</Button>
                <ImportExport people={people} setPeople={setPeople} />
            </div>

            <ControlBoxModal
                people={people}
                setPeople={setPeople}
                open={open}
                handleClose={handleClose}
            />
        </div>
    )
}
