import { useState } from "react";
import '../styles/colourPicker.css'

function ColourPicker () {
    const [colour, setColour]= useState("white")
    const colours = [
  "linear-gradient(to right, #ff9a9e, #fad0c4)",
  "linear-gradient(to right, #a1c4fd, #c2e9fb)",
  "white",
  "linear-gradient(to right, #667eea, #764ba2)",
  "linear-gradient(to right, #89f7fe, #66a6ff)"
];


    return(
        <>
        <div
        className="cp-container"
        style={{
          background: colour
        }}
        >
          </div>

        {colours.map((colour) => (
          <div className="class" 
          key={colour}>

        <button 
        className="cp-button"
        key={colour}
        onClick={ ()=> setColour(colour)}
        style={{
            background: colour
            
        }} 
        >
          Pick a colour

        </button>
          </div>

        ))}
        </>
    )

}

export default ColourPicker;

// const colors = ['red', 'blue', 'green'];

// colors.map(color => (
//   <button>{color}</button>
// ));
