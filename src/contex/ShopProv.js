import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';

export const Shop = createContext();

const ShopProv = ({children}) => {
    const [estadoA, setEstadoA] = useState('valor por defecto');

    const [cart, setCart] = useState([]);
//Agregar producto al carrito, cantidad
    const addItem =(producto, cantidad) =>{
      console.log(producto, cantidad)

      const productoRepeat = IsInCart(producto);

      if(productoRepeat){
        productoRepeat.quantity += cantidad
        setCart([...cart])
      }
      //Cuando el producto no esta repetido
      else{
        setCart([...cart, {producto,quantity:cantidad}]);
      }

    }

    const IsInCart = (producto) =>{
      return cart.find(elemento => elemento.id === producto.id)
    }

  
  return (
    <Shop.Provider value={{estadoA, setEstadoA, addItem, cart}}>
        {children}
    </Shop.Provider>
  )
}

export default ShopProv