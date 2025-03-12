import React, { useState } from 'react'
import "./footer.scss"
import { footerLogo } from '../../assets/img'
import FooterSocial from './FooterSocial'
import { Link } from 'react-router-dom'
import ScrollBtn from '../../ScrollBtn/ScrollBtn'

const Footer = () => {

    const [arrowShow, setArrowShow] = useState(false)

   


    const menuItems = [
        {
            href: "#",
            label: "Terms of Service"
        },
        {
            href: "#",
            label: "Privacy Policy"
        }
    ]

    const footerMenu = [
        {
            href: "/program",
            label: "Program"
        },
        {
            href: "/payment",
            label: "Payment"
        },
        {
            href: "/about-us",
            label: "About us"
        },
    ]

    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-top">
                        <div className="footer-top-block">
                            <span className="footer-logo">
                                <img src={footerLogo} alt="logo" /></span>
                            <p className="footer-text">Get fit, stay healthy, and live life on their terms without fitness being an
                                obstacle.</p>
                        </div>
                        <div className="footer-top-block">
                            <ul className="footer-menu">
                                {footerMenu.map((item, index) => (
                                    <li className="footer-item" key={index}>
                                    <Link to={item.href} className="footer-link">{item.label}</Link>
                                </li>
                                ))}
                            </ul>
                        </div>
                        <div className="footer-top-block">
                            <form action="" className="footer-form">
                                <span className="form-title">Newsletter</span>
                                <div className="footer-form-block">
                                    <input type="email" placeholder="Your email here" />
                                    <button className="btn form-btn">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <span className="footer-copyright">© {new Date().getFullYear()} Nguli® Global Inc.</span>
                        <FooterSocial />
                        <ul className="footer-bottom-menu">
                            {menuItems.map((item, index) => (
                                <li className="footer-bottom-item" key={index}>
                                    <a target='_blank' href={item.href} className="footer-bottom-link">{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </footer>
            <ScrollBtn arrowShow={arrowShow} setArrowShow={setArrowShow}/>
        </>
    )
}

export default Footer