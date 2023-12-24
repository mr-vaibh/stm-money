import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

export default function Instructions({ noOfPeople }) {

    // Set 'marginCss' to '80px' if it's an even number, otherwise set it to '70px';
    let marginCss = noOfPeople % 2 === 0 ? '80px' : '70px';

    return (
        <div style={{ marginTop: marginCss }}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{ display: 'flex', alignItems: 'center', fontStyle: 'italic' }}><LightbulbIcon style={{ color: '#eb9800' }} /> Instructions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul style={{ textAlign: 'left' }}>
                            <li>Any person will pay for all, or for none.</li>
                            <li>Paying for less than total number of people is not allowed.
                                <ul>
                                    <li>For eg: For 3 people, X, Y and Z, X cannot pay only for Z, or cannot pay for Y and Z but not themself</li>
                                </ul>
                            </li>
                            <li>After the all payments, follow the below steps to split the bills
                                <ul>
                                    <li>Person with highest Paid value, will recieve amount from all of other people. This person will be displayed the sum of amount to be recieved (like +₹666.67).</li>
                                    <li>People with less Paid value than highest, will give the amount displayed (like -₹333.33) to the person of highest paid value.</li>
                                </ul>
                            </li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
