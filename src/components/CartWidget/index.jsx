import {React,useContext} from 'react'
import { GrCart } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { Tienda } from '../../contex/TiendaProv';

const CardtWidget = () => {
  const {cartLenght} = useContext(Tienda);
  
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