import React from 'react'
import { popUpLogo } from '../../assets/img'

const PopUpSequrity = () => {
    return (
        <>
            <div className="pop-up-block pop-up-sequrity custom-popup-content ">
                <span className="logo"><img src={popUpLogo} alt="logo" /></span>
                <h3 className="title">Enter your security code</h3>
                <span className="subtitle">We texted your code to tranm••••••••••••@gm•••.com</span>
                <form className="form-sequrity">
                    <div className="sequrity-block">
                        <input type="password" required maxLength="1" />
                        <input type="password" required maxLength="1" />
                        <input type="password" required maxLength="1" />
                        <input type="password" required maxLength="1" />
                        <input type="password" required maxLength="1" />
                        <input type="text" required maxLength="1" />
                    </div>
                    <button className="form-btn" type="submit" onClick={(e) => { e.preventDefault(); togglePopUp(true, "resetPassword"); }}>Continue</button>
                </form>
                <button className="pop-up-close"></button>
            </div>
        </>
    )
}

export default PopUpSequrity