
import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './Containers/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <ItemListContainer greeting="PROXIMAMENTE CARRITO"/>
    </div>
  );
}

export default App;
