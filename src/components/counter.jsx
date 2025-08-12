import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { ChevronRightIcon } from "lucide-react";
import { Home } from "lucide-react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };
  const handleDecrease = function () {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(0);
  };

  useEffect(() => {
    document.body.style.background =
      "linear-gradient(25deg, #f181aa, #d36c76 50%)";

    return () => {
      document.body.style.background = "";
    };
  }, []);

  const navigate = useNavigate();
  const handlenext = function () {
    navigate("/faq");
  };

  const handleback = function () {
    navigate("/colourPicker");
  };

  const handlehome = function () {
    navigate("/");
  };

  return (
    <>
      <div className=" bg-[#eee9e9] w-auto md:w-[450px] rounded-4xl my-8 mx-auto p-8 flex flex-col items-center justify-center shadow-sm ">
        <div className="flex items-center justify-center">
          <h2 className="text-2xl my-4 mx-auto p-4 text-[#d36c76]">
            {counter}
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="w-auto h-auto my-2 mx-4 py-[0.4rem] px-[1.1rem] md:px-8 text-[0.9rem] md:text-[1rem] bg-[#d46e78] rounded-md border-none text-[#fff] text-base md:text-lg"
            onClick={handleDecrease}
          >
            Decrease
          </button>
          <button
            className="w-auto h-auto my-2 mx-4 py-[0.4rem] px-[1.1rem] md:px-8 text-[0.9rem] md:text-[1rem] bg-[#d46e78] rounded-md border-none text-[#fff] text-base md:text-lg"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="w-auto h-auto my-2 mx-4 py-[0.4rem] px-[1.1rem] md:px-8 text-[0.9rem] md:text-[1rem] bg-[#d46e78] rounded-md border-none text-[#fff] text-lg"
            onClick={handleIncrease}
          >
            Increase
          </button>
        </div>
      </div>

      <div className="gap-8 flex items-center justify-center mt-2 p-4">
        <ChevronLeftIcon
          size={30}
          color="#d36c76"
          strokeWidth={4}
          onClick={handleback}
          className=" cursor-pointer bg-[#eee9e9] hover:bg-[hsl(0,0%,40%)] px-1"
        />

        <Home
          size={30}
          color="#d36c76"
          strokeWidth={4}
          onClick={handlehome}
          className="cursor-pointer bg-[#eee9e9] hover:bg-[hsl(0,0%,40%)] px-1"
        />

        <ChevronRightIcon
          size={30}
          color="#d36c76"
          strokeWidth={4}
          onClick={handlenext}
          className=" cursor-pointer bg-[#eee9e9] hover:bg-[hsl(0,0%,40%)] px-1"
        />
      </div>
    </>
  );
}

export default Counter;
