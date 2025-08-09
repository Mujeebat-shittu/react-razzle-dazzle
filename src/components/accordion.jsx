import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { ChevronRightIcon } from "lucide-react";

function Accordion() {
  const [isOpen, setIsOPen] = useState(false);
  const toggleOption = function () {
    setIsOPen((prev) => !prev);
  };

  const navigate = useNavigate();
  const handlenext = function () {
    navigate("/colourPicker");
  };

  const handleback = function () {
    navigate("/");
  };
  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <p>What is React?</p>
        <br />
        {isOpen && <p>React is a JavaScript library for building UIs...</p>}
        <button
          className="py-4 px-6 rounded border-none bg-[hsl(0,0%,40%)] text-[hsl(0,0%,72%)] mx-auto mt-2 mb-2 text-[12px] flex cursor-pointer hover:bg-[#333333] transition-colors duration-200"
          onClick={toggleOption}
        >
          {isOpen ? "Hide answer" : "Show answer"}
        </button>

        <div className="gap-8 inline-flex mt-2 p-4">
          <ChevronLeftIcon
            size={30}
            strokeWidth={4}
            onClick={handleback}
            className=" my-4 cursor-pointer bg-[hsl(0,0%,40%)] hover:bg-[hsl(0,0%,20%)]"
          />
          <ChevronRightIcon
            size={30}
            strokeWidth={4}
            onClick={handlenext}
            className="my-4 cursor-pointer bg-[hsl(0,0%,40%)] hover:bg-[hsl(0,0%,20%)]"
          />
        </div>
      </section>
    </>
  );
}

export default Accordion;
