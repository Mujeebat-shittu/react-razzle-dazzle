import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { ChevronRightIcon } from "lucide-react";
import { Home } from "lucide-react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = function () {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const navigate = useNavigate();
  const handlenext = function () {
    navigate("/passwordToggle");
  };

  const handleback = function () {
    navigate("/faq");
  };

  const handlehome = function () {
    navigate("/");
  };

  return (
    <>
      <div
        className={`${
          isDarkMode
            ? "bg-[#121212] h-screen w-screen text-white"
            : "bg-white text-black h-screen w-screen"
        } my-4 mx-auto flex flex-col items-center justify-center`}
      >
        <div>
          <h1 className="my-4 mx-auto flex items-center justify-center text-lg">
            {isDarkMode ? "Dark Mode 🌚" : "Light Mode ☀️"}
          </h1>
          <button
            onClick={toggleMode}
            className={`${
              isDarkMode
                ? "bg-[#e6e6e6ff] text-[#121212]  hover:bg-[hsl(0,0%,50%)]"
                : "bg-[hsl(0,0%,10%)]  text-white hover:bg-[hsl(0,0%,50%)]"
            } text-center flex items-center justify-center px-6 py-4 border-none rounded-sm my-4 mx-auto text-[0.9rem] cursor-pointer `}
          >
            Switch to {isDarkMode ? "Light" : "Dark"} Mode
          </button>
        </div>

        <div className="gap-8 flex items-center justify-center mt-2 p-4 ">
          <ChevronLeftIcon
            size={30}
            strokeWidth={3}
            onClick={handleback}
            className={`${
              isDarkMode
                ? "bg-[#e6e6e6ff] text-[#121212]  hover:bg-[hsl(0,0%,50%)]"
                : "bg-[hsl(0,0%,10%)] text-white hover:bg-[hsl(0,0%,50%)]"
            } " cursor-pointer px-1"`}
          />

          <Home
            size={28}
            strokeWidth={3}
            onClick={handlehome}
            className={`${
              isDarkMode
                ? "bg-[#e6e6e6ff] text-[#121212]  hover:bg-[hsl(0,0%,50%)]"
                : "bg-[hsl(0,0%,10%)]  text-white hover:bg-[hsl(0,0%,50%)]"
            } " cursor-pointer px-1"`}
          />

          <ChevronRightIcon
            size={30}
            strokeWidth={3}
            onClick={handlenext}
            className={`${
              isDarkMode
                ? "bg-[#e6e6e6ff] text-[#121212] hover:bg-[hsl(0,0%,50%)]"
                : "bg-[hsl(0,0%,10%)]  text-white hover:bg-[hsl(0,0%,50%)]"
            } " cursor-pointer px-1"`}
          />
        </div>
      </div>
    </>
  );
}

export default App;
