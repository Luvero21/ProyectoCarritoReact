import React from 'react'
import { GrCart } from 'react-icons/gr';
import { Shop } from '../../contex/ShopProv';

const CardtWidget = () => {
  const {cart} = React.useContext(Shop);
  
  return (
    <div>
    <GrCart/>
    {cart.length && <span> ({cart.length})</span>}
    </div>
  )
}

export default CardtWidget