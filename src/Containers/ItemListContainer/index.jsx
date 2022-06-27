import React, { useEffect, useState } from 'react';
import ItemCount from '../../components/ItemCount';
import 'bootstrap/dist/css/bootstrap.css';
import ItemList from '../../components/ItemList';

const ItemListContainer = ({greeting}) => {
  const[productos, setProductos] = useState (null)
   
  useEffect(() => {
    const task =new Promise ((res, rej) =>{
  setTimeout(() =>{
    res(productos)
  }, 2000)
});
      const obtenerProductos = async() =>{
      try {
        const res1 = await task;
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log(res1);
        setProductos(data);      

      } catch (error) {
        console.log('Hubo un error:');
        console.log(error)
        
      }
  }
    obtenerProductos()
  
  }, []);


  console.log(productos);

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