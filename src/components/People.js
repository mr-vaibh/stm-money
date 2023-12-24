import React, { useState, useEffect, useCallback } from 'react'
import PeopleModal from './PeopleModal';

export default function People({ people, setPeople, eachAmount }) {
    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState(null);

    const handleOpen = useCallback((id) => {
        const item = people.filter(item => item.id === parseInt(id) + 1)[0];

        setModalData(item);
        setOpen(true);
    }, [people, setModalData, setOpen]);

    const handleClose = () => setOpen(false);

    const generateCircle = useCallback((peopleNameList, numItems) => {
        const circle = document.getElementById('circle');
        const containerSize = Math.min(circle.offsetWidth, circle.offsetHeight);
        const radius = window.screen.height / 4; // Adjust the factor as needed

        const angle = (2 * Math.PI) / numItems;

        circle.innerHTML = null;

        for (let i = 0; i < numItems; i++) {
            const item = document.createElement('div');
            item.id = i;
            item.className = 'item';
            item.style.color = '#fff';
            item.style.cursor = 'pointer';
            item.textContent = peopleNameList[i]; // Add text content (1, 2, 3, ...)

            item.addEventListener('click', () => handleOpen(item.id));

            // Adjust the radius as needed
            // const radius = 200;
            const x = -Math.sin(i * angle) * radius + containerSize / 2;
            const y = -Math.cos(i * angle) * radius + containerSize / 2;

            // if (i === 0) {
            //     const sourceRect = item.getBoundingClientRect();
            //     const totalAmountDiv = document.getElementById('totalAmountDiv');
            //     totalAmountDiv.style.position = 'relative';
            //     totalAmountDiv.style.transform = `translate(${sourceRect.left + window.scrollX}px, ${sourceRect.top - window.scrollY}px)`;
            //     // document.getElementById('totalAmountDiv').style.top = `${sourceRect.top + window.scrollY}px`;
            //     // document.getElementById('totalAmountDiv').style.left = `${sourceRect.left + window.scrollX}px`;
            // }

            const itemSizePercentage = 50; // Adjust the percentage as needed
            const itemSize = (itemSizePercentage / 100) * containerSize;
            item.style.width = itemSize + 'px';
            item.style.height = itemSize + 'px';

            // Hacky coefficient to adjust circles' position 
            // item.style.left = '-' + 10 + 'px';
            // item.style.top = '-' + 10 + 'px';

            item.style.transform = `translate(${x}px, ${y}px)`;

            circle.appendChild(item);
        }
    }, [handleOpen])

    useEffect(() => {
        const peopleNameList = people.map(item => item.name);
        generateCircle(peopleNameList, peopleNameList.length);
    }, [people, generateCircle])

    useEffect(() => {
        setPeople(prevPeople => prevPeople.map(person =>
            person.id === modalData?.id ? modalData : person
        ))
    }, [modalData, setPeople])

    return (
        <div id="box">
            <div className="circle" id="circle"></div>
            <PeopleModal
                key={1}
                people={people}
                eachAmount={eachAmount}
                modalData={modalData}
                setModalData={setModalData}
                // changedModalData={changedModalData}
                // setChangedModalData={setChangedModalData}
                open={open}
                setOpen={setOpen}
                handleOpen={handleOpen}
                handleClose={handleClose}
            />
        </div>
    )
}
