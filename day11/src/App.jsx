// import React, { useEffect, useState } from 'react';
// import axios from "axios";
// import styles from "./app.module.css";

// const App = () => {

// const [products,setProducts] = useState([]);
//   useEffect(()=>{
//      axios.get("https://dummyjson.com/products")
//      .then((response) =>{
//       console.log(response.data.products);
//       setProducts(response.data.products)
//      })
//      .catch((error) => {
//       console.log(error.message);
//      });
//   }, []);
//   return (
//     <>
//     <h1>products list</h1>
//     {products.map((product) =>(
//         <div key={product.id} className={styles.container}>
//         <img src={product.image} alt={product.title} className={styles.img} />
//          <h4 className={styles.h4}>{product.title}</h4>
//          <p className={styles.p}>Price : {product.price}</p>
//         <p className={styles.p}>{product.description}</p>
//        </div>
//     ))}
//     </>
//   );
// };

// export default App;




import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import UserProfile from "./components/UserProfile";
import ProductDetail from "./components/ProductDetail";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/error" element={<Error />}></Route>
        <Route path="/users" element={<UserProfile />}></Route>
        <Route path="/users/:id" element={<ProductDetail />}></Route>
      </Routes>
    </>
  );
};

export default App;