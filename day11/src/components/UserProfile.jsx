import React, { useEffect, useState } from "react";
import axios from "axios";
import "./userProfile.css";
import { Link } from "react-router-dom";

//Dynamic Routing
const UserProfile = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <>
      {products.map((product) => (
        <Link key={product.id} to={`/users/${product.id}`}>
          <div className="container">
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>{product.price}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default UserProfile;