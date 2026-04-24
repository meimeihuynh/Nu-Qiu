import '../App.css';
import { useState } from "react";
import products from "../Products.js";
import logo from "../assets/nuqiulogo.png";
import ProductGrid from "../productcard.jsx";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";

import Header from "../components/Header";

import menuIcon from "../assets/icon/menu.png";
import searchIcon from "../assets/icon/searchblack.png";
import userIcon from "../assets/icon/user.png";
import cartIcon from "../assets/icon/cartblack.png";


function Home() {
  return (
  <div className="app-container">
    <div className="phone">
        <div className="home">
            <div className="header">
                <Header
                    logo={logo}
                    menuIcon={menuIcon}
                    searchIcon={searchIcon}
                    userIcon={userIcon}
                    cartIcon={cartIcon}
                />
            </div>

            <h1 className="product-title">Alle varer</h1>

            <ProductGrid products={products} />
        </div>
    </div>
</div>);
}

export default Home;