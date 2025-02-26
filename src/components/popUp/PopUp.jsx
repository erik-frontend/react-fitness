import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import PopUpSignUp from "./PopUpSignUp";
import PopUpLogIn from "./PopUpLogIn";
import PopUpConfirm from "./PopUpConfirm";
import PopUpSequrity from "./PopUpSequrity";
import PopUpReset from "./PopUpReset";
import PopUpVerification from "./PopUpVerification";
import PopUpNewPassword from "./PopUpNewPassword";
import PopUpSuccess from "./PopUpSuccess";
import PopUpWelcome from "./PopUpWelcome";
import "./popup.scss";

const PopUp = ({ isOpen, setIsOpen, popupState, setPopupState }) => {

    const POPUP_COMPONENTS = {
        signUp: PopUpSignUp,
        login: PopUpLogIn,
        confirm: PopUpConfirm,
        sequrity: PopUpSequrity,
        resetPassword: PopUpReset,
        verification: PopUpVerification,
        newPassword: PopUpNewPassword,
        success: PopUpSuccess,
        welcome: PopUpWelcome,
    };

    const CurrentPopUp = POPUP_COMPONENTS[popupState];

    return (
        <>
            <Popup
                open={isOpen}
                onClose={() => setIsOpen(false)} // Используем setIsOpen напрямую
                modal
                nested
                closeOnDocumentClick
                contentStyle={{
                    width: "auto",
                }}
                overlayStyle={{
                    background: "rgba(9, 8, 13, 0.12)",
                    backdropFilter: "blur(10px)",
                }}
            >
                <div className={`custom-popup ${isOpen ? "active" : ""}`}>
                    {CurrentPopUp && <CurrentPopUp setIsOpen={setIsOpen} setPopupState={setPopupState}/>}
                </div>
            </Popup>
        </>
    );
};

export default PopUp;