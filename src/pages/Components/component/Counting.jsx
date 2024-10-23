import { useState } from 'react'
import './Counting.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Counting(props) {
    const [count, setCount] = useState(0 || props.value);

    const increasement = () => {
        setCount(prev => prev + 1);
    }
    const decreasement = () => {
        setCount(prev => prev - 1);
    }

    return (
        <div className="countContainer">
            <h3 className="countTitle">{props.name ? props.name : "Counting"}</h3>
            <div className="countDisplay">
                <input className='text-center' type="text" value={count} onChange={(e) => setCount(parseInt(e.target.value))}/>
            </div>
            <div className="countButton">
                <button className="btn btn-danger" id="decButton" onClick={decreasement}>-</button>
                <button className="btn btn-success" id="incButton" onClick={increasement}>+</button>
            </div>
        </div>
    )
}

export default Counting