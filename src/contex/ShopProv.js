import React, { useState, createContext } from 'react';

export const Shop = createContext();

const ShopProv = ({children}) => {
  
  const [cart, setCart] = useState([]);
//Agregar producto al carrito, cantidad
    const addItem = (producto, cantidad) => {
     console.log(producto,cantidad);

      const productoRepeat = isInCart(producto);

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
        total=total +(producto.quantity * producto.price)
      })
      return Number(total)
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
    <Shop.Provider value={{addItem, cart, removeItem,clear,Total,cartLenght }}>
        {children}
    </Shop.Provider>
  )
}

export default ShopProv