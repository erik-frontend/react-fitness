import React from 'react'
import { logo, cart } from '../../assets/img/index';

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header-fixed">
                    <div className="header-navbar container">
                        <a href="" className="header-logo"><img src={logo} alt="logo" /></a>
                        
                        <div className="header-block">
                            <a href="" className="cart">
                                <img src={cart} alt="cart" />
                            </a>
                            <div className="acuont">
                                <a href="" className="link" id="login">Log In</a>
                                <a href="" className="link" id="singup">Sign Up</a>
                            </div>
                        </div>
                        <div className="burger"></div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header