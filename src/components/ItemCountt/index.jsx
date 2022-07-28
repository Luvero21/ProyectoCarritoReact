import React, { useState } from 'react';
import './estilo.css';
import 'bootstrap/dist/css/bootstrap.css';


const ItemCountt = ({ addToCart, stock }) => {

    const [value, setValue] = useState(1);

    const addCount = () => {
        if (value <= stock) {
            setValue((prev) => prev +1)
        }
        
    }
    const restCount =() =>{
        if(value >1){
            setValue((prev) => prev-1)
        }
    }

    return (
        <div className='ContBotones'>
            <button onClick={addCount}className='Add'>+</button>
            <button onClick={() => addToCart(value)} className='Carrito'>CONFIRMAR</button>
            <button onClick={restCount} className='Add'>-</button>
            <span className='block'>{value}</span>
            <p className='unidades text-center text-danger'>¡Últimas {stock} unidades!</p>
        </div>
    )
}

export default ItemCountt