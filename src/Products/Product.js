import './productstyle.css'
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const Product = () => {
  const { id } = useParams()
  const { data : product, isPending} = useFetch(`https://fakestoreapi.com/products/${id}`)

  return ( 
    <div className="product-container">
      {isPending && <div>Loading ...... </div>}
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