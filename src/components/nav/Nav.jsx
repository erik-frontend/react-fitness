import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navItems } from '../../data/navItems'

const Nav = ({ isMenuOpen }) => {

    const location = useLocation()
    // console.log(location);

    return (
        <>
            <nav className={isMenuOpen ? "nav active" : "nav"}>
                <ul className="menu">
                    {navItems.map((item, index) => (
                        <li className="item" key={index}>
                            <Link className={`link ${location.pathname === item.path ? "active" : ""}` } to={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Nav