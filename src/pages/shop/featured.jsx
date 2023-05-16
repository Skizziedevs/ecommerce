import React from "react";
import f1 from "../../assets/products/f1.jpg";
import f2 from "../../assets/products/f2.jpg";
import f3 from "../../assets/products/f3.jpg";
import f4 from "../../assets/products/f4.jpg";
import { Carousel } from "react-bootstrap";

 export const Featured = () => {

   return (

<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={f1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={f2}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={f3}
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
   );
  
  
};


