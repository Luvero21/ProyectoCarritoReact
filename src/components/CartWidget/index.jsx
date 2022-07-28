import {React,useContext} from 'react'
import { GrCart } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { Shop } from '../../contex/ShopProv';

const CardtWidget = () => {
  const {cartLenght} = useContext(Shop);
  
  return (
    <div>
    <Link to='/cart'>
    <GrCart/>
    {(<span>{cartLenght()}</span>)}
    </Link>
    </div>
  )
}

export default CardtWidget