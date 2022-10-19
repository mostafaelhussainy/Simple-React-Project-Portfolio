import { useSelector } from 'react-redux'
import './style.css'

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems)

  return ( 
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
   );
}
 
export default Cart;