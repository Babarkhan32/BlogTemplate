 import React from 'react'
   import {
     BrowserRouter,
     Routes,
     Route,
   } from "react-router-dom";
import Home from '../pages/Home';
import Header from '../components/Navbar';
import Category from '../pages/Category';
import ProductDetail from '../pages/Detail'
const ApplicationRoutes = () =>{

return(
  <BrowserRouter>
  
  <Header/>
    <Routes>
      <Route path="/" element={<Home />}> </Route>
      <Route path="/category/:category" element={<Category />}> </Route>
      <Route path="/product-detail" element={<ProductDetail />}> </Route>

    </Routes>
  </BrowserRouter>
 
);
}

export default ApplicationRoutes