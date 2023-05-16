import React from 'react';
import {useParams} from 'react-router-dom';
import {PRODUCTS} from "../products"

export const ProjectDisplay = () => {

    const {id} = useParams()
    const project = PRODUCTS[id]

  return (
    <div className="project">
     
        <h1>{project.productName}</h1>
        <img src={project.productImage} alt="product"/>
    </div>
  );
};


