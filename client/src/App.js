import React, { useState } from "react"
import './App.css';

function App() {

  const  [valor, setValor] = useState(0)

  const  [hold, setHold] = useState(0)

  const  [operator, setOperator] = useState()

  function typeValue(e){

    let input = e.target.value

    if(valor == 0){
    setValor(input)
    } else{
    setValor(valor + input)
    }

    console.log(e.target.value)

  }

  function clear(){
    setValor(0)
  }

  function porcent(){
    setValor(valor / 100)

  }

  function signChanger(){
    setValor(-valor)

  }


  function operatorHandler(e){

    let operatorInput = e.target.value
    setOperator(operatorInput)
    setHold(valor)
    setValor(0)

  }

  function result(){
    if(operator === "+"){
      setValor(parseFloat(hold) + parseFloat(valor))
    }
    else if(operator === "-"){
      setValor(parseFloat(hold) - parseFloat(valor))
    }
    else if(operator === "/"){
      setValor(parseFloat(hold) / parseFloat(valor))
    }
    else if(operator === "x"){
      setValor(parseFloat(hold) * parseFloat(valor))
    }
  }


  return (
    <div className="App">

<input value={valor} className='box'></input>

<div className='container'>
      <button className='white' onClick={clear}>AC</button>
      <button className='white' onClick={signChanger}>+/-</button>
      <button className='white' onClick={porcent}>%</button>
      <button className='orange' onClick={operatorHandler} value={"/"}>/</button>
      <button onClick={typeValue} value={1}>1</button>
      <button onClick={typeValue} value={2} >2</button>
      <button onClick={typeValue} value={3} >3</button>
      <button className='orange' onClick={operatorHandler} value={"x"} >x</button>
      <button onClick={typeValue} value={4} >4</button>
      <button onClick={typeValue} value={5} >5</button>
      <button onClick={typeValue} value={6} >6</button>
      <button className='orange' onClick={operatorHandler} value={"-"}>-</button>
      <button onClick={typeValue} value={7} >7</button>
      <button onClick={typeValue} value={8} >8</button>
      <button onClick={typeValue} value={9} >9</button>
      <button className='orange' onClick={operatorHandler} value={"+"}>+</button>
      <button onClick={typeValue} value={0}>0</button>
      <button onClick={typeValue} value={"."}>.</button>
      <button>,</button>
      <button className='orange' onClick={result}>=</button>
</div>

    </div>
  );
}

export default App;
