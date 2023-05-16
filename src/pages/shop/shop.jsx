import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { Featured } from "./featured";


export const Shop = () => {
  return (
    <div className="shop">
      <Featured />
      <div className="shopTitle">
        <h1>vcstores</h1>
        <h1 className="title"> The fastest delivery you can get</h1>
       <p className="desc"> vc stores is owned by mr valentine chuks onwura.
       A master bartender who now wants to be of service to the world.
       Book us for events, meetings, even small gathering. we got you, ANYTIME... </p>
      </div>

      <div className="products">
        {PRODUCTS.map((product, idx) => (
          <Product data={product} id={idx} />
        ))}
      </div>
    </div>
  );
};
