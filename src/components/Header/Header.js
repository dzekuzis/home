import React from 'react';
import { Link } from "react-router-dom"
import './Header.css';

const Header = () => (
  <div className="Header" >
   <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <img src='https://icon-library.com/images/bmw-icon-png/bmw-icon-png-6.jpg' alt='' width='70' height='50' margin='0px'/>
    <Link className="nav-link" to="/home"><h3>BMW</h3></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/features">Features</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
  </div>
);


export default Header;
