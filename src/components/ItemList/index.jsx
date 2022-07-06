import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Item from '../Item';
import './estilos.css';


const ItemList = ({products}) => { 
  return (
    <div className='container d-flex h-100 justify-content-center align-item-center'>
   <div className='row row-cols-1 row-cols-md-3'>
    { products.map(producto => {
    return < Item product={producto} key={producto.id}/> 
   })}

  </div>
  </div>
  ) 
  };



export default ItemList