import React from "react";
import { useCustomHook } from "./context/StateContext";
import ProductLists from "./page/ProductLists";
import Navbar from "./component/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AddtoCart from "./page/AddtoCart";
import ItemDetail from "./page/ItemDetail";
const App = () => {
  return (
    <div className="   text-customBrown relative mb-10">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductLists />} />
        <Route path="/AddtoCart" element={<AddtoCart />} />
        <Route path="/ItemDetail/:id" element={<ItemDetail />} />
      </Routes>
    </div>
  );
};

export default App;
