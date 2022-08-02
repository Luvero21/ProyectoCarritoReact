
import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './Containers/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFount from './components/NotFount';
import Cart from './Containers/Cart';
import TiendaProv from './contex/TiendaProv';
import ConfirmarCompra from './components/ConfirmarCompra';
import Footer from './components/Footer';
import Banner from './components/Banner';



function App() {

  return (
    <TiendaProv>
    <BrowserRouter>
      <Navbar/> 
      <Banner/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}></Route>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/confirmarCompra' element={<ConfirmarCompra/>}></Route>
        <Route path='*' element={<NotFount/>}></Route>  
      </Routes>
      <Footer/>
    </BrowserRouter>
    </TiendaProv>
  
  );
  
}

export default App;
