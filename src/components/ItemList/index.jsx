import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Item from '../Item';

const ItemList = ({products}) => { 
  return (
    <div>
   {products.map(productos => {
    return < Item product={productos} key={productos.id}/> 
   })}
  </div>
  ) 
  }
  /*  <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
   <div className="card">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">TITULO</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href='img' className="btn btn-primary">IR</a>
  </div>
  </div>
  </div>
  </div>
*/


export default ItemList