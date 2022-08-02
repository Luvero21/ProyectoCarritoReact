import React, { useState, createContext } from 'react';

export const Tienda = createContext();

const TiendaProv = ({children}) => {
  
  const [cart, setCart] = useState([]);
//Agregar producto al carrito, cantidad
    const agregarItem = (producto, cantidad) => {

      const productoRepeat = estaEnCarro(producto);

      if(productoRepeat){
        productoRepeat.quantity += cantidad
        setCart([...cart])
      }
      //Cuando el producto no esta repetido
      else{
        setCart([...cart, {...producto,quantity:cantidad}]);
      }

    }
    const cartLenght=() =>{
      let quantity=0
      cart.forEach((producto) =>{
        quantity=quantity +producto.quantity
      })
      return quantity
    }
    cartLenght();


    const Total =() =>{
      let total= 0
      cart.forEach((producto) =>{
        total=total +(producto.quantity * producto.price);
      })
      return ((total).toFixed(2))
    }

  
    const removeItem = (id) =>{
      setCart(cart.filter((producto) => producto.id !== id));
     }
    const clear= () =>{
      setCart([])
    };
    
    const estaEnCarro = (producto) => {
      return cart.find(elemento => elemento.id === producto.id)
    }

  return (
    <Tienda.Provider value={{agregarItem, cart, removeItem,clear,Total,cartLenght }}>
        {children}
    </Tienda.Provider>
  )
}

export default TiendaProv