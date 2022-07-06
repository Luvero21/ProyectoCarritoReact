import React from 'react';
import './stylos.css';
import 'bootstrap/dist/css/bootstrap.css';
import ItemCount from '../ItemCount';
import { useState } from 'react';


//OBTIENE LOS DATOS DEL PRODUCTO
const ItemDetail = ({product}) => {
  product.stock= 15;

  const [cantidadAgregada, setCantidadAgregada]= useState(0);

  const Count = (cantidad) =>{
    setCantidadAgregada(cantidad)
  }
console.log(cantidadAgregada)

  

  return (
    <div className='contenedor'>
        <h3 className='titulo '>{product.title}</h3>
        <div className='contenedor1'>
        <img src={product.image} className='imge img-fluid' alt={product.title}/>
        </div>
        <p className='productoDes'>{product.description}</p>
        <ItemCount stock={product.stock} OnAdd={Count} />
    </div>
  )
};

export default ItemDetail