import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    const navItems = [
        {
            name:"Home",
            path:"/"
        },
        {
            name:"Programs",
            path:"/programs"
        },
        {
            name:"Trainers",
            path:"/trainers"
        },
        {
            name:"Membership",
            path:"/merbership"
        },
        {
            name:"Contact",
            path:"/contact"
        },
    ]
    return (
        <>
            <nav className="nav">
                <ul className="menu">

                    {navItems.map((item, index) => (
                        <li className="item" key={index}>
                            <Link to={item.path}/>{item.name}<Link/>
                    </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Nav