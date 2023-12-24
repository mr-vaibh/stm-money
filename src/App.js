import logo from './logo.svg';
import './App.css';
import './css/style.css'

import peopleList from './data';

import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

import People from './components/People';
import ControlBox from './components/ControlBox/ControlBox';
import { useState, useEffect } from 'react';

function App() {
  const [people, setPeople] = useState(peopleList);
  const [totalAmount, setTotalAmount] = useState(0);
  const [eachAmount, setEachAmount] = useState(0);

  useEffect(() => {
    let totalAmount = 0;
    people.forEach(each => totalAmount += each.paid);
    setTotalAmount(totalAmount);
    setEachAmount((totalAmount / people.length).toFixed(2));
  }, [people])

  return (
    <div className="App">
      <Container maxWidth="lg">
        <ControlBox people={people} setPeople={setPeople} />
        <People people={people} setPeople={setPeople} eachAmount={eachAmount} />

        <div id='totalAmountDiv'>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            &#8377; {totalAmount}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            &#8377; {eachAmount} each
          </Typography>
        </div>

      </Container>
    </div>
  );
}

export default App;
