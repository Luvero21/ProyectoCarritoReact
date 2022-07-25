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
  // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      product.push({id: doc.id, ...doc.data()});

      });
      console.log(product);

      //  const respuesta = await fetch('https://fakestoreapi.com/products');
      //  const datos = await respuesta.json();
        setProductos(product)
        setProductosFiltrados(product);

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