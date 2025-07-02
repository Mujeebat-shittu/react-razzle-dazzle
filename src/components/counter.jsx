import { useState, useEffect } from "react";
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

    useEffect(() => {
    document.body.style.background = "linear-gradient(25deg, #f181aa, #d36c76 50%)";

    return () => {
      document.body.style.background = ""; // optional: resets when leaving component
    };
  }, []);



    return(
        <>
        <div className="container">
           <div className="counter">
        <h2>{counter}</h2>
        </div>
        <div className="button">
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrease}>Decrease</button>
        </div> 
        </div>
        
        </>
    )
}

export default Counter;