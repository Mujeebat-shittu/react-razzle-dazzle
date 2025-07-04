import { useState } from "react"
import '../styles/tab.css'

function Tab () {
    const [isActive, setIsActive]= useState('Home')
    
        
    
    return(
        <>
        <div className="tab-container">
            {isActive === 'Home' && 
            <p className="tab-text"> This is the Home Menu</p>}
            {isActive === 'About' && 
            <p className="tab-text">This is the About Menu</p>}
            {isActive === 'Contact' && 
            <p className="tab-text">This is the Contact Menu</p>}
            <button 
            className={isActive === 'Home' ? 'tab-button active' : 'tab-button'} 
            onClick={() => setIsActive('Home')}>Home</button>            
            <button 
            className={isActive === 'About' ? 'tab-button active' : 'tab-button'} 
            onClick={() => setIsActive('About')}>About</button>   
            <button 
            className={isActive === 'Contact' ? 'tab-button active' : 'tab-button'} 
            onClick={() => setIsActive('Contact')}>Contact</button>           
        </div>
        </>
    )

}

export default Tab