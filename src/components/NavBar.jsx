import React from 'react';
import CardtWidget from './CartWidget';
import './NavBar.css';
import {Link} from 'react-router-dom';





const Navbar = ()=>{
    return(
      <>
      <nav className="navegacion">
            <input type="checkbox" id="check"/>
            <label for="check" className="checkbtn">
               <p> X </p>
            </label>
            <a className='logo' href="/">Tienda LyP</a>
            <ul className='ul'>
                <li><Link className='nav-item' to='/'>HOME</Link></li>
                <li><Link className='nav-item' to='/category/electronics'>ELECTRONICA</Link></li>
                <li><Link className='nav-item' to='/category/jewelery'>JOYAS</Link></li>
                <li><Link className='nav-item' to="/category/women's clothing " >PARA ELLAS</Link></li>
                <li> <Link className='nav-item' to="/category/men's clothing " >PARA ELLOS</Link></li>
                <li className="nav-item cartt"><CardtWidget/></li>
            </ul>
        </nav>
      {/*
      <nav className="navbar navbar-expand navbar-light bg-light border-3 border-bottom border-secondar navbar-light bg-light">
      
  <div className="container-fluid">
    <a className='logo' href="/">Tienda LyP</a>
    
    <div>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className='nav-item' to='/'>HOME</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-item' to='/category/electronics'>ELECTRONICA</Link>
        </li>
        <li className="nav-item">
         <Link className='nav-item' to='/category/jewelery'>JOYAS</Link>
        </li>
        <li class="nav-item">
         <Link className='nav-item' to="/category/women's clothing " >PARA ELLAS</Link>
        </li>
        <li class="nav-item">
           <Link className='nav-item' to="/category/men's clothing " >PARA ELLAS</Link>
        </li>
        <li className="nav-item cartt"><CardtWidget/></li>
      </ul>
    </div>
  </div>
</nav>*/}
</>

    );
}
export default Navbar
