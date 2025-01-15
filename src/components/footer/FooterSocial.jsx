import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import { LiaLinkedin } from 'react-icons/lia';

const FooterSocial = () => {

    const socialLinks = [
        {
            href: "/",
            img: FaFacebookF,
            alt: "facebook",
        },
        {
            href: "/",
            img: FaLinkedinIn,
            alt: "linkeddin",
        },
        {
            href: "/",
            img: FaYoutube,
            alt: "youtube",
        },
        {
            href: "/",
            img: FaInstagram,
            alt: "instagram",
        },
    ]

    return (
        <>
            <div className="social">
                {socialLinks.map((link, index) => (
                    <a href={link.href} className="social-link" key={index}>
                    <link.img/>    
                </a>
                ))}
                
            </div>
        </>
    )
}

export default FooterSocial