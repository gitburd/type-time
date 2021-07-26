import React, { useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import Settings from '../tools/Settings';

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
                <li onClick={toggleShowSettings}>⚙️</li>
            </ul>
        </nav>
    )
}

export default Navbar
