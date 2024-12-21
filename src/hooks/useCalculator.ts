import { useState } from 'react';

export const useCalculator = () => {
  const [display, setDisplay] = useState('0');
  const [memory, setMemory] = useState(0);
  const [previousOperand, setPreviousOperand] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [isNewNumber, setIsNewNumber] = useState(true);
  const [isRadians, setIsRadians] = useState(true);

  const clear = () => {
    setDisplay('0');
    setPreviousOperand(null);
    setOperation(null);
    setIsNewNumber(true);
  };

  const handleNumber = (num: string) => {
    if (isNewNumber) {
      setDisplay(num);
      setIsNewNumber(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const calculateResult = () => {
    if (previousOperand === null || operation === null) return;

    const current = parseFloat(display);
    let result = 0;

    switch (operation) {
      case '+':
        result = previousOperand + current;
        break;
      case '-':
        result = previousOperand - current;
        break;
      case '×':
        result = previousOperand * current;
        break;
      case '÷':
        result = previousOperand / current;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setPreviousOperand(null);
    setOperation(null);
    setIsNewNumber(true);
  };

  const handleOperation = (op: string) => {
    const current = parseFloat(display);
    
    if (previousOperand === null) {
      setPreviousOperand(current);
    } else if (operation) {
      calculateResult();
    }
    
    setOperation(op);
    setIsNewNumber(true);
  };

  const handleScientificOperation = (op: string) => {
    const current = parseFloat(display);
    let result = 0;

    switch (op) {
      case 'sin':
        result = isRadians ? Math.sin(current) : Math.sin((current * Math.PI) / 180);
        break;
      case 'cos':
        result = isRadians ? Math.cos(current) : Math.cos((current * Math.PI) / 180);
        break;
      case 'tan':
        result = isRadians ? Math.tan(current) : Math.tan((current * Math.PI) / 180);
        break;
      case 'log':
        result = Math.log10(current);
        break;
      case 'ln':
        result = Math.log(current);
        break;
      case 'sqrt':
        result = Math.sqrt(current);
        break;
      case 'square':
        result = current * current;
        break;
      case '1/x':
        result = 1 / current;
        break;
      case '^':
        setPreviousOperand(current);
        setOperation('^');
        setIsNewNumber(true);
        return;
      case 'π':
        result = Math.PI;
        break;
      case 'e':
        result = Math.E;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setIsNewNumber(true);
  };

  const toggleAngleUnit = () => {
    setIsRadians(!isRadians);
  };

  return {
    display,
    memory,
    isRadians,
    handleNumber,
    handleOperation,
    handleScientificOperation,
    calculateResult,
    clear,
    toggleAngleUnit,
  };
};