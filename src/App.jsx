import React, { useState } from 'react';
import './App.css'; // Import your external CSS file

const App = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState(0);

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setOutput(eval(input).toString());
      } catch (error) {
        setOutput('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setOutput(0);
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.','C', '+',
     '=',
  ];

  return (
    <div className="calculator">
      <input
        type="text"
        className="input-field"
        value={input}
        readOnly
      />
      <div className="output-section">
        <div className="output">
          {output}
        </div>
      </div>
      <div className="buttons">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`button ${button === '=' ? 'span-4' : 'span-1'}`}
            onClick={() => handleButtonClick(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
