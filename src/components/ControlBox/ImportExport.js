import React from 'react'

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';

export default function ImportExport({ people, setPeople }) {

    const exportPeopleData = () => {
        const filename = 'people_data.json';
        const data = JSON.stringify(people);

        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const importPeopleData = (event) => {
        const fileInput = event.target;
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const importedData = JSON.parse(e.target.result);
                    setPeople(importedData);
                } catch (error) {
                    console.error('Error parsing JSON file:', error);
                }
            };

            reader.readAsText(file);
        }
    };

    return (
        <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
        >
            <Button variant="contained" onClick={exportPeopleData} startIcon={<DownloadIcon />}>Export</Button>
            <Button variant="contained" component="label" startIcon={<UploadIcon />}>Import <input hidden type="file" accept=".json" onChange={importPeopleData} /></Button>
        </ButtonGroup>
    )
}
