import { useState } from "react";
import '../styles/counter.css'

function Counter () {
    const [counter, setCounter] = useState(0);

    const handleIncrease = () =>{
        setCounter(counter + 1);
    };
    const handleDecrease = function () {
        setCounter (counter - 1)
    } ;
    const handleReset = () => {
        setCounter (0)
    }

    return(
        <>
        <div className="counter">
        <h2>{counter}</h2>
        </div>
        <div className="button">
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrease}>Decrease</button>
        </div>
        </>
    )
}

export default Counter;