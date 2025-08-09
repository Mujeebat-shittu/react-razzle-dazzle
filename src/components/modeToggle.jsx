import { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { ChevronRightIcon } from "lucide-react";
import { Home } from "lucide-react";


function App () {
  const [isDarkMode, setIsDarkMode]= useState(false);
  const toggleMode = function () {
    setIsDarkMode(prevMode => !prevMode)
  }

  const navigate = useNavigate();
    const handlenext = function () {
      navigate("/passwordToggle");
    };

    const handleback = function () {
      navigate("/faq");
    };

    const handlehome = function (){
    navigate("/")
  }

  return(
    <>
    <div className={`${isDarkMode ? 'dark' : 'light'} my-4 mx-auto flex flex-col items-center justify-center `}>
      <div>
      <h1 className="my-4 mx-auto flex items-center justify-center">{isDarkMode ? 'Dark Mode 🌚' : 'Light Mode ☀️'}</h1>
        <button onClick={toggleMode}
        className="text-center flex items-center justify-center p-4 border-none rounded-sm my-4 mx-auto text-[0.9rem] cursor-pointer hover:bg-[hsl(0,0%,50%)]  ">
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>     
    </div>

    <div className="gap-8 flex items-center justify-center mt-2 p-4 ">
        <ChevronLeftIcon
          size={30}
          strokeWidth={4}
          onClick={handleback}
          className=" cursor-pointer bg-[hsl(0,0%,40%)] hover:bg-[hsl(0,0%,20%)] px-1"
        />

        <Home
        size={30}
        strokeWidth={4}
        onClick={handlehome}
        className="cursor-pointer bg-[hsl(0,0%,40%)] hover:bg-[hsl(0,0%,20%)] px-1"
        />

        <ChevronRightIcon
          size={30}
          strokeWidth={4}
          onClick={handlenext}
          className=" cursor-pointer bg-[hsl(0,0%,40%)] hover:bg-[hsl(0,0%,20%)] px-1"
        />
      </div>

    </div>
    
</>
  );
}

export default App