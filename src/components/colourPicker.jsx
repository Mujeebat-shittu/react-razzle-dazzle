import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { ChevronRightIcon } from "lucide-react";
import { Home } from "lucide-react";

function ColourPicker() {
  const navigate = useNavigate();
  const handlenext = function () {
    navigate("/counter");
  };

  const handleback = function () {
    navigate("/accordion");
  };

  const handlehome = function () {
    navigate("/");
  };

  const [colour, setColour] = useState("white");
  const colours = [
    "linear-gradient(to right, #ff9a9e, #fad0c4)",
    "linear-gradient(to right, #a1c4fd, #c2e9fb)",
    "white",
    "linear-gradient(to right, #667eea, #764ba2)",
    "linear-gradient(to right, #89f7fe, #66a6ff)",
  ];

  return (
    <>
      <div
        className="w-[300px] md:w-[400px] h-[250px] mb-5 rounded-2xl my-4 mx-auto"
        style={{
          background: colour,
        }}
      ></div>

      {colours.map((colour) => (
        <div
          className="inline-flex sm:grid sm:grid-cols-[minmax(100px, 1fr)] my-3 sm:px-3.5 sm:py-[0.3rem] items-center justify-evenly p-0.5 md:my-4 mx-auto"
          key={colour}
        >
          <button
            className="text-[hsl(0,0%,20%)] w-auto h-auto m-1.5 border-none cursor-pointer rounded-md px-8 py-3"
            key={colour}
            onClick={() => setColour(colour)}
            style={{
              background: colour,
            }}
          >
            Pick a colour
          </button>
        </div>
      ))}

      <div className="gap-8 flex items-center justify-center mt-2 p-4">
        <ChevronLeftIcon
          size={30}
          strokeWidth={4}
          onClick={handleback}
          className=" cursor-pointer bg-[hsl(0,10%,70%)] hover:bg-[hsl(10,0%,50%)] px-1"
        />

        <Home
          size={30}
          strokeWidth={4}
          onClick={handlehome}
          className="cursor-pointer bg-[hsl(0,10%,70%)] hover:bg-[hsl(10,0%,50%)] px-1"
        />

        <ChevronRightIcon
          size={30}
          strokeWidth={4}
          onClick={handlenext}
          className=" cursor-pointer bg-[hsl(0,10%,70%)] hover:bg-[hsl(10,0%,50%)] px-1"
        />
      </div>
    </>
  );
}

export default ColourPicker;

// const colors = ['red', 'blue', 'green'];

// colors.map(color => (
//   <button>{color}</button>
// ));
