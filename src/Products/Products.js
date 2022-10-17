import { useState, useEffect } from "react";
import './style.css'
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState(null)
  useEffect (()=> {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json));
  },[])

  const [product, setProduct] = useState(null)
  // const handleClick = () => {
  //   useEffect (()=> {
  //     fetch('https://fakestoreapi.com/products/1')
  //             .then(res=>res.json())
  //             .then(json=>setProduct(json))
  //     },[])
  // }

  return (
     <div className="products-container">
      {products &&
        products.map((product)=>(
            <Link to={`/product/${product.id}`}>
              <div className="product-container">
                <div className="title">{product.title}</div>
                <div className="price">{product.price}</div>
                <img src={product.image} alt="" className="product-image"/>
              </div>
            </Link>
        ))
      }
    </div>
  );
}
 
export default Products;