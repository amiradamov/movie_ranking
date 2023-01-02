import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";
import "./App.css";
import About from "./components/About";
import NotFound from "./components/NotFound";
import ProductInfo from "./components/ProductInfo";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="/product" element=<Product /> />
          <Route path="/about" element=<About /> />
          <Route path="/*" element=<NotFound /> />
          <Route path="/product/:productId" element=<ProductInfo /> />
        </Routes>
      </main>
    </>
  );
}
