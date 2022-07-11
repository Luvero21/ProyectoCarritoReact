
import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './Containers/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFount from './components/NotFount';
import 'animate.css/animate.min.css';
import Cart from './Containers/Cart';




function App() {

  return (
   
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}></Route>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='*' element={<NotFount/>}></Route>  
      </Routes>
    </BrowserRouter>
    
  );
  
}

export default App;
