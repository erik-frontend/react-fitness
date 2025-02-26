import React from 'react'

const PopUpReset = () => {
    return (
        <>
            <div className="pop-up-block pop-up-reset">
                <span className="logo"><img src="img/logo-popup.svg" alt="logo" /></span>
                <h3 className="title">Reset Password</h3>
                <span className="subtitle">Recover your account password</span>
                <form className="form-reset">
                    <div className="reset-block">
                        <label htmlFor="resetemail">Email</label>
                        <input type="email" id="resetemail" required placeholder="Enter your email" />
                    </div>
                    <button className="form-btn" type="submit" onClick={(e) => { e.preventDefault(); togglePopUp(true, "verification"); }}>Next</button>
                </form>
                <button className="pop-up-close"></button>
            </div>
        </>
    )
}

export default PopUpReset