import React, { useContext } from 'react';
import { Shop } from '../../contex/ShopProv';
import './estilos.css';


const Cart = () => {
  const {cart, removeItem,clear} = useContext(Shop);
  console.log(cart);

  return (<>
  <table className="contenedorCart cart" >
    <thead>
      <tr>
        <th> Producto</th>
        <th> Descripcion</th>
        <th> Precio</th>
        <th> Cantidad</th>
        <th> Eliminar</th>
        <th> <button className='eliminar' onClick={() => clear()}> LIMPIAR </button></th>

      </tr>
    </thead>
          <tbody>
          {cart.map(producto =>{ 
            return <>

              <tr key={producto.id}>
                <td className='image' alt={producto.title}>{producto.image}</td>
                <td>{producto.title}</td>
                <td>{producto.price}</td>
                <td>{producto.quantity}</td>
                <td><button className='eliminar' onClick={() => removeItem(producto.id)}> X </button></td>
                <td></td>
              </tr> 

          </>
          })}
          </tbody>
  </table>
  
  </>)}
                            
export default Cart