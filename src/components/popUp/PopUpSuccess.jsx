import React from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";

const PopUpSuccess = ({setIsOpen}) => {
    return (
        <>
            <div className="pop-up-success success">
                <FaRegCircleCheck className='icon-check'/>
                <span className="success-title">Success</span>
                <button className="success-btn" onClick={() => setIsOpen(false)}>Continue</button>
            </div>
        </>
    )
}

export default PopUpSuccess