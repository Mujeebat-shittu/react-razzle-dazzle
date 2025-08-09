import { Link } from "react-router-dom";
import { useState } from "react";
import { MenuIcon } from "lucide-react";


const NavBar = function () {
    const [dropDown, setDropDown] = useState(false)
    const toggleMenu = function () {
        setDropDown(prev => !prev)
    }
    return (
        <>

        
        <nav className="no-underline text-[hsl(0,20%,93%)] sm:text-[hsl(0,10%,50%)]">
        <div className="flex cursor-pointer ">
            <MenuIcon
            className="sm:block sm:fixed sm:top-12 sm:right-12 text-white text-[2rem]"
             id="icon" onClick={toggleMenu}/>
        </div>

        <div className="p-4 flex relative flex-col gap-4 right-4 sm:bg-[hsl(0,0%,93%)] sm:absolute sm:top-28 sm:left-12 sm:right-0 sm:flex-col sm:text-center sm:items-center sm:justify-center sm:gap-4 sm:overflow-hidden sm:h-[450px] sm:w-auto  "
        style={{
            display: dropDown ? 'flex' : 'none'
             }}>
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
    )

}

export default NavBar