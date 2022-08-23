import React from 'react';
import { Link, NavLink } from "react-router-dom"
import './Header.css';

const Header = () => (
  <div className="Header" >
   <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <img className='mImage' src='https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/automotive-life/nxm/logo2.png?imwidth=360'  alt='' width='70' height='50'/>
    <Link className="nav-link" to="/home"><img src='https://www.bmw-motorsport.com/etc.clientlibs/ds2-webcomponents/clientlibs/clientlib/resources/img/BMW_White_Logo.svg' alt='' width='70' height='40' margin='0px' padding='0px'></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/features">Features</NavLink>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
  </div>
);


export default Header;
