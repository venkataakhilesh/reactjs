import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [id]);

  if (!product) {
    return <p>Loading....</p>;
  }

  return (
    <>
      <div className="product-container">
        <img src={product.image} alt={product.title} />
        <h4>{product.title}</h4>
        <p>${product.price}</p>
      </div>
    </>
  );
};

export default ProductDetail;