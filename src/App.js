import React, { useState, useEffect } from 'react';
import './App.css'; // Import a separate CSS file for styling

const App = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [prefixFactor, setPrefixFactor] = useState(1);
  const [result, setResult] = useState('');

  useEffect(() => {
    const parsedInput1 = parseFloat(input1);
    const parsedInput2 = parseFloat(input2);
    const parsedInput3 = parseFloat(input3);

    //if (input1 === '' || input2 === '' || input3 === '') {
    //  setResult('Waiting for all input fields');
    //} else 
    if (
      input1 === '' ||
      input2 === '' ||
      input3 === '' ||
      isNaN(parsedInput1) ||
      isNaN(parsedInput2) ||
      isNaN(parsedInput3)
    ) {
      setResult('Invalid inputs or waiting for all inputs');
    } else {
      // Linear formula: result = (input1 * input2 + input3) * prefixFactor
      const calculatedResult = (parsedInput1 * parsedInput2 + parsedInput3) * prefixFactor;
      setResult(calculatedResult);
    }
  }, [input1, input2, input3, prefixFactor]);

  const isInvalidInput = (input) => input !== '' && isNaN(parseFloat(input));

  return (
    <div className="container">
      <h1>Warehouse Internal</h1>
      <h2>Hourly Rate - Incentive Calculator</h2>
      <div className="radio-container">
        <label>Location :</label>
        <div>
          <input
            type="radio"
            id="factor1"
            name="prefixFactor"
            value={1}
            checked={prefixFactor === 1}
            onChange={() => setPrefixFactor(1)}
          />
          <label htmlFor="factor1">Dry</label>
        </div>
        <div>
          <input
            type="radio"
            id="factor2"
            name="prefixFactor"
            value={2}
            checked={prefixFactor === 2}
            onChange={() => setPrefixFactor(2)}
          />
          <label htmlFor="factor2">Cooler</label>
        </div>
        <div>
          <input
            type="radio"
            id="factor3"
            name="prefixFactor"
            value={3}
            checked={prefixFactor === 3}
            onChange={() => setPrefixFactor(3)}
          />
          <label htmlFor="factor3">Freezer</label>
        </div>
      </div>
      <br></br>
      <div className="input-container">
        <div className="input-row">
          <label htmlFor="input1">Cases :</label>
          <input
            type="number"
            id="input1"
            placeholder="Enter number of cases"
            //className={isInvalidInput(input1) ? 'invalid-input' : ''}
            min="0"
            step="0.01"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
        </div>
        <div className="input-row">
          <label htmlFor="input2">Performance:</label>
          <input
            type="number"
            id="input2"
            placeholder="Enter Performance % eg: 120"
            min="0"
            step="0.01"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </div>
        <div className="input-row">
          <label htmlFor="input3">Direct Hours Worked:</label>
          <input
            type="number"
            id="input3"
            placeholder="Enter hours in decimals"
            min="0"
            step="0.01"
            value={input3}
            onChange={(e) => setInput3(e.target.value)}
          />
        </div>
      </div>
      <div className="result-container">
        <p>Result:</p>
        <div className="result-box">{result}
        </div>
      </div>
    </div>
  );
};

export default App;

