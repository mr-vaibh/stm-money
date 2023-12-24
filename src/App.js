import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

import People from './components/People';
import ControlBox from './components/ControlBox/ControlBox';
import Instructions from './components/Instructions';

import peopleList from './util/data';
import useLocalStorage from './util/useLocalStorage'

import './App.css';
import './css/style.css'

const styleSpan = {
  fontSize: '22px',
  fontWeight: 'bold',
}

function App() {
  const [people, setPeople] = useLocalStorage('people', peopleList);
  const [totalAmount, setTotalAmount] = useState(0);
  const [eachAmount, setEachAmount] = useState(0);

  useEffect(() => {
    let totalAmount = 0;
    people.forEach(each => totalAmount += each.paid);
    setTotalAmount(parseFloat(totalAmount).toFixed(2));
    setEachAmount((totalAmount / people.length).toFixed(2));
  }, [people])

  return (
    <div className="App">
      <Container maxWidth="lg">
        <ControlBox people={people} setPeople={setPeople} />
        <People people={people} setPeople={setPeople} eachAmount={eachAmount} />

        <div id='totalAmountDiv'>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            <span style={{ 'color': '#000000', ...styleSpan }}>&#8377; {totalAmount}</span>
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <span style={{ 'color': '#eb9800', ...styleSpan }}>&#8377; {eachAmount}</span> each
          </Typography>
        </div>

        <br /><br /><br />
        <Container maxWidth="sm">
          <Instructions noOfPeople={people.length} />
        </Container>

      </Container>
    </div>
  );
}

export default App;
