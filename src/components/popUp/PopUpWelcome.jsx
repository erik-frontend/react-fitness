import React from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";

const PopUpWelcome = ({setIsOpen}) => {
    return (
        <>
            <div className="pop-up-success pop-up-welcome custom-popup-content">
                <FaRegCircleCheck className='icon-check'/>
                <span className="success-title">Welcome</span>
                <button className="success-btn" onClick={() => setIsOpen(false)}>Continue</button>
            </div>
        </>
    )
}

export default PopUpWelcome