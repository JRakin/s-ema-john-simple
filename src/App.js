import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Info from './components/Info/Info';

function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shop></Shop>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
          <Route path="/review" element={<Review></Review>}></Route>
          <Route path = "/inventory" element = {<Inventory></Inventory>}></Route>
          <Route path = "/info" element = {<Info></Info>}></Route>
          
          
          <Route path = "/product/:productKey" element = {<ProductDetail></ProductDetail>}></Route>
          
          <Route path="*" element={<NotFound></NotFound>}></Route>

        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
