import CartDisplayProduct from "../../components/cart-display-product/CartDisplayProduct";
import { useEffect, useState } from "react";
import { Modal } from "@material-ui/core";
import "./CartPage.css";
import { Link } from "react-router-dom";
// import data from "../../products";
import { getCart, removeItemFromCart, addOrderArr } from "./useLocalStorage";

function CartPage(props) {
  const { setCartItemsCount } = props;

  const [cartItems, setCartItems] = useState(getCart() || []);
  const [totalPrice, setTotalPrice] = useState(0);

  const [open, setOpen] = useState(false);
  const [orderPlaceOpen, setOrderPlaceOpen] = useState(false);

  function calculateTotalPrice() {
    let total = 0;
    // setCartItems(getCart());
    cartItems.forEach((item) => {
      total += parseInt(item.quantity) * (item.price);
    });
    setTotalPrice(total);
  }

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1>No Items In Cart</h1>
      
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-page-left">
        <div className="cart-page-left-header">
          <h1>My Cart({cartItems.length})</h1>
        </div>

        {cartItems.map((item) => (
          <CartDisplayProduct
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.img}
            price={item.price}
            quantity={item.quantity}
            setCartItems={setCartItems}
          />
        ))}
      </div>
      <div className="cart-page-right">
        <h1 className="cart-price-details">PRICE DETAILS</h1>
        <hr className="plane-hr" />
        <div className="cart-price">
          <h1>Price ({cartItems.quanity})</h1>
          <h1>₹{totalPrice}</h1>
        </div>
     
    

        <hr className="dashed-hr" />
        <div className="cart-total">
          <h1 className="total-amt">Total Amount</h1>
          <h1>₹{totalPrice}</h1>
        </div>
        <div className="place-order-div">
          <button  className="place-order">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
