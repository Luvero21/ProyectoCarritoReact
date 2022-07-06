import React from 'react';
import CardtWidget from './CartWidget';
import './NavBar.css';
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


const Navbar = ()=>{
    return(
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
      <div className="container">
        <img src={logo} width='80px' heigth='130px' alt="logo" className="logo"/>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="mx-auto"></div>
          <ul className="navbar-nav">
            <li className="nav-item"><Link to='/'>HOME</Link></li>
            <li className="nav-item"><Link to="/category/electronics">ELECTRONICA</Link></li>
            <li className="nav-item"><Link to="/category/jewelery">JOYAS</Link></li>
            <li className="nav-item"><Link to="/category/women's clothing">PRENDAS PARA ELLAS</Link></li>
            <li className="nav-item"><Link to="/category/men's clothing">PRENDAS PARA ELLOS</Link></li>
            <CardtWidget/>
          </ul>
        </div>
      </div>
    </nav>

    );
}
export default Navbar
