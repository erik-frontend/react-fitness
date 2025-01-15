import React from 'react'

const PopUp = () => {
  return (
    <>
        <div className="pop-up">

<div className="pop-up-block pop-up-signup">
    <span className="logo"><img src="img/logo-popup.svg" alt="logo"/></span>
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
        <label for="">
            Email
            <input type="email" id="" placeholder="Enter your email"/>
        </label>
        <button className="form-btn">Continue</button>
        <div className="block-action">
            <input type="checkbox" id="agree"/>
            <label for="agree">
                I agree to Claraa <a href="">Terms of Use</a> and <a href="">Privacy Policy</a>
            </label>
        </div>
        <span className="form-login">Already have an account?<a href="">Log In</a></span>
    </form>
    <button className="pop-up-close"></button>
</div>
<div className="pop-up-block pop-up-login">
    <span className="logo"><img src="img/logo-popup.svg" alt="logo"/></span>
    <h3 className="title">Hey there, welome back!</h3>
    <form className="form">
        <label for="">
            Email
            <input type="email" id="" placeholder="Enter your email"/>
        </label>
        <label className="label-password" for="">
            Password
            <input type="password" id="password" placeholder="Enter your password"/>
            <i className="eye-icon" id="tooglePassword"></i>
        </label>
        <button className="form-btn">Login</button>
        <a href="" className="pop-up-login-link">Forgot Password?</a>
    </form>
    <button className="pop-up-close"></button>
</div>
<div className="pop-up-block pop-up-confirm">
    <span className="logo"><img src="img/logo-popup.svg" alt="logo"/></span>
    <h3 className="title">Let’s confirm it’s really you</h3>
    <span className="subtitle">Help us secure your account. Please complete the verifications below</span>
    <div className="form-action">
        <input type="checkbox" id="code"/>
        <label for="code">Get the code by email at</label>
        <span>joseph••••@gm•••.com</span>
    </div>
    <div className="form-action">
        <input type="checkbox" id="number"/>
        <label for="number">Get the code by text message </label>
        <span>(SM) at +1 21 726 918</span>
    </div>
    <button className="form-btn btn-confirm">Continue</button>
    <button className="pop-up-close"></button>
</div>
<div className="pop-up-block pop-up-sequrity">
    <span className="logo"><img src="img/logo-popup.svg" alt="logo"/></span>
    <h3 className="title">Enter your security code</h3>
    <span className="subtitle">We texted your code to tranm••••••••••••@gm•••.com</span>
    <form className="form-sequrity">
        <div className="sequrity-block">
            <input type="password" name="" id="" required maxlength="1"/>
            <input type="password" name="" id="" required maxlength="1"/>
            <input type="password" name="" id="" required maxlength="1"/>
            <input type="password" name="" id="" required maxlength="1"/>
            <input type="password" name="" id="" required maxlength="1"/>
            <input type="text" name="" id="" required maxlength="1"/>
        </div>
        <button className="form-btn" type="submit">Continue</button>
    </form>

    <button className="pop-up-close"></button>
</div>
<div className="pop-up-block pop-up-reset">
    <span className="logo"><img src="img/logo-popup.svg" alt="logo"/></span>
    <h3 className="title">Reset Password</h3>
    <span className="subtitle">Recover your account password</span>
    <form className="form-reset">
        <div className="reset-block">
            <label for="resetemail">Email</label>
            <input type="email" name="" id="resetemail" required placeholder="Enter your email"/>
        </div>
        <button className="form-btn" type="submit">Next</button>
    </form>

    <button className="pop-up-close"></button>
</div>
<div className="pop-up-block pop-up-verification">
    <span className="logo"><img src="img/logo-popup.svg" alt="logo"/></span>
    <h3 className="title">Enter your verification code</h3>
    <span className="subtitle">We texted your code to tranm••••••••••••@gm•••.com</span>
    <form className="form-sequrity">
        <div className="sequrity-block">
            <input type="password" name="" id="" required maxlength="1"/>
            <input type="password" name="" id="" required maxlength="1"/>
            <input type="password" name="" id="" required maxlength="1"/>
            <input type="password" name="" id="" required maxlength="1"/>
            <input type="password" name="" id="" required maxlength="1"/>
            <input type="text" name="" id="" required maxlength="1"/>
        </div>
        <button className="form-btn" type="submit">Next</button>
        <button className="form-btn-reset" type="reset">Resend</button>
    </form>

    <button className="pop-up-close"></button>
</div>
<div className="pop-up-block pop-up-newpassword">
    <span className="logo"><img src="img/logo-popup.svg" alt="logo"/></span>
    <h3 className="title">Create New Password</h3>
    <form className="form">
        <label className="label-password" for="">
            Password
            <input type="password" id="password-one" placeholder="Enter your password"/>
            <i className="eye-icon" id="tooglePassword-one"></i>
        </label>
        <label className="label-password" for="">
            New Password
            <input type="password" id="new-password" placeholder="Enter your password"/>
            <i className="eye-icon" id="tooglenewPassword"></i>
        </label>
        <button className="form-btn">Login</button>
    </form>
    <button className="pop-up-close"></button>
</div>
<div className="pop-up-success success">
    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="tick-circle">
            <g id="vuesax/outline/tick-circle">
                <g id="tick-circle_2">
                    <circle id="BG" opacity="0.12" cx="80.5" cy="79.5" r="62.5" fill="#00C566" />
                    <path id="Vector"
                        d="M80.5714 150.857C41.1694 150.857 9.14282 118.831 9.14282 79.4286C9.14282 40.0266 41.1694 8 80.5714 8C119.973 8 152 40.0266 152 79.4286C152 118.831 119.973 150.857 80.5714 150.857ZM80.5714 17.9668C46.6844 17.9668 19.1096 45.5415 19.1096 79.4286C19.1096 113.316 46.6844 140.89 80.5714 140.89C114.458 140.89 142.033 113.316 142.033 79.4286C142.033 45.5415 114.458 17.9668 80.5714 17.9668Z"
                        fill="#00C566" />
                    <path id="Vector_2"
                        d="M70.5333 103.867C69.2 103.867 67.9334 103.333 67 102.4L48.1333 83.5333C46.2 81.5999 46.2 78.3999 48.1333 76.4666C50.0667 74.5333 53.2667 74.5333 55.2 76.4666L70.5333 91.7999L104.8 57.5333C106.733 55.5999 109.933 55.5999 111.867 57.5333C113.8 59.4666 113.8 62.6666 111.867 64.5999L74.0667 102.4C73.1334 103.333 71.8667 103.867 70.5333 103.867Z"
                        fill="#00C566" />
                </g>
            </g>
        </g>
    </svg>
    <span className="success-title">Success!</span>
    <p className="success-text">Your password is succesfully created</p>
    <button className="success-btn">Continue</button>
</div>
<div className="pop-up-success pop-up-welcome">
    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="tick-circle">
            <g id="vuesax/outline/tick-circle">
                <g id="tick-circle_2">
                    <circle id="BG" opacity="0.12" cx="80.5" cy="79.5" r="62.5" fill="#00C566" />
                    <path id="Vector"
                        d="M80.5714 150.857C41.1694 150.857 9.14282 118.831 9.14282 79.4286C9.14282 40.0266 41.1694 8 80.5714 8C119.973 8 152 40.0266 152 79.4286C152 118.831 119.973 150.857 80.5714 150.857ZM80.5714 17.9668C46.6844 17.9668 19.1096 45.5415 19.1096 79.4286C19.1096 113.316 46.6844 140.89 80.5714 140.89C114.458 140.89 142.033 113.316 142.033 79.4286C142.033 45.5415 114.458 17.9668 80.5714 17.9668Z"
                        fill="#00C566" />
                    <path id="Vector_2"
                        d="M70.5333 103.867C69.2 103.867 67.9334 103.333 67 102.4L48.1333 83.5333C46.2 81.5999 46.2 78.3999 48.1333 76.4666C50.0667 74.5333 53.2667 74.5333 55.2 76.4666L70.5333 91.7999L104.8 57.5333C106.733 55.5999 109.933 55.5999 111.867 57.5333C113.8 59.4666 113.8 62.6666 111.867 64.5999L74.0667 102.4C73.1334 103.333 71.8667 103.867 70.5333 103.867Z"
                        fill="#00C566" />
                </g>
            </g>
        </g>
    </svg>
    <span className="success-title">Welcome</span>
    <button className="success-btn">Continue</button>
</div>
</div>
    </>
  )
}

export default PopUp