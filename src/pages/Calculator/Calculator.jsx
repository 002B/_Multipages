import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [currentOperand, setCurrentOperand] = useState("0");
  const [previousOperand, setPreviousOperand] = useState("");
  const [operation, setOperation] = useState(null);
  const [lastOperation, setLastOperation] = useState(null);

  const appendNumber = (number) => {
    if (number === "." && currentOperand.includes(".")) return;
    setCurrentOperand(currentOperand + number.toString());
  };

  const Operation = (op) => {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
      compute();
    }
    setOperation(op);
    setPreviousOperand(currentOperand);
    setCurrentOperand("");
    setLastOperation(null);
  };

  const compute = () => {
    let result;
    const previous = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(previous) || isNaN(current)) return;

    switch (operation) {
      case "+":
        result = previous + current;
        break;
      case "-":
        result = previous - current;
        break;
      case "x":
        result = previous * current;
        break;
      case "÷":
        result = current === 0 ? "Error" : previous / current;
        break;
      default:
        return;
    }

    setCurrentOperand(result);
    setPreviousOperand("");
    setLastOperation({ operation: operation, number: current });
    setOperation(undefined);
  };

  const repeatLastOperation = () => {
    if (!lastOperation) return;
    setPreviousOperand(currentOperand);
    const current = parseFloat(currentOperand);

    switch (lastOperation.operation) {
      case "+":
        setCurrentOperand(current + lastOperation.number);
        break;
      case "-":
        setCurrentOperand(current - lastOperation.number);
        break;
      case "x":
        setCurrentOperand(current * lastOperation.number);
        break;
      case "÷":
        setCurrentOperand(
          current === 0 ? "Error" : current / lastOperation.number
        );
        break;
      default:
        break;
    }
  };

  const clearDisplay = () => {
    setCurrentOperand("0");
    setPreviousOperand("");
    setOperation(null);
    setLastOperation(null);
  };

  const deleteNum = () => {
    setCurrentOperand(currentOperand.toString().slice(0, -1));
  };

  const formatNumber = (number) => {
    if (number === "") return "";
    const floatNumber = parseFloat(number);
    if (isNaN(floatNumber)) return "";
    return floatNumber.toLocaleString("en");
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="calculator-display">
          <div className="previous">
            {formatNumber(previousOperand)} {operation}
          </div>
          <div className="current">{formatNumber(currentOperand)}</div>
        </div>

        <div className="button-container">
          <button className="btn-op btn-clear" onClick={clearDisplay}>
            CLEAR
          </button>
          <button className="btn-op btn-delete" onClick={deleteNum}>
            ⭠
          </button>
          <button className="btn-op btn-divide" onClick={() => Operation("÷")}>
            ÷
          </button>
          <button className="btn-num btn-7" onClick={() => appendNumber("7")}>
            7
          </button>
          <button className="btn-num btn-8" onClick={() => appendNumber("8")}>
            8
          </button>
          <button className="btn-num btn-9" onClick={() => appendNumber("9")}>
            9
          </button>
          <button
            className="btn-op btn-multiply"
            onClick={() => Operation("x")}
          >
            ×
          </button>
          <button className="btn-num btn-4" onClick={() => appendNumber("4")}>
            4
          </button>
          <button className="btn-num btn-5" onClick={() => appendNumber("5")}>
            5
          </button>
          <button className="btn-num btn-6" onClick={() => appendNumber("6")}>
            6
          </button>
          <button
            className="btn-op btn-subtract"
            onClick={() => Operation("-")}
          >
            -
          </button>
          <button className="btn-num btn-1" onClick={() => appendNumber("1")}>
            1
          </button>
          <button className="btn-num btn-2" onClick={() => appendNumber("2")}>
            2
          </button>
          <button className="btn-num btn-3" onClick={() => appendNumber("3")}>
            3
          </button>
          <button className="btn-num btn-dot" onClick={() => appendNumber(".")}>
            .
          </button>
          <button className="btn-num btn-0" onClick={() => appendNumber("0")}>
            0
          </button>
          <button className="btn-op btn-add" onClick={() => Operation("+")}>
            +
          </button>
          <button
            className="btn-op btn-equal"
            onClick={() => {
              if (operation == null && lastOperation) {
                repeatLastOperation();
              } else {
                compute();
              }
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
