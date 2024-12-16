import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-top">
                        <div className="footer-top-block">
                            <span className="footer-logo">
                                <img src="img/footer-logo.svg" alt="logo"/></span>
                            <p className="footer-text">Get fit, stay healthy, and live life on their terms without fitness being an
                                obstacle.</p>
                        </div>
                        <div className="footer-top-block">
                            <ul className="footer-menu">
                                <li className="footer-item">
                                    <a href="program.html" className="footer-link">program</a>
                                </li>
                                <li className="footer-item">
                                    <a href="payment.html" className="footer-link">Payment</a>
                                </li>
                                <li className="footer-item">
                                    <a href="about-us.html" className="footer-link">about us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-top-block">
                            <form action="" className="footer-form">
                                <span className="form-title">Newsletter</span>
                                <div className="footer-form-block">
                                    <input type="email" placeholder="Your email here"/>
                                        <button className="btn form-btn">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <span className="footer-copyright">© 2023 Nguli® Global Inc.</span>
                        <div className="social">
                            <a href="" className="social-link">
                                <img src="img/fb.svg" alt="icon"/>
                            </a>
                            <a href="" className="social-link">
                                <img src="img/in.svg" alt="icon"/>
                            </a>
                            <a href="" className="social-link">
                                <img src="img/tw.svg" alt="icon"/>
                            </a>
                            <a href="" className="social-link">
                                <img src="img/yt.svg" alt="icon"/>
                            </a>
                            <a href="" className="social-link">
                                <img src="img/insta.svg" alt="icon"/>
                            </a>
                        </div>
                        <ul className="footer-bottom-menu">
                            <li className="footer-bottom-item">
                                <a href="" className="footer-bottom-link">Terms of Service</a>
                            </li>
                            <li className="footer-bottom-item">
                                <a href="" className="footer-bottom-link">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer