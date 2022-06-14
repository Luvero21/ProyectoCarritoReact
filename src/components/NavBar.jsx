import React from 'react';
import './NavBar.css';

const Navbar = ()=>{
    return(
       <nav>
        <input type="checkbox" id="check"></input>
        <label for="check" className='checkbtn'>
        <i className='fas fa-bars'></i>
        </label>
        <img src= "logo.png" alt= "" className="logo"/>
        <ul>
            <li><a href="#active">Inicio</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#ofertas">Ofertas</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    </nav>
 
    );
}
export default Navbar
