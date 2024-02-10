import "./Main.css";
//import productImage from "../../assets/Products/img-product.jpeg"
import "./Main.css";
import React, { useEffect, useState } from "react";
import axios from 'axios';


function Main() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://dummyapi.online/api/movies')
            .then(response => {
                setData(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="wrapper">
            <div className="productBox">
        <h1>API Data</h1>
        {data.map(item => (
                <div className="productBoxInner" key={item.id}>
                    {item.imdb_url}
                    <br></br>
                    <img src={item.image} alt={item.movie} />
                    <br></br>
                    <a href={item.imdb_url} target="_blank">Link</a>
                </div>
            ))}
    </div>
        </div>
    );
}


export default Main