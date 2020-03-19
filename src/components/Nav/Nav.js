import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav">
            <div className="nav-btns-container">
                <NavLink className="nav-btn" to="/">Home</NavLink>
                <NavLink className="nav-btn" to="/projects">Projects</NavLink>
                <NavLink className="nav-btn" to="/">???</NavLink>
            </div>
        </div>
    );
}

export default Nav;