import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import MainHeader from '../header/MainHeader'
import Footer from '../footer/Footer'
import Header from '../header/Header'

export const Layout = () => {
    const location = useLocation()
    const isHomePage = location.pathname === "/"
    const isAboutUsPage = location.pathname === "/about-us"

    return (
        <>
            {!(isHomePage || isAboutUsPage) && <MainHeader/>}
            <main><Outlet /></main>
            <Footer />
        </>
    )
}
