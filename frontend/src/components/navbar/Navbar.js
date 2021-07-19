import React from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    const { store } = useSelector(state => ({
        store: state
    }), shallowEqual);

    // console.log(store)
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
