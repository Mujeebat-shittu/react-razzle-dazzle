import { useState } from "react"; 
import '../styles/mt.css';

function App () {
  const [isDarkMode, setIsDarkMode]= useState(false);
  const toggleMode = function () {
    setIsDarkMode(prevMode => !prevMode)
  }

  return(
    <div className={`${isDarkMode ? 'dark' : 'light'} mt-container`}>
      <h1 className="mt-content">{isDarkMode ? 'Dark Mode 🌚' : 'Light Mode ☀️'}</h1>
        <button onClick={toggleMode}
        className="mt-button">
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      
    </div>

  );
}

export default App