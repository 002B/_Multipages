import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiPlay, BiPause } from "react-icons/bi";
import "./Ball.css";

import basketball from "../../pages/Animation/picture/basketballs.png";
import football from "../../pages/Animation/picture/football.png";
import volleyball from "../../pages/Animation/picture/volleyball.png";
import human from "../../pages/Animation/picture/human.png";
import cartoon from "../../pages/Animation/picture/cartoon.png";
import none from "../../pages/Animation/picture/none.png";

const Ball = () => {
  const fieldWidth = 600;
  const fieldHeight = 500;
  const ballSize = 100;
  const maxX = fieldWidth - ballSize - 2;
  const maxY = fieldHeight - ballSize - 2;

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [run, setRun] = useState(false);
  const [currentRotation, setCurrentRotation] = useState(0);
  const [ballImg, setBallImg] = useState(basketball);

  const process = () => {
    if (run) {
      directCalculate();
    }
  };

  const directCalculate = () => {
    if (goRight) {
      setX((prevX) => {
        if (prevX >= maxX) {
          setGoRight(false);
          setCurrentRotation((prevRot) => prevRot + 270);
          return prevX;
        }
        return prevX + 5;
      });
    } else {
      setX((prevX) => {
        if (prevX <= 0) {
          setGoRight(true);
          setCurrentRotation((prevRot) => prevRot - 135);
          return prevX;
        }
        return prevX - 5;
      });
    }

    if (goDown) {
      setY((prevY) => {
        if (prevY >= maxY) {
          setGoDown(false);
          setCurrentRotation((prevRot) => prevRot + 270);
          return prevY;
        }
        return prevY + 5;
      });
    } else {
      setY((prevY) => {
        if (prevY <= 0) {
          setGoDown(true);
          setCurrentRotation((prevRot) => prevRot - 135);
          return prevY;
        }
        return prevY - 5;
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      process();
    }, 16.667);
    return () => clearInterval(interval);
  }, [run, x, y]);

  const handleRunToggle = () => {
    setRun(!run);
  };

  const changeBackground = (id) => {
    switch (id) {
      case "1":
        setBallImg(basketball);
        break;
      case "2":
        setBallImg(football);
        break;
      case "3":
        setBallImg(volleyball);
        break;
      case "4":
        setBallImg(human);
        break;
      case "5":
        setBallImg(cartoon);
        break;
      case "6":
        setBallImg(none);
        break;
      default:
        setBallImg(none);
    }
  };

  return (
    <div id="container">
      <div
        id="field"
        style={{
          width: fieldWidth,
          height: fieldHeight,
          position: "relative",
          border: "1px solid black",
        }}
      >
        <div
          id="balls"
          style={{
            width: ballSize,
            height: ballSize,
            position: "absolute",
            top: y,
            left: x,
            transform: `rotate(${currentRotation}deg)`,
            // background: `url(${ballImg}`,
          }}
        >
          <img src={ballImg} />
        </div>
      </div>
      <div className="btn-container">
        <div className="play-pause">
          <button
            onClick={handleRunToggle}
            className={`btn ${run ? "btn-danger" : "btn-success"}`}
          >
            {run ? <BiPause /> : <BiPlay />}
            {run ? " Stop" : " Run"}
          </button>
        </div>
        <div className="btn-control">
          <button
            value="1"
            onClick={() => changeBackground("1")}
            className={`btn ${
              ballImg === basketball ? " btn-primary" : " btn-outline-primary"
            }`}
          >
            Basketball
          </button>
          <button
            value="2"
            onClick={() => changeBackground("2")}
            className={`btn ${
              ballImg === football ? " btn-primary" : " btn-outline-primary"
            }`}
          >
            Football
          </button>
          <button
            value="3"
            onClick={() => changeBackground("3")}
            className={`btn ${
              ballImg === volleyball ? " btn-primary" : " btn-outline-primary"
            }`}
          >
            Volleyball
          </button>
          <button
            value="4"
            onClick={() => changeBackground("4")}
            className={`btn ${
              ballImg === human ? " btn-primary" : " btn-outline-primary"
            }`}
          >
            Human
          </button>
          <button
            value="5"
            onClick={() => changeBackground("5")}
            className={`btn ${
              ballImg === cartoon ? " btn-primary" : " btn-outline-primary"
            }`}
          >
            Cartoon
          </button>
          <button
            value="6"
            onClick={() => changeBackground("6")}
            className={`btn btn-secondary`}
          >
            None
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ball;
