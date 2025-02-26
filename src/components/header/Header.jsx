import React, { useState } from 'react'
import { logo, cart } from '../../assets/img/index';
import Nav from '../nav/Nav'
import { IoIosMenu, IoIosClose } from "react-icons/io";
import "./header.scss"
import PopUp from '../popUp/PopUp';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [popupState, setPopupState] = useState("signUp");

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const togglePopUp = (e, state, page) => {
        if (e && e.preventDefault) e.preventDefault();

        setPopupState(page);
        setIsOpen(state);
    };

    // console.log(PopUp);


    return (
        <>
            <PopUp togglePopUp={togglePopUp}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                popupState={popupState}
                setPopupState={setPopupState} />
            <header className="header">
                <div className="header-fixed">
                    <div className="header-navbar container">
                        <a href="" className="header-logo"><img src={logo} alt="logo" /></a>
                        <Nav
                            isMenuOpen={isMenuOpen}
                        />
                        <div className="header-block">
                            <div className="cart">
                                <img src={cart} alt="cart" />
                            </div>
                            <div className="acuont">
                                <a href="#" className="link" id="login" onClick={(e) => togglePopUp(e, true, "login")}>Log In</a>
                                <a href="#" className="link" id="signup" onClick={(e) => togglePopUp(e, true, "signUp")}>Sign Up</a>
                            </div>
                        </div>
                        <div className="burger" onClick={toggleMenu}>
                            {isMenuOpen ? <IoIosClose /> : <IoIosMenu />}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header