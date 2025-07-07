import { Link } from "react-router-dom";
import { useState } from "react";
import '../styles/navbar.css'

const NavBar = function () {
    const [dropDown, setDropDown] = useState(false)
    const toggleMenu = function () {
        setDropDown(prev => !prev)
    }
    return (
        <>

        
        <nav>
        <div className="menuIcon">
            <i className="fa-solid fa-bars" id="icon"
            onClick={toggleMenu}></i>
        </div>

        <div className="links"
        style={{
            display: dropDown ? 'flex' : 'none'        }}>
        <Link to="/accordion">Accordion</Link>
        <Link to="/colourPicker">Colour Picker</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/modeToggle">Mode Toggle</Link>
        <Link to="/passwordToggle">Password Toggle</Link>
        <Link to="/quote">Quote</Link>
        <Link to="/tabs">Tab</Link>
        </div>

        
        </nav>
        </>
    )

}

export default NavBar