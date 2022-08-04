import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import './Item.css';
import 'bootstrap/dist/css/bootstrap.css';


const Item = ({product}) => {

 const navigate = useNavigate();
 
 const {title, price,image,id,}=product;

const handleDetail= () =>{

navigate(`/detail/${id}`);

  }
 
  return (
    <div className='container d-flex'>
    <div className="card ">
      <div className='overflow'>
    <img src={image} className="card-img-top imagen" alt={title}/>
    </div>
    <div className="card-body text-white bg-dark">
    <h5 className="card-title text-secondary">{title}</h5>
    <h5 className='card-price text-danger'>Precio:$ {price}</h5>
    <button className="btn btn-outline-danger rounded-0" onClick={handleDetail}>VER MAS </button>
    </div>
    </div>

    </div>
   
  )
  };

export default Item