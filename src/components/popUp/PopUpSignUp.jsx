import React from 'react'
import { popUpLogo } from '../../assets/img'

const PopUpSignUp = ({ setIsOpen, setPopupState }) => {
    return (
        <>
            <div className="pop-up-block pop-up-signup custom-popup-content">
                <span className="logo"><img src={popUpLogo} alt="logo" /></span>
                <h3 className="title">Welcome to Work<span>out</span></h3>
                <ul className="contaniu-list">
                    <li className="google">
                        <button className="google-btn">Continue with Google</button>
                    </li>
                    <li className="apple">
                        <button className="apple-btn">Continue with Apple</button>
                    </li>
                </ul>
                <span className="other-method">Or Sign Up with</span>
                <form className="form">
                    <label>
                        Email
                        <input type="email" placeholder="Enter your email" required/>
                    </label>
                    <button className="form-btn" onClick={(e) => {
                            e.preventDefault();
                            setPopupState("success");
                        }}>Continue</button>
                    <div className="block-action">
                        <input type="checkbox" id="agree" />
                        <label htmlFor="agree">
                            I agree to Claraa <a href="">Terms of Use</a> and <a href="">Privacy Policy</a>
                        </label>
                    </div>
                    <span className="form-login">
                        Already have an account?
                        <a href="" onClick={(e) => {
                            e.preventDefault();
                            setPopupState("login");
                        }}>Log In</a>
                    </span>
                </form>
                <button className="custom-popup-close" onClick={() => setIsOpen(false)}></button>
            </div>
        </>
    )
}

export default PopUpSignUp