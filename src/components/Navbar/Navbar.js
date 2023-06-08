import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.png'
function Navbar() {

    const [path, setPath] = useState("");
    let isLogined = false;
    useEffect(() => {
        setPath(window.location.pathname)
    }, [window.location.pathname])

    return (
        <nav>
            <img src={logo} style={{ width: '3vw', minWidth: '3px' }} />
            <div className="navigation">
                <ul>
                    {!isLogined &&
                        <>
                            <li><a className={(path === "/") ? "active" : ""} href="/">Home</a></li>
                            <li><a className={(path === "/aboutpage") ? "active" : ""} href="/aboutpage">About</a></li>
                            <li><a className={(path === "/loginpage") ? "active" : ""} href="/loginpage">Login</a></li>
                            <li><a className={(path === "/signuppage") ? "active" : ""} href="/signuppage">Sign Up</a></li>
                        </>}
                    {isLogined &&
                        <>
                            <li><a className={(path === "/") ? "active" : ""} href="/">Home</a></li>
                            <li><a className={(path === "/aboutpage") ? "active" : ""} href="/aboutpage">About</a></li>
                            <li><a className={(path === "/coursespage") ? "active" : ""} href="/coursespage">Courses</a></li>
                            <li><a className={(path === "/profile") ? "active" : ""} href="/profile">Profile</a></li>
                            <li><a className={(path === "/contact") ? "active" : ""} href="/contact">Contact</a></li>
                        </>}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

