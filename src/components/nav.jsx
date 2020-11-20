import React from 'react';
import { NavLink, Link } from "react-router-dom";
import './nav.css';

const Nav = () => {
    return (
        <nav className="mobile-nav">
            <div className="grid-container-nav">
                <NavLink className="nav-link-2" to="/add-person">Lägg till kund</NavLink>
                <NavLink className="nav-link-1" to="/new-delivery">Ny leverans</NavLink>
                <NavLink className="nav-link-3" to="/stock">Saldo</NavLink>
            </div>
        </nav>
    )
}
 
export default Nav;