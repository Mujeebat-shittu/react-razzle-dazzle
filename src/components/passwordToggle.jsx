import { useState } from "react";
import '../styles/pt.css'

function PasswordToggle () {
    const [showPassword, setShowPassword]= useState(false);
    const toggleMenu = () => {
        setShowPassword(prev => !prev)
    } 

    return (
        <>
        <div className="pt">
        <input 
        type={showPassword ? 'text' : 'password'}
        placeholder="Input password"
        /> <br />
        <button className="pt-button" onClick={toggleMenu}>Password {showPassword ? 'Visible' : 'Hidden'}</button>
        </div>
        </>
    )

}

export default PasswordToggle;