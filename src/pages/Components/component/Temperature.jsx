import { useState, useEffect } from "react";
import "./Temperature.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Temperature(props) {
  const [celsius, setCelsius] = useState(25);
  const [kelvin, setKelvin] = useState(25 + 273.15);
  const [fahrenheit, setFahrenheit] = useState(77);

  useEffect(() => {
    setFahrenheit((celsius * 9) / 5 + 32);
    setKelvin(celsius + 273.15);
  }, [celsius]);

  const changeKelvin = (newKelvin) => {
    setCelsius(newKelvin - 273.15);
  };
  const changeFahrenheit = (newFahrenheit) => {
    setCelsius(((newFahrenheit - 32) * 5) / 9);
  };

  return (
    <div className="temperatureContainer">
      <h1 className="temperatureTitle">
        {props.name ? props.name : "Temperature"}
      </h1>
      <div className="inputContainer">
        <div className="celsiusContainer">
        <div className="celsiusDisplay">
          <input
            className="text-center bg-primary text-light rounded"
            type="text"
            value={celsius.toFixed(2) + "°C"}
            onChange={(e) => setCelsius(parseInt(e.target.value))}
            readOnly
          />
        </div>
        <h3 className="text-center">Celsius</h3>
          <div className="buttonContainer">
          <button
            className="btn btn-danger"
            onClick={() => setCelsius((prev) => prev - 1)}
          >
            -
          </button>
          <input
            className="text-center"
            type="text"
            value={celsius.toFixed(2)}
            onChange={(e) => setCelsius(parseFloat(e.target.value))}
          />
          <button
            className="btn btn-success"
            onClick={() => setCelsius((prev) => prev + 1)}
          >
            +
          </button>
          </div>
        </div>
        <div className="fahrenheitContainer">
        <div className="fahrenheitDisplay">
          <input
            className="text-center bg-primary text-light rounded"
            type="text"
            value={fahrenheit.toFixed(2) + "°F"}
            onChange={(e) => setFahrenheit(parseFloat(e.target.value))}
            readOnly
          />
        </div>
        <h3 className="text-center">Fahrenheit</h3>
          <div className="buttonContainer">
          <button
            className="btn btn-danger"
            onClick={() => changeFahrenheit(fahrenheit - 1)}
          >
            -
          </button>
          <input
            className="text-center"
            type="text"
            value={fahrenheit.toFixed(2)}
            onChange={(e) => changeFahrenheit(parseFloat(e.target.value))}
          />
          <button
            className="btn btn-success"
            onClick={() => changeFahrenheit(fahrenheit + 1)}
          >
            +
          </button>
          </div>
        </div>
        <div className="kelvinContainer">
        <div className="kelvinDisplay">
          <input
            className="text-center bg-primary text-light rounded"
            type="text"
            value={kelvin.toFixed(2) + "°K"}
            onChange={(e) => setKelvin(parseFloat(e.target.value))}
          />
        </div>
        <h3 className="text-center">Kelvin</h3>
          <div className="buttonContainer">
          <button
            className="btn btn-danger"
            onClick={() => changeKelvin(kelvin - 1)}
          >
            -
          </button>
          <input
            className="text-center"
            type="text"
            value={kelvin.toFixed(2)}
            onChange={(e) => changeKelvin(parseFloat(e.target.value))}
          />
          <button
            className="btn btn-success"
            onClick={() => changeKelvin(kelvin + 1)}
          >
            +
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Temperature;
