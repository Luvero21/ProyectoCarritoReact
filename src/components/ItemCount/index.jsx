import React, { useState } from 'react';
import './style.css';


const ItemCount = ({handleAdd, inicialStock}) => {


    const [Count, SetCount]= useState(0);

    const OnAdd = () =>{
        if (Count < inicialStock){
SetCount (Count + 1);
        }
        
    };

    const OnDecrement =() =>{
      if (Count>0){
SetCount (Count - 1);
      }

        
    }
  return (
    <div>
        <p className='Count'>{Count}</p>
        <button onClick={OnAdd} className='Add'> + </button>
        <button onClick={OnAdd} className='Carrito'> Agregar al Carrito </button>
        <button onClick={OnDecrement} className='Add'> - </button> 
        
        </div>
  )
};

export default ItemCount