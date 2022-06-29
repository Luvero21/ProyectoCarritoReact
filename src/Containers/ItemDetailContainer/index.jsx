import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {
  //ESTADO
  const[productDetail, setPorductDetail]= useState({});
  //OBTENIENDO LA INFO
  useEffect(() => {
    const ObtenerProductDetail = async() =>{
      try {
        const respuesta = await fetch ('https://fakestoreapi.com/products/3')
        const datos= await respuesta.json();
        setPorductDetail(datos);
      } catch (error) {
        console.log(error)
      }
    }
    ObtenerProductDetail()
  }, [])

  return (
    <ItemDetail product ={productDetail} />
  )
}

export default ItemDetailContainer