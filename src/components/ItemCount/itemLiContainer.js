import React from 'react';
import ItemCount from './ItemCount';


const ItemLiContainer =() =>{
const OnAdd= (Count) => {
    alert(`Sumaste ${Count} articulos`);
}
  return (
    <div>
        <ItemCount initial={1} stock={15} onAdd={OnAdd}/>

    </div>
  )
};

export default ItemLiContainer