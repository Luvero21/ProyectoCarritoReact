import React from 'react'
import ItemCount from '../../components/ItemCount'

const ItemListContainer = ({greeting}) => {

  const OnAdd =() =>{
    console.log("SE AGREGO ITEM AL CARRITO")
  }
  return (
    <div> 
        {greeting}
<ItemCount OnAdd={OnAdd} inicialStock={10} />
    </div>
  )
}

export default ItemListContainer