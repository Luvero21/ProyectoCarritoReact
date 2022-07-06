import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import ItemDetail from '../../components/ItemDetail';
import { useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './stylos.css';

//PARA OBTENER LOS DETALLES DE UN PRODUCTO
const ItemDetailContainer = () => {
  //ESTADO
  const[productDetail, setProductDetail]= useState({});

  const params = useParams();
  
  //OBTENIENDO LA INFO
  useEffect(() => {
    const ObtenerProductos = async() =>{

      try {
        const respuesta = await fetch (`https://fakestoreapi.com/products/${params.productId}`)
        const datos= await respuesta.json();
        setProductDetail(datos);
      } catch (error) {
        console.log(error)
      }
    }
    ObtenerProductos()
  }, [params])

  return (
   Object.keys(productDetail).length !== 0 ?
   <ItemDetail product={productDetail}/>
  :
   <p>ESPERANDO PAGINA...</p>

  )
}

export default ItemDetailContainer