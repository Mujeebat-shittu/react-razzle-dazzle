import { Link } from "react-router-dom";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

const NavBar = function () {
  const [dropDown, setDropDown] = useState(false);
  const toggleMenu = function () {
    setDropDown((prev) => !prev);
  };
  return (
    <>
      <nav className="no-underline text-[hsl(0,10%,50%)]">
        <div className="relative group flex cursor-pointer ">
          <MenuIcon
            size={40}
            className="static mx-auto my-44 top-4 right-8 flex items-center justify-center text-white text-[2rem]"
            onClick={toggleMenu}
          />

          <span
            className="absolute top-20 left-1/2 -translate-x-1/2 mb-3 
                       px-3 py-1 text-lg text-white bg-[hsl(0,0%,40%)] rounded 
                       opacity-0 group-hover:opacity-100 
                       transition-opacity duration-200 whitespace-nowrap"
          >
            Click on the icon to open or close the dropdown menu
          </span>
        </div>

        <div
          className="p-4 flex-col gap-4 top-20 right-0 bg-[hsl(0,0%,83%)] md:bg-none md:right-0 
          md:flex-col md:gap-4 md:overflow-hidden w-[300px] text-center md:absolute md:top-16 md:left-1/2 md:-translate-x-1/2 
           md:h-auto md:items-center md:justify-center"
          style={{
            display: dropDown ? "flex" : "none",
          }}
        >
          <Link to="/accordion">Accordion</Link>
          <Link to="/colourPicker">Colour Picker</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/modeToggle">Mode Toggle</Link>
          <Link to="/passwordToggle">Password Toggle</Link>
          <Link to="/quote">Quote</Link>
          <Link to="/tabs">Tab Switcher</Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
