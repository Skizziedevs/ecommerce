import React from "react";
import "./payment.css";
import mastercard from "../assets/products/mastercard.png"
import verve from "../assets/products/verve.png"
import visa from "../assets/products/visa.png"
import paypal from "../assets/products/paypal.png"

export const Payment = () => {
  return (
  <div className="container">
    <div className="form">
        <div className="title"><h1><b>Payment details</b></h1></div>

        <div className="divi">
          <img src={mastercard} width="40px" height="32px" />
          <img src={verve}  width="40px" height="32px"/>
          <img src={paypal} width="40px" height="32px"/>
          <img src={visa} width="40px" height="32px"/>
        </div>"
       

    <div className="div">
        <p>full name</p>
    <input type="text"   className="input"></input></div>
    

    <div className="div">
        <p>CVC</p>
    <input type="text"  className="input"></input></div>


    <div className="div">
        <p>Date</p>
    <input type="text" placeholder="MM/YY"  className="input"></input></div>
    <div className="div">
        <p>card Number</p>
    <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX"  className="input"></input></div>
    

    <button className='paynow'>PAY NOW</button>
    </div>

    
  </div>
  );
};



