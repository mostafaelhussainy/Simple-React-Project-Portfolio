import { useDispatch, useSelector } from 'react-redux'
import './style.css'
import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import { addToCart } from '../redux/cart';

const Products = () => {
  const { data : products, isPending} = useFetch('https://fakestoreapi.com/products')
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems)
  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }
  return (
    <div className='page-product-container'>
      <div className="products-container">
        {isPending && <div>Loading ...... </div>}
        {products &&
          products.map((product)=>(
              <>
                <div className="product-wrapper">
                <Link to={`/product/${product.id}`}>
                  <div className="text-content">
                    <div className="title">Product: {product.title}</div>
                    <div className="price">Price: {product.price}</div>
                  </div>
                  </Link>
                  <Link to={`/product/${product.id}`}>
                  <div className="img-wrapper">
                    <img src={product.image} alt="" className="product-image"/>
                  </div>
                  </Link>
                <button onClick={()=> handleAddToCart(product)} className="btncart">+</button>
                </div>
              </>
          ))
        }
      </div>
      <div className="cart-container">
        <p>Cart</p>
        {
          cart.map((item) => (
            <>
            <div className="cart-wrapper">
              <div className="title">
                Product: {item.title}
                total items: {item.cartQuantity}
              </div>
              <div className="img-wrapper">
                <img src={item.image} alt="" className="product-image"/>
              </div>
            </div>
            </>
          ))
        }
      </div>
    </div>
  );
}
 
export default Products;