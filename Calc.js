import React, { useState } from 'react'
import './Calc.css'
function Calc() {
    const [result,setResult] = useState("");
    
    const handlebutton =(e) =>
    {
      setResult(result.concat(e.target.name));
    }
    const clear = ()=>
    {
      setResult("");
    }
    const backspace =()=>
    {
      setResult(result.slice(0,-1))
    }
    const evaluate =()=>
    {
        try
        {
          setResult(eval(result).toString());
        }
        catch(err)
        {
          setResult("Invalid type");
          
        }
  }
  return (
    <div className='calc'>
       <div className='inputt'>
        <form>
          <input type='text' placeholder='Enter the Number ' value={result}></input>
        </form>
       </div>
      <div className='keypad'>
        <button onClick={clear} id='Clear'>Clear</button>
        <button onClick={backspace} id='C'>Del</button>
        <button name='/' onClick={handlebutton}>/</button>
        <button name='7'onClick={handlebutton}>7</button>
        <button name='8'onClick={handlebutton}>8</button>
        <button name='9'onClick={handlebutton}>9</button>
        <button name='*'onClick={handlebutton}>*</button>
        <button name='4'onClick={handlebutton}>4</button>
        <button name='5'onClick={handlebutton}>5</button>
        <button name='6'onClick={handlebutton}>6</button>
        <button name='-'onClick={handlebutton}>-</button>
        <button name='1'onClick={handlebutton}>1</button>
        <button name='2'onClick={handlebutton}>2</button>
        <button name='3'onClick={handlebutton}>3</button>
        <button name='+'onClick={handlebutton}>+</button>
        <button name='0'onClick={handlebutton}>0</button>
        <button name='.'onClick={handlebutton}>.</button>
        <button onClick={evaluate} id='equ'>=</button>


      </div>
    </div>
  
  )
}

export default Calc