import React, { useState } from 'react'

import Button from '@mui/material/Button';

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ControlBoxModal from './ControlBoxModal';

export default function ControlBox({ people, setPeople }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div id="control-box">
            <Button variant="contained" onClick={handleOpen}><PeopleAltIcon /> Manage</Button>

            <ControlBoxModal
                people={people}
                setPeople={setPeople}
                open={open}
                handleClose={handleClose}
            />
        </div>
    )
}
