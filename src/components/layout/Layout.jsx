import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import MainHeader from '../header/MainHeader'
import Footer from '../footer/Footer'

export const Layout = () => {

    const location = useLocation()
    const isHomePage = location.pathname === "/"

    return (
        <>
            {!isHomePage && <MainHeader/>}
            <Outlet />
            <Footer />
        </>
    )
}
