
import './App.css';
import Navbar from './components/NavBar';
//import ItemListContainer from './Containers/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css';
import ItemDetailContainer from './Containers/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
     {/*<ItemListContainer greeting="PROXIMAMENTE CARRITO"/>*/}
     <ItemDetailContainer/>
    </div>
  );
}

export default App;
