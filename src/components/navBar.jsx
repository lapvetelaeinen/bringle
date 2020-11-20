import React from 'react';
import { NavLink } from "react-router-dom";
import './navBar.css';

const NavBar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="#">Bringle</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/new-delivery">Registrera leverans</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/add-person">Lägg till kund</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/stock">Saldo</NavLink>
      </li>

    </ul>
  </div>
</nav>
    )
}
 
export default NavBar;