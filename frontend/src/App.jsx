
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from './pages/Cart.jsx';
import Home from './pages/Home.jsx';
import PlaceOrder from "./pages/PlaceOrder.jsx";
import { StoreContext } from './context/StoreContext';
import { food_list } from './assets/asset';
import { useState } from 'react';

function App() {

  
const [cartItems, setCartItems] = useState({}); //here in cartItems we are storing the object of these data--> id_of_menuItem : number (of how many time you added to the cart)
const addToCart = (itemId) => {
  if (!cartItems[itemId]) {
    setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
  } else {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }
};

const removeFromCart = (itemId) => {
  setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
};
//  console.log(cartItems)

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
  };
  //This is hte change

const router = createBrowserRouter([
  {
    path: "/", // 👈 Add this
    element: (
      <>
        <Home />
      </>
    ),
  },
  {
    path: "/home",
    element: (
      <>
       
        <Home />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        
        <Cart />
      </>
    ),
  },
  {
    path: "/order",
    element: (
      <>
        
        <PlaceOrder />
      </>
    ),
  },
]);

  
  return (
    <StoreContext.Provider value={contextValue}>
      <div className="app">
        {/* <Navbar /> */}
        <Navbar />
        <RouterProvider router={router} />;
      </div>
        <Footer />
    </StoreContext.Provider>
  )
}

export default App
 