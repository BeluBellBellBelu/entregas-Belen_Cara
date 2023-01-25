import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import CartWidget from "./components/CartWidget/CartWidget";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar/>
      <CartWidget cantiCarrito={5}/>
      <ItemListContainer prodElegido={"Royal Canin Indoor 7,5kg"}/>
    </>
  );
}

export default App;
