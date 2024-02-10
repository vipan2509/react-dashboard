import "./Main.css";
//import productImage from "../../assets/Products/img-product.jpeg"
import "./Main.css";
import React, { useEffect, useState } from "react";
import axios from 'axios';


function Main() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then(response => response.json())
          .then(data => {
            console.log(data); // Log the fetched data
            setProducts(data);
          })
          .catch(error => console.error('Error fetching products:', error));
      }, []);
  
    return (
      <div className="container">
        <h1>Vip Store</h1>
         <div className="cardContaner">
         {products.map(product => (
            <div class="card" key={product.id}>
                <div className="cardImg"><img class="card-img-top"src={product.image} alt={product.image} /></div>
                <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
          ))}
         </div>
        </div>
    );
  }
  


export default Main
