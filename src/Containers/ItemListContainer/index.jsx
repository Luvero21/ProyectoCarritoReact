import React, { useEffect, useState } from 'react';
//import ItemCount from '../../components/ItemCount';
import 'bootstrap/dist/css/bootstrap.css';
import ItemList from '../../components/ItemList';
import {useParams} from 'react-router-dom';
import './style.css'

const ItemListContainer = ({greeting}) => {
  const[productos, setProductos] = useState ([]);
  const [productosFiltrados,setProductosFiltrados] = useState([]);
  const params= useParams();
 

      useEffect(() => {
  
      const obtenerProductos = async() =>{
      try {
        const respuesta = await fetch('https://fakestoreapi.com/products');
        const datos = await respuesta.json();
        setProductos(datos);  
        setProductosFiltrados(datos);    

      } catch (error) {
        console.log('Hubo un error:');
        console.log(error) 
      }
  }
    obtenerProductos()
  }, []);

  useEffect(() =>{
    if(params?.categoryId){
      const productosFiltrados = productos.filter(producto =>producto.category === params.categoryId)
      setProductosFiltrados(productosFiltrados)
    } else{
      setProductosFiltrados(productos)
    }

  },[params,productos])
   
  return(
    <div className='containeer'>
      {productos.length !== 0 ?
      <ItemList products={productosFiltrados}/>
      :
      <p>ESPERANDO PAGINA...</p>
}
    </div>
  )

      };


export default ItemListContainer