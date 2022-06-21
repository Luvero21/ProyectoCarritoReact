import React from 'react';
import CardtWidget from './CartWidget';
import './NavBar.css';
import logo from '../assets/logo.png';


const Navbar = ()=>{
    return(
       <nav>
        <input type="checkbox" id="check"></input>
        <label for="check" className='checkbtn'>
        <i className='fas fa-bars'></i>
        </label>
        <img src={logo} width='80px' heigth='130px' alt="logo" className="logo"/>
        <ul>
            <li><a href="#active">Inicio</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#ofertas">Ofertas</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <CardtWidget/>
        </ul>
    </nav>
 
    );
}
export default Navbar
