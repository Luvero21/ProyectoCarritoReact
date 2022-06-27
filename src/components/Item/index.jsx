import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ItemCount from '../ItemCount';



const Item = ({product}) => {
  const {title, price, description,image,id,}=product
 
  return (
    
   <div className="card">
  <img src={image} className="card-img-top" style={{width:'50%',height:'50%'}} alt={title}/>
  <div className="card-body">{id}
    <h5 className="card-title">{title}</h5>
    <h4 className='card-price'>Precio:{price}</h4>
    <p className="card-text">{description}</p>
    <a href='img' className="btn btn-primary">VER MAS</a>
    <ItemCount />
  </div>
  </div>
  )
}


export default Item