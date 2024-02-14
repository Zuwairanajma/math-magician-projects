import { useState, React } from 'react';
import CalculatorButton from './Button';
import './Calculator.css';
import calculate from './logic/calculate';

function Calculator() {
  const [numbers, setNumbers] = useState({
    total: null,
    next: null,
    operation: null,
  });

  function handleClick(number) {
    const newNumber = calculate(numbers, number);
    setNumbers(newNumber);
  }

  return (
    <div id="calculator" className="calculator">

      <h2>Let&apos;s do some math!</h2>
      <div className="tentative-cal">
        <div className="display" data-testid="display">
          { numbers.total }
          { numbers.operation }
          { numbers.next }
        </div>
        <div className="buttons-row">
          <CalculatorButton label="AC" onClick={() => handleClick('AC')} />
          <CalculatorButton label="+/-" onClick={() => handleClick('+/-')} />
          <CalculatorButton label="%" onClick={() => handleClick('%')} />
          <CalculatorButton label="÷" onClick={() => handleClick('÷')} />
        </div>
        <div className="buttons-row">
          <CalculatorButton label="7" onClick={() => handleClick('7')} />
          <CalculatorButton label="8" onClick={() => handleClick('8')} />
          <CalculatorButton label="9" onClick={() => handleClick('9')} />
          <CalculatorButton label="x" onClick={() => handleClick('x')} />
        </div>
        <div className="buttons-row">
          <CalculatorButton label="4" onClick={() => handleClick('4')} />
          <CalculatorButton label="5" onClick={() => handleClick('5')} />
          <CalculatorButton label="6" onClick={() => handleClick('6')} />
          <CalculatorButton label="-" onClick={() => handleClick('-')} />
        </div>
        <div className="buttons-row">
          <CalculatorButton label="1" onClick={() => handleClick('1')} />
          <CalculatorButton label="2" onClick={() => handleClick('2')} />
          <CalculatorButton label="3" onClick={() => handleClick('3')} />
          <CalculatorButton label="+" onClick={() => handleClick('+')} />
        </div>
        <div className="buttons-row last-buttons">
          <CalculatorButton label="0" onClick={() => handleClick('0')} />
          <CalculatorButton label="." onClick={() => handleClick('.')} />
          <CalculatorButton label="=" onClick={() => handleClick('=')} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
