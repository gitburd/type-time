import React from 'react'
import { useSelector, shallowEqual } from 'react-redux';
import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = ({ toggleShowSettings }) => {
    const { store } = useSelector(state => ({
        store: state
    }), shallowEqual);

    return (
        <nav>
            <ul>
                <li>
                    <NavLink className="navlink" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/history">History</NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/">Logout</NavLink>
                </li>
                <li id="settings-icon" onClick={toggleShowSettings}>⚙️</li>
            </ul>
        </nav>
    )
}

export default Navbar
