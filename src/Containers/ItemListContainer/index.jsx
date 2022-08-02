import React, { useEffect, useState } from 'react';
//import ItemCount from '../../components/ItemCount';
import 'bootstrap/dist/css/bootstrap.css';
import ItemList from '../../components/ItemList';
import {useParams} from 'react-router-dom';
import { collection,query,getDocs } from 'firebase/firestore';
import './style.css';
import { db } from '../../firebase/config';



const ItemListContainer = ({greeting}) => {
  const[productos, setProductos] = useState ([]);
  const [productosFiltrados,setProductosFiltrados] = useState([]);
  const params= useParams();
 

      useEffect(() => {
  
      const obtenerProductos = async() =>{
      try {
        const q = query(collection(db, "productos"));

       const querySnapshot = await getDocs(q);
       const product = [];
      querySnapshot.forEach((doc) => {  
      product.push({id: doc.id, ...doc.data()});

      });

        setProductos(product)
        setProductosFiltrados(product);

      } catch (error) {
        console.log('Hubo un error:');

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
    <div className='text-center '>
      <p className='text-secondary h2 pt-5'>NUESTROS PRODUCTOS</p>
     
    <div className='containeer'>
      
     {productos.length !== 0 ?
      <ItemList products={productosFiltrados}/>
      :
      <p>ESPERANDO PAGINA...</p>
}
 </div>
    </div>
  )

      };


export default ItemListContainer