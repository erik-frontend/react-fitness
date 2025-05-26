import React, { useEffect, useState } from 'react'
import { logo, cart } from '../../assets/img/index';
import Nav from '../nav/Nav'
import { IoIosMenu, IoIosClose } from "react-icons/io";
import "./header.scss"
import PopUp from '../popUp/PopUp';
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

const Header = () => {

    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [popupState, setPopupState] = useState("signUp");

    useEffect(() => {
        setIsOpen(false);
        setIsMenuOpen(false);
        window.scrollTo(0, 0)
    }, [location.pathname]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const togglePopUp = (e, state, page) => {
        if (e && e.preventDefault) e.preventDefault();

        setPopupState(page);
        setIsOpen(state);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('hiden');
        } else {
            document.body.classList.remove('hiden');
        }

        return () => {
            document.body.classList.remove('hiden');
        };
    }, [isMenuOpen]);

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
                        <Link to="/" className="header-logo"><img src={logo} alt="logo" /></Link>
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