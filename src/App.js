import React , {useState} from "react" ;
import './App.css';
import Cart from './component/Cart/Cart';
import CartProvider from "./store/CartProvider";
import Header from "./component/Layout/Header";
import Meals from './component/Meals/Meals';
function App() {

   const [showCart , setShowCart] = useState(false);

   const showCartHandler = ()=>{
    setShowCart(true);
   }
   
   const closeCartHnadler = ()=>{
    setShowCart(false);
   }

  return (
    <CartProvider >
      {showCart && <Cart onCloseCart = { closeCartHnadler } />   } 
      <Header onShowCart = {showCartHandler} />
      <Meals/>
    </CartProvider>
  );
}

export default App;
