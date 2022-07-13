import React, { useState, createContext } from 'react';

export const Shop = createContext();

const ShopProv = ({children}) => {
  
  const [cart, setCart] = useState([]);
//Agregar producto al carrito, cantidad
    const addItem = (producto, cantidad) => {
     console.log(producto,cantidad);

      const productoRepeat = isInCart(producto);
      console.log(productoRepeat);

      if(productoRepeat){
        productoRepeat.quantity += cantidad
        setCart([...cart])
      }
      //Cuando el producto no esta repetido
      else{
        setCart([...cart, {...producto,quantity:cantidad}]);
      }

    }
    const removeItem = (id) =>{
      setCart(cart.filter((producto) => producto.id !== id));
     }
    const clear= () =>{
      setCart([])
    };
    
    const isInCart = (producto) => {
      return cart.find(elemento => elemento.id === producto.id)
    }

  return (
    <Shop.Provider value={{addItem, cart, removeItem,clear }}>
        {children}
    </Shop.Provider>
  )
}

export default ShopProv