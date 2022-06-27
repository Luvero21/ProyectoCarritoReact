import React, { useEffect, useState } from 'react';
import ItemCount from '../../components/ItemCount';
import 'bootstrap/dist/css/bootstrap.css';
import ItemList from '../../components/ItemList';

const ItemListContainer = ({greeting}) => {
  const[productos, setProductos] = useState (null)
   
  useEffect(() => {
  
      const obtenerProductos = async() =>{
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProductos(data);      

      } catch (error) {
        console.log('Hubo un error:');
        console.log(error)
        
      }
  }
    obtenerProductos()
  }, []);

  const OnAdd =() =>{
    console.log("SE AGREGO ITEM AL CARRITO")
  }
  return (
    <div>
        {greeting}
        {productos ?
        <ItemList products={productos}/>
        :
        null
        }
        <ItemCount OnAdd={OnAdd} inicialStock={10} />
    </div>
  )
      }


export default ItemListContainer