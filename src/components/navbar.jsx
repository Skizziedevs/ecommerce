import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import icon from "../assets/products/icon.gif";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left"> <h1>Skizzie Devs</h1></div>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
