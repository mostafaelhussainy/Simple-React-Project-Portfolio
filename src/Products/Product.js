import { useState, useEffect } from "react";
import './productstyle.css'
import { useParams } from "react-router-dom";
import Products from "./Products";

const Product = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  useEffect (()=> {
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setProduct(json));
  },[])
  return ( 
    <div className="product-container">
      {product &&
        <div className="product-details-wrapper">
          <p>{product.category}</p>
          <p>{product.title}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <img src={product.image} alt="" />
        </div>
      }
    </div>  
   );
}
 
export default Product;