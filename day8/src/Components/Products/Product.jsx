import React from "react";
import styles from "./Product.module.css";

const Products = () =>{

    const products = [ 
        {
          id:1,
          name:"G-wagon",
          price:"3.2cr",
          image:"https://www.brabus.com/_Resources/Persistent/3/6/f/5/36f5621b55b44ff3648314d6aeab49cd18b0d6ee/20210520_Brabus_Cannonball_event_3483-1170x780.jpg"
        },
        {
          id:2,
          name:"proscha",
          price:"2.2cr",
          image:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Porsche/911/10998/Porsche-911-GT3-RS/1717681506245/front-left-side-47.jpg?imwidth=420&impolicy=resize	"
        },
        {
          id:3,
          name:"range-rover-vogue",
          price:"4.2cr",
          image:"https://imgd.aeplcdn.com/1056x594/cw/ec/41691/Land-Rover-Range-Rover-Exterior-166426.jpg?wm=1&q=80"
        },
        {
          id:4,
          name:"Bmw",
          price:"1.2cr",
          image:"https://images.hindustantimes.com/auto/img/2021/01/28/1600x900/P90411229_highRes_the-new-bmw-m5-cs-sc_1611806914940_1611806923835.jpg"
        },
        {
          id:5,
          name:"mustang",
          price:"90lkhs",
          image:"https://www.motortrend.com/uploads/2021/11/2022-Ford-Mustang-Shelby-GT500-Heritage-Edition-14.jpg"
        }
    ]
    return(
        <>
         <div>
           {products.map((product)=>(
               <div className={styles.container} key={product.id}>
                   <img 
                   src={product.image}
                    alt={product.name}
                    className={styles.img}
                     />
                     <h2 className={styles.heading}>{product.name}</h2>
                     <p className={styles.para}>{product.price}</p>
               </div>
           ))}
         </div>
        
        </>
   
      )
};

  

export default Products;