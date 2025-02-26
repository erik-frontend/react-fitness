import React from "react";
import { popUpLogo } from "../../assets/img";

const PopUpConfirm = ({ setIsOpen, setPopupState }) => {
    const email = "joseph••••@gm•••.com";
    const phoneNumber = "+1 21 726 918";

    return (
        <div className="pop-up-block pop-up-confirm custom-popup-content">
            <span className="logo">
                <img src={popUpLogo} alt="logo" />
            </span>
            <h3 className="title">Let’s confirm it’s really you</h3>
            <span className="subtitle">
                Help us secure your account. Please complete the verifications below
            </span>
            <div className="form-action">
                <input type="checkbox" id="code" />
                <label htmlFor="code">Get the code by email at</label>
                <span>{email}</span>
            </div>
            <div className="form-action">
                <input type="checkbox" id="number" />
                <label htmlFor="number">Get the code by text message</label>
                <span>(SM) at {phoneNumber}</span>
            </div>
            <button
                className="form-btn btn-confirm"
                onClick={(e) => {
                    e.preventDefault();
                    setPopupState("verification"); 
                }}
            >
                Continue
            </button>

            <button className="custom-popup-close" onClick={() => setIsOpen(false)}></button>

        </div>
    );
};

export default PopUpConfirm;