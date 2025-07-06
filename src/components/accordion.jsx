import { useState } from "react";
import '../styles/accordion.css'

function Accordion () {
    const [isOpen, setIsOPen] = useState (false)
     const toggleOption = function () {
    setIsOPen(prev => !prev)
}
    return(
        <>
        <section>
            <p>What is React?</p>
            {isOpen && <p>React is a JavaScript library for building UIs...</p>}
            <button
            className="accordion-button" 
            onClick={toggleOption}>{isOpen ? 'Hide answer' : 'Show answer'}</button>
        </section>
        </>
    )
}

export default Accordion;    