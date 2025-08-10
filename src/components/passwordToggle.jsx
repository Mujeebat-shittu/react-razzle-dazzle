import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { ChevronRightIcon } from "lucide-react";
import { Home } from "lucide-react";

function PasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);
  const toggleMenu = () => {
    setShowPassword((prev) => !prev);
  };

  const navigate = useNavigate();
  const handlenext = function () {
    navigate("/quote");
  };

  const handleback = function () {
    navigate("/modeToggle");
  };

  const handlehome = function () {
    navigate("/");
  };

  return (
    <>
      <div className="bg-[hsl(0,0%,35%)] rounded-4xl my-8 mx-auto flex flex-col items-center justify-center py-12 px-4 max-h-screen w-[300px]">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Input password"
          aria-label="input password"
          className="w-[170px] h-6 text-base rounded-2xl border-none px-[0.65rem] py-6 text-center bg-[hsl(0,0%,20%)] "
        />{" "}
        <br />
        <button
          className="bg-[hsl(0,0%,20%)] my-[0.5rem] mx-4 py-[0.7rem] px-8 border-none text-white text-base rounded-xl cursor-pointer "
          onClick={toggleMenu}
        >
          Password {showPassword ? "Visible" : "Hidden"}
        </button>
        <p className="mt-3 text-[hsl(0,0%,70%)] font-semibold text-center">
          Ps: write something in the input box to see it work
        </p>
      </div>

      <div className="gap-8 flex items-center justify-center mt-2 p-4">
        <ChevronLeftIcon
          size={30}
          strokeWidth={4}
          onClick={handleback}
          className=" cursor-pointer bg-[hsl(10,0%,50%)] hover:bg-[hsl(0,0%,35%)] px-1"
        />

        <Home
          size={30}
          strokeWidth={4}
          onClick={handlehome}
          className="cursor-pointer bg-[hsl(10,0%,50%)] hover:bg-[hsl(0,0%,35%)] px-1"
        />

        <ChevronRightIcon
          size={30}
          strokeWidth={4}
          onClick={handlenext}
          className=" cursor-pointer bg-[hsl(10,0%,50%)] hover:bg-[hsl(0,0%,35%)] px-1"
        />
      </div>
    </>
  );
}

export default PasswordToggle;
