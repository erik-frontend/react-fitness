import React, { useState } from 'react'
import { logoBlue, cartBlack } from '../../assets/img/index';
import Nav from '../nav/Nav';
import { IoIosMenu, IoIosClose } from "react-icons/io";
import PopUp from '../popUp/PopUp';
import { Link } from 'react-router-dom';

const MainHeader = () => {

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

    return (
        <>
            <PopUp
                togglePopUp={togglePopUp}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                popupState={popupState}
                setPopupState={setPopupState} />
            <header className="header">
                <div className="header-fixed">
                    <div className="header-navbar container">
                        <Link to="/" className="header-logo"><img src={logoBlue} alt="logo" /></Link>
                        <Nav
                            isMenuOpen={isMenuOpen}
                        />
                        <div className="header-block">
                            <a href="" className="cart">
                                <img src={cartBlack} alt="cart" />
                            </a>
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

export default MainHeader