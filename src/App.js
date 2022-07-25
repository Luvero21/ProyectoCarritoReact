
import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './Containers/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFount from './components/NotFount';
import Cart from './Containers/Cart';
import ShopProv from './contex/ShopProv';
import ConfirmarCompra from './components/ConfirmarCompra/ConfirmarCompra';



function App() {

  return (
    <ShopProv>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}></Route>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/confirmarCompra' element={<ConfirmarCompra/>}></Route>
        <Route path='*' element={<NotFount/>}></Route>  
      </Routes>
    </BrowserRouter>
    </ShopProv>
  );
  
}

export default App;
