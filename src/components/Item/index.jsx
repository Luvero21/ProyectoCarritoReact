import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';



const Item = ({product}) => {
  const {title, price, description,image,id,}=product
  return (
    <>
     <div className="row row-cols-2 row-cols-md-3 g-4">
    <div className="col-md-3">
   <div className="card" style={{width: '18rem;'}} height={{width: '18rem;'}}>
  <img src={image} className="card-img-top" alt={title}/>
  <div className="card-body">{id}
    <h5 className="card-title">{title}</h5>
    <h4 className='card-price'>Precio:{price}</h4>
    <p className="card-text">{description}</p>
    <a href='img' className="btn btn-primary">VER MAS</a>
  </div>
  </div>
  </div>
  </div>
   </> 
  )
}


export default Item