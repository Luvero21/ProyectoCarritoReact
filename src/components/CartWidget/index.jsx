import React from 'react'
import { GrCart } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { Shop } from '../../contex/ShopProv';

const CardtWidget = () => {
  const {cart} = React.useContext(Shop);
  
  return (
    <div>
    <Link to='/cart'>
    <GrCart/>
    {cart.length && <span> ({cart.length})</span>}
    </Link>
    </div>
  )
}

export default CardtWidget