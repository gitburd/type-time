import React from 'react'
import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink className="navlink" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/">Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
