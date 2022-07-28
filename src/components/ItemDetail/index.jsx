//import React, { useContext } from 'react';
import './stylos.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState , useContext} from 'react';
import ItemCountt from '../ItemCountt';
import { useNavigate } from 'react-router-dom';
import { Shop } from '../../contex/ShopProv';

//OBTIENE LOS DATOS DEL PRODUCTO
const ItemDetail = ({product}) => {

  const navigate = useNavigate();

  product.stock= 18;

  const [cantidadAgregada, setCantidadAgregada]= useState(0);

  //para consumir en ShopProv
 const {addItem} = useContext(Shop);
  

  const addToCart = (cantidad) =>{
    setCantidadAgregada(cantidad)
  }

  const handleTerminar = () =>{
   addItem(product, cantidadAgregada)
    navigate('/cart')
  }
console.log(cantidadAgregada)
  

  return (
    <>
    <div className='contenedor'>
        <h3 className='titulo '>{product.title}</h3>
        <div className='contenedor1 d-flex'>
        <img src={product.image} className='imge img-fluid' alt={product.title}/>
        </div>
        <p className='productoDes'>{product.description}</p>
        
        {!cantidadAgregada ?
        <ItemCountt addToCart={addToCart} stock={product.stock}/>
        :
        <button onClick={handleTerminar} className='Carrito'> Finalizar Compra</button>
        
        }
      

       
    </div>
    </>
  )
};

export default ItemDetail