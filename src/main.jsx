import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import './index.css'
import { HomePage } from './components/homepage/homepage.jsx'
import { OrderPage } from './components/orderpage/Orderpage.jsx';
  import { ShoppingPage } from './components/shopping_cart/shopping_page.jsx';
  import { useState } from 'react';

  // const [cart, setCart] = useState([])
  //we'll have to figure out how to pass info from state to state without a function

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "shopping",
    element: <OrderPage/>
  },
  {
    path: "checkout",
    element: <ShoppingPage/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
