import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import './Item.css';

//import ItemCount from '../ItemCount';

const Item = ({product}) => {

 const navigate = useNavigate();
 
 const {title, price, description,image,id,}=product;

const handleDetail= () =>{

navigate(`/detail/${id}`);

  }
 
  return (
    <div className='container'>
    <div className="card d-flex">
      <div className='overflow'>
    <img src={image} className="card-img-top imagen" alt={title}/>
    </div>
    <div className="card-body text-white bg-dark">{id}
    <h5 className="card-title text-secondary">{title}</h5>
    <h5 className='card-price text-danger'>Precio:$ {price}</h5>
    <p classname= 'card-text text-secondary'>{description}</p>
    <button className="btn btn-outline-danger rounded-0" onClick={handleDetail}>VER MAS </button>
    </div>
    </div>

    </div>
   
  )
  };

export default Item