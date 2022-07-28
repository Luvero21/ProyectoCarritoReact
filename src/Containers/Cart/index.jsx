import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ConfirmarCompra from '../../components/ConfirmarCompra';
import { Shop } from '../../contex/ShopProv';
import './estilos.css';



const Cart = () => {
  const {cart, removeItem,clear,Total} = useContext(Shop);

  return (<>
  {
    (cart.length) < 1 ?
  ( <div className='divNoHayItem'>
    <p className='divNoHayItem'>No hay productos en el carrito, seleccionelos.</p>
    <Link to='/'>Volver a Inicio</Link>
    </div>
  ) 
  :
  (
    <div>
    <h2 className='titleCarrito'>Carrito de compras</h2>
  <table className="contenedorCart cart" >
    <thead>
      <tr>
        <th> Producto</th>
        <th> Descripcion</th>
        <th> Precio</th>
        <th> Cantidad</th>
        <th> SubTotal </th>
        <th> Eliminar</th>
      </tr>
    </thead>
          <tbody>
          {cart.map(producto =>{ 
            return <>

              <tr key={producto.id}>
                <td><img src={producto.image} width='80px' alt={producto.title} /></td>
                <td>{producto.title}</td>
                <td>{producto.price}</td>
                <td>{producto.quantity}</td>
                <td> $ {producto.price * producto.quantity}</td>
                <td><button className='eliminar' onClick={() => removeItem(producto.id)}> X </button></td>
  
              </tr> 
                  </>
                                  }
                    )
          }
          </tbody>
  </table>
  <div>
    <p className='titleCarrito'key ={Total}> Su compra total es de $ {Total()}</p>
    <button className='eliminar' ><Link to='/'>CONTINUAR COMPRANDO</Link></button>
    <button className='eliminar' onClick={ConfirmarCompra}><Link to='/confirmarCompra'>CONFIRMAR COMPRA</Link></button>
    <button className='eliminar' onClick={() => clear()}> VACIAR CARRITO </button>
  </div>
  </div>)
  } 
  </>
  )
}

  
                            
export default Cart