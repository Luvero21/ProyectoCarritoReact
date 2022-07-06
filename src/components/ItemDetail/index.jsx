import React from 'react';
import './stylos.css';
import 'bootstrap/dist/css/bootstrap.css';


//OBTIENE LOS DATOS DEL PRODUCTO
const ItemDetail = ({product}) => {

  return (
    <div className='contenedor'>
        <h3 className='titulo '>{product.title}</h3>
        <div className='contenedor1'>
        <img src={product.image} className='imge img-fluid' alt={product.title}/>
        </div>
        <p className='productoDes'>{product.description}</p>
      

    </div>
  )
};

export default ItemDetail