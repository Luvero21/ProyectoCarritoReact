import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ConfirmarCompra from '../../components/ConfirmarCompra';
import { Tienda } from '../../contex/TiendaProv';
import './estilos.css';
import 'bootstrap/dist/css/bootstrap.css';



const Cart = () => {
  const {cart, removeItem,clear,Total} = useContext(Tienda);

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
    <div className='d-flex container'>
      <div className='row'>
        <div className='col'>
          <h2 className='titleCarrito text-center pb-5'>Su compra:</h2>
            <table className="contenedorCart cart table table-hover text-dark text-center" >
             <thead>
              <tr className='table-secondary'>
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
                <td><img src={producto.image} width='50px' alt={producto.title} /></td>
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
     </div>
    </div>
    <div className='text-center pb-5'>
    <p className='titleCarrito text-center text-black 'key ={Total}> Su compra total es de $ {Total()}</p>
    <button className='eliminar text-black' ><Link className='link' to='/'>CONTINUAR COMPRANDO</Link></button>
    <button className='eliminar text-black' onClick={ConfirmarCompra}><Link className='link' to='/confirmarCompra'>CONFIRMAR COMPRA</Link></button>
    <button className='eliminar text-black' onClick={() => clear()}> VACIAR CARRITO </button>
    </div>
  </div>
  </div>)
  } 
  </>
  )
}

  
                            
export default Cart