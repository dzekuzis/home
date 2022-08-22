import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import './Calculator.css';

const Calculator = () => {

  let [calc, setCalc] = useState('')
  let [results, setResults] = useState('')

const ops =['/','+','-','*','.']

  const updateCalc = (value) =>{
    if(
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
     ){
      return
     }
    setCalc(calc + value)

    if(!ops.includes(value)){
      setResults(eval(calc + value).toString())
    }
  }
 const createDigits =() =>{
  let digits =[]
  for(let i=1; i < 10;i++){
    digits.push(<button
    onClick={() => updateCalc(i.toString())}
    key={i}>{i}</button>)
  }
  return digits;
 }

const calculate = () =>{
  setCalc(eval(calc).toString())
}

const deleteLast =() =>{
  if(calc == ''){
    return
  }

  const value = calc.slice(0, -1)

  setCalc(value)
}
const deleteAll = () =>{
  const value = ''
  setCalc(value)
  setResults(value)
}

  return (
    <div className="App">
        <h1>Calculator for counting horse power</h1>
     <div className='display'>
        { <span></span>}{calc || '0'}
     </div>
     <div className='operators'>
      <button onClick={() => updateCalc('-')}>-</button>
      <button onClick={() => updateCalc('+')}>+</button>
      <button onClick={() => updateCalc('/')} >/</button>
      <button onClick={() => updateCalc('*')} >*</button>

      <button onClick={deleteLast}>DEL</button>
      <button onClick={deleteAll}>AC</button>
     </div>
     <div className='digits'>
         {createDigits()}
         <button onClick={() => updateCalc('0')}>0</button>
         <button onClick={() => updateCalc('.')}>.</button>

         <button onClick={calculate}>=</button>
         
      </div>
   
        
    
    </div>
  );
}

    <Outlet />
  




export default Calculator;
