import React, { useState } from 'react'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, FormControl, Grid } from '@mui/material';

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const styleBox = {
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

const styleSpan = {
    fontSize: '22px',
    fontWeight: 'bold',
}

export default function PeopleModal({ people, eachAmount, modalData, setModalData, changedModalData, setChangedModalData, open, setOpen, handleOpen, handleClose }) {
    const [paidValue, setPaidValue] = useState('');

    const handlePaidValue = (e) => {
        const paidValue = e.target.value;
        setPaidValue(paidValue);
    }

    const handlePay = () => {
        if (parseFloat(paidValue)) {
            let newModalDataObject = { ...modalData };
            newModalDataObject.paid += parseFloat(paidValue);

            setModalData(newModalDataObject);
            setPaidValue('');
            handleClose();
        }
    }

    const tempAmount = modalData?.paid - eachAmount;

    let give = 0;
    let recieve = 0;

    if (tempAmount > 0) {
        recieve = Math.abs(tempAmount);
    } else {
        give = Math.abs(tempAmount);
    }

    // Use reduce to find the object with the highest 'paid' value
    let givePerson = people.reduce((maxPaidPerson, currentPerson) => {
        return currentPerson.paid > maxPaidPerson.paid ? currentPerson : maxPaidPerson;
    }, people[0]); // Initialize with the first person

    // Filter out the person with the highest 'paid' value
    let recievePersonArray = people
        .filter(person => person.id !== givePerson.id)
        .map(person => person.name);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleBox}>
                    <Typography id="modal-modal-title" variant="h4">
                        {modalData?.name}
                    </Typography>

                    <hr />

                    <FormControl>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <TextField id="pay" label="Pay" variant="outlined" value={paidValue} onChange={handlePaidValue} autoFocus />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" onClick={handlePay} startIcon={<CurrencyRupeeIcon />}>Pay</Button>
                            </Grid>
                        </Grid>
                    </FormControl>

                    <Typography id="modal-modal-title" variant="h6">
                        Paid: <span style={{ 'color': '#eb9800', ...styleSpan }}>&#8377; {modalData?.paid}</span>
                    </Typography>
                    {!!give && <Typography id="modal-modal-title" variant="h6">
                        To Give: <span style={{ 'color': '#d40000', ...styleSpan }}>- &#8377; {give.toFixed(2)}</span> (<span>{givePerson.name}</span>)
                    </Typography>}
                    {!!recieve && <Typography id="modal-modal-title" variant="h6">
                        To Recieve: <span style={{ 'color': '#008000', ...styleSpan }}>+ &#8377; {recieve.toFixed(2)}</span>
                        &nbsp;({recievePersonArray.map(eachPerson =>
                            <span key={eachPerson.id}>
                                {eachPerson}{recievePersonArray.at(-1) !== eachPerson && ', '}
                            </span>
                        )})
                    </Typography>}
                </Box>
            </Modal>
        </div>
    )
}
