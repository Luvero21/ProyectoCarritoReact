import React from 'react';
import './stylos.css';

//OBTIENE LOS DATOS DEL PRODUCTO
const ItemDetail = ({product}) => {

  return (
    <div>
        <h3 className='titulo'>{product.title}</h3>
        <img src={product.image} className='imge' alt={product.title}/>
        <div className='descrip'>
        <p>{product.description}</p>
        </div>

    </div>
  )
}

export default ItemDetail