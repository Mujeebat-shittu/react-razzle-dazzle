import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { ChevronRightIcon } from "lucide-react";
import { Home } from "lucide-react";

function Tab() {
  const [isActive, setIsActive] = useState("Home");

  const navigate = useNavigate();
  const handlenext = function () {
    navigate("/accordion");
  };

  const handleback = function () {
    navigate("/quote");
  };

  const handlehome = function () {
    navigate("/");
  };

  return (
    <>
      <div className="tab-container font-['Space_Grotesk'] font-semibold ">
        <div className="flex items-center justify-center my-4 text-xl">
          {isActive === "Home" && (
            <p className="text-2xl my-4 mx-auto bg-[hsl(0,0%,45%)] animate-bounce p-4">
              {" "}
              This is the Home Menu
            </p>
          )}
          {isActive === "About" && (
            <p className="text-2xl my-4 mx-auto bg-[hsl(0,0%,45%)] decorate-wavy animate-pulse p-4">
              This is the About Menu
            </p>
          )}
          {isActive === "Contact" && (
            <p className="text-2xl my-4 mx-auto bg-[hsl(0,0%,45%)] animate-bounce p-4">
              This is the Contact Menu
            </p>
          )}
        </div>

        <div className="gap-4 mx-4">
          <button
            className={
              isActive === "Home"
                ? "bg-[#333] text-white font-bold  cursor-pointer rounded-[4px] py-2 px-4 mx-4"
                : "py-2 px-4 mr-[10px] border-none bg-[#eee] cursor-pointer font-normal text-[#333] "
            }
            onClick={() => setIsActive("Home")}
          >
            Home
          </button>
          <button
            className={
              isActive === "About"
                ? "bg-[#333] text-white font-bold cursor-pointer rounded-[4px] py-2 px-4 mr-4 ml-2"
                : "py-2 px-4 mr-[10px] border-none bg-[#eee] cursor-pointer font-normal text-[#333]"
            }
            onClick={() => setIsActive("About")}
          >
            About
          </button>
          <button
            className={
              isActive === "Contact"
                ? "bg-[#333] text-white font-bold cursor-pointer rounded-[4px] py-2 px-4 mx-auto "
                : "py-2 px-4 mr-[10px] border-none bg-[#eee] cursor-pointer font-normal text-[#333]"
            }
            onClick={() => setIsActive("Contact")}
          >
            Contact
          </button>
        </div>
      </div>

      <div className="gap-8 flex items-center justify-center mt-2 p-4">
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
    </>
  );
}

export default Tab;
