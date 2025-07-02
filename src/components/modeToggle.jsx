import { useState } from "react"; 
import './index.css';

function App () {
  const [isDarkMode, setIsDarkMode]= useState(false);
  const toggleMode = function () {
    setIsDarkMode(prevMode => !prevMode)
  }

  return(
    <div className={isDarkMode ? 'dark' : 'light'}>
      <h1>{isDarkMode ? 'Dark Mode 🌚' : 'Light Mode ☀️'}</h1>
        <button onClick={toggleMode}>
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      
    </div>

  );
}

export default App