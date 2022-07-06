import React, { useState } from 'react';
import './style.css';


const ItemCount = ({Initial, stock, OnAdd}) => {


    const [Count, SetCount]= useState(Initial);

    const HandleAdd = () =>{
        if (Count < stock){
SetCount (Count + 1);
        }else{
          alert(`Ha superado el stock disponible ${stock}`)
        }
    };

    const HandleDecrement =() =>{
      if (Count> Initial){
SetCount (Count - 1);
      }else{
          alert(`Ha superado el stock maximo ${Initial}`)
        }    
    }
    const reset= ()=>{
      SetCount(Initial)
    }
  return (
        <div>
        <p className='Count'>{Count}</p>
        <button onClick={HandleAdd} className='Add'> + </button>
        <button onClick={OnAdd} className='Carrito'> Agregar al Carrito </button>
        <button onClick={reset} className='Carrito'> Reset </button>
        <button onClick={HandleDecrement} className='Add'> - </button> 
        </div>
  )
};

export default ItemCount