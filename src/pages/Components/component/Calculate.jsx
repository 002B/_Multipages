import { useState, useEffect } from "react";
import "./Calculate.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Calculate = (props) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState('+')

  const updateResult = (op) =>{
    switch (op){
        case '+':
            setResult(num1 + num2);
            setOperator('+')
            break
        case '-':
            setResult(num1 - num2);
            setOperator('-')
            break
        case '*':
            setResult(num1 * num2);
            setOperator('*')
            break
        case '/':
            setResult(num1 / num2);
            setOperator('/')
            break
    }
  }

  return (
    <div className="calculateContainer">
      <h3 className="calculateTitle">
        {props.name ? props.name : "Calculate"}
      </h3>
      <span className="calculateDisplay">
        <h3 className="bg-secondary p-2 text-white rounded">A = {num1}</h3>
        <h1 className="bg-primary p-2 text-white rounded">A {operator} B = {result.toFixed(2)}</h1>
        <h3 className="bg-secondary p-2 text-white rounded">B = {num2}</h3>
      </span>
      <div className="calculateButton">
        <button
          className="btn btn-primary"
          id="addButton"
          onClick={() => updateResult('+')}
        >
          +
        </button>
        <button
          className="btn btn-primary"
          id="subButton"
          onClick={() => updateResult('-')}
        >
          -
        </button>
        <button
          className="btn btn-primary"
          id="mulButton"
          onClick={() => updateResult('*')}
        >
          x
        </button>
        <button
          className="btn btn-primary"
          id="divButton"
          onClick={() => updateResult('/')}
        >
          ÷
        </button>
      </div>
      <div className="calculateInput">
        <div className="inputLeft">
          <h1>A</h1>
          <button
            className="btn btn-danger"
            id="decButton"
            onClick={() => setNum1((prev) => prev - 1)}
          >
            -
          </button>
          <input
            className="text-center"
            type="text"
            value={num1}
            onChange={(e) => setNum1(parseInt(e.target.value))}
          />
          <button
            className="btn btn-success"
            id="incButton"
            onClick={() => setNum1((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <div className="inputRight">
          <h1>B</h1>
          <button
            className="btn btn-danger"
            id="decButton"
            onClick={() => setNum2((prev) => prev - 1)}
          >
            -
          </button>
          <input
            className="text-center"
            type="text"
            value={num2}
            onChange={(e) => setNum2(parseInt(e.target.value))}
          />
          <button
            className="btn btn-success"
            id="incButton"
            onClick={() => setNum2((prev) => prev + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculate;
