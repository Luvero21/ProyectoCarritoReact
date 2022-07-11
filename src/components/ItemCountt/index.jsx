import React, { useState } from 'react';
import './estilo.css';


const ItemCountt = ({ confirmado, stock }) => {

    const [value, setValue] = useState(1);

    const handleConfirm = () => {
        if (value <= stock) {
            confirmado(value)
        }
        else {
            alert("Cantidad mayor al stock disponible")
        }
    }
    return (
        <div className='ContBotones'>
            <button onClick={() => setValue(value => value+1)}className='Add'>+</button>
            <button onClick={handleConfirm} className='Carrito'>CONFIRMAR</button>
            <button onClick={() => setValue(value => value-1)} className='Add'>-</button>
            <span className='block'>{value}</span>
        </div>
    )
}

export default ItemCountt