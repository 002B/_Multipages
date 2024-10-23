import React from "react";
import Counting from "./component/Counting.jsx";
import Timer from "./component/Timer.jsx";
import Calculate from "./component/Calculate.jsx";
import Temperature from "./component/Temperature.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Component.css";

const Component = () => {
  return (
    <div className="appWrapper">
      <div className="appTitle">
        <h1 className="text-white text-center rounded p-2">REACT COMPONENTS</h1>
      </div>
      <div className="appContainer">
        <div className="timerAndCount">
          <Counting name="not Counting" value={12} />
          <Timer name="not Timer" value={9000} />
        </div>
        <div className="calculator">
          <Calculate name="not Calculator" />
        </div>
        <div className="temperature">
          <Temperature name="not Temperature" />
        </div>
      </div>
      <div className="appName">
        <h1 className="text-white text-center rounded p-2">
          นายพงศภัค ปานประเสริฐ รหัสนักศึกษา 66083745
        </h1>
      </div>
    </div>
  );
};

export default Component;
