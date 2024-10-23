import { useState, useEffect } from "react";
import './Timer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Timer = (props) => {
    const [time, setTime] = useState(0 || props.value);
    const [isRunning, setIsRunning] = useState(false);

    const formatTime = (sec) =>{
        const second = sec % 60;
        const minute = Math.floor(sec / 60);
        const hour = Math.floor(minute / 60);
        if (hour > 0) {
            return `${hour}h ${minute % 60}m ${second % 60}s`;
        } else if (minute > 0) {
            return `${minute}m ${second % 60}s`;
        } else{
            return `${second}s`;
        }
    }
    const resetTimer = () => {
        setTime(0 || props.value);
        setIsRunning(false);
    };

    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else if (!isRunning && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, time]);

    return (
        <div className="timerContainer">
            <h3 className="timerTitle">{props.name ? props.name : "Timer"}</h3>
            <div className="timerDisplay">
                <input type="text" placeholder="0s" value={formatTime(time)} readOnly />
            </div>
            <div className="timerButton">
                <button className="btn btn-secondary bi bi-arrow-clockwise" onClick={resetTimer}>Reset</button>
                <button className={'btn ' + (isRunning ? 'btn-danger bi bi-pause' : 'btn-success bi bi-play-fill')} onClick={() => setIsRunning(!isRunning)}>{isRunning ? "Pause" : "Run"}</button>
            </div>
        </div>
    )
}

export default Timer