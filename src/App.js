
import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './Containers/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <ItemListContainer greeting="PROXIMAMENTE CARRITO"/>
    </div>
  );
}

export default App;
