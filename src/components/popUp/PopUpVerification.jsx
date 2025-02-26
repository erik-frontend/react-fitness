import React from 'react'
import { popUpLogo } from "../../assets/img";

const PopUpVerification = ({ setIsOpen, setPopupState }) => {
    return (
        <>
            <div className="pop-up-block pop-up-verification custom-popup-content">
                <span className="logo"><img src={popUpLogo} alt="logo" /></span>
                <h3 className="title">Enter your verification code</h3>
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
                    <button className="form-btn" type="submit" onClick={(e) => {
                        e.preventDefault();
                        setPopupState("newPassword");
                    }}>Next</button>
                    <button className="form-btn-reset" type="reset">Resend</button>
                </form>
                <button className="custom-popup-close" onClick={() => setIsOpen(false)}></button>
            </div>
        </>
    )
}

export default PopUpVerification