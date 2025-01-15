import React, { useState } from 'react'
import { logo, cart } from '../../assets/img/index';
import Nav from '../nav/Nav';

const MainHeader = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <header className="header">
                <div className="header-fixed">
                    <div className="header-navbar container">
                        <a href="" className="header-logo"><img src={logo} alt="logo" /></a>
                        <Nav
                            isMenuOpen={isMenuOpen}
                        />
                        <div className="header-block">
                            <a href="" className="cart">
                                <img src={cart} alt="cart" />
                            </a>
                            <div className="acuont">
                                <a href="" className="link" id="login">Log In</a>
                                <a href="" className="link" id="singup">Sign Up</a>
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