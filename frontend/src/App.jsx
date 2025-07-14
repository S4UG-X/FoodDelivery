
import './App.css'
import Navbar from './components/Navbar/Navbar'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
function App() {
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
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Navbar />
        <Cart />
      </>
    ),
  },
  {
    path: "/order",
    element: (
      <>
        <Navbar />
        <PlaceOrder />
      </>
    ),
  },
]);

  
  return (
    <div className="app">
      {/* <Navbar /> */}
  
      <RouterProvider router={router} />;
    </div>
  );
}

export default App
 