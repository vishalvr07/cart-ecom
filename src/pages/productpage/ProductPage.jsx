import React from "react";
import "./ProductPage.css";
import { useState } from "react";
import Navbar from "../../components/navbar";
import Truck from "./truck.png";
import Price from "./price-tag.png";
import data from "../../products";
import { useEffect } from "react";

import Ratings from "./rating.png";
import { Link } from "react-router-dom";
import { addItemToCart, getCart } from "./../../pages/cart/useLocalStorage";
import { render } from "react-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import axios from "axios";

function ProductPage(props) {

  const [quanityItem, setQuantityItem] = useState(0);

  // const [data , setData]= useState();

  // useEffect(() => {
  //   axios
  //     .get("https://leaguex.s3.ap-south-1.amazonaws.com/task/shopping/catalogue.json")
  //     .then(function (response) {
  //       setData(response.data);
  //       console.log("pokemon",response.data)
  //     });
  // }, []);


  const { setCartItemsCount } = props;
  let id = window.location.pathname.split("/")[2];

  console.log("JAHJAH",JSON.stringify(data))

  const {
    price,
    name,
    rating,
    imageURL,
    currency,
    type,
    color,
    gender,
    quantity,
    review,
    catogeries,
  } = data[id];

  const [dispImg, setDispImg] = useState(imageURL);

  const addItem = () => {
    addItemToCart({
      id,
      name,
      price,
      quantity: quanityItem,
      img: imageURL,
    });
    setItemInCart(true);
    setCartItemsCount(getCart().length);
  };

  const handleIncrement = () => {
    if(quanityItem == quantity){
      return
    }
    else{
    setQuantityItem((prev)=>prev + 1)
  }
  }

  const handleDecrement = () => {
    if(quanityItem <= 0){
      return
    }
    else{
    setQuantityItem((prev)=>prev - 1)}
  }

  const [itemInCart, setItemInCart] = useState(false);


  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(getCart());
    const cartItems = getCart();

    console.log("Vishal", cartItems);

    cartItems.map((item) => {
      if (item.id === id) setItemInCart(true);
    });
  }, []);

  return (
    <div className="product_page_top">
      <div className="productPage__container">
        <div className="productPage__left">
          <div className="productPage__displayImageContainer">
            <div
              className="productPage__displayImage"
              style={{ backgroundImage: `url(${dispImg})` }}
            ></div>
          </div>
        </div>

        <div className="productPage__right">
          <div className="productPage__right__">
            {/* <h1>{catogeries.charAt(0).toUpperCase() + catogeries.slice(1)}</h1> */}
            <h1 className="productPage__right__name">{name} For {gender} in {color} color</h1>
            <h1 className="productPage__right__rating">5 Star</h1>
            <div className="prod-price">
              <h1 className="productPage__right__price">{price} {currency}</h1>
              <h1 className="productPage__right__price">( 25% OFF )</h1>
            </div>
            <h1 className="prod-taxes">inclusive of all taxes , Maximum {quantity} items are allowed</h1>
            {/* <div className="">
              <button className="increment_button">+</button>
            </div> */}
            {/* <div class="quantity">
              <a href="#" class="quantity__minus">
                <span>-</span>
              </a>
              <input
                name="quantity"
                type="text"
                class="quantity__input"
                value="1"
              />
              <a href="#" class="quantity__plus">
                <span>+</span>
              </a>
            </div> */}
<div className="wrap_together">
            <div class="wrapper_button">
              <span class="minus" onClick={handleIncrement}>+</span>
              <span class="num">{quanityItem}</span>
              <span class="plus" onClick={handleDecrement}>-</span>
            </div>


            <div className="prodButtons">
              {itemInCart ? (
                <Link to="/cart">
                  <button className="prod-addToBag">
                    <i className="fas fa-shopping-bag btnProd-icons"></i> GO TO
                    CART BAG
                  </button>
                </Link>
              ) : (
                <button className="prod-addToBag" onClick={addItem}>
                  <i className="fas fa-shopping-bag btnProd-icons"></i> ADD TO
                  CART
                </button>
              )}
            </div>
            </div>
            <hr />
            <div className="product-details">
              <h1 className="product-details-heading">
                PRODUCT DETAILS{" "}
                <i className="fas fa-newspaper prod-detail-icon"></i>
              </h1>
              <h3 className="productPage__right__description">
                lorem epsum lorem epsumlorem epsumlorem epsumlorem epsumlorem
                epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem
                epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum
                lorem epsumlorem epsumlorem epsum lorem epsum
              </h3>
            </div>
            <br /> <br />
            <div>
              <div className="head">
                <h1 className="product-details-heading">DELIVERY OPTIONS </h1>
                <img src={Truck} alt="img" />
              </div>

              <div className="Address-address-box Address-pincode-input Address-pdp-box">
                <input type="number" placeholder="Enter a PIN code" />
              </div>
              <p className="sub">
                Please enter PIN code to check delivery time & Pay on Delivery
                Availability
              </p>
              <ul className="wePromise">
                <li>lorem ipsum lorem text</li>
                <li>Pay on delivery might be available</li>
                <li>Easy 30 days returns and exchanges</li>
                <li>Try & Buy might be available</li>
              </ul>
              <br />
              <div className="head">
                <h1 className="product-details-heading">BEST OFFERS </h1>
                <img src={Price} alt="img" />
              </div>

              <h2 className="subH">
                <b>
                  {" "}
                  Best Price <span className="offer_price">₹ lorem price</span>
                </b>
              </h2>
              <ul className="giveBullets">
                <li>
                  Lorem isum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum
                </li>
                <li>
                  Coupon code: <b>LeagueX 150</b>
                </li>
                <li>
                  Coupon Discount: lorem ipsumlorem ipsumlorem ipsumlorem
                  ipsumlorem ipsum
                </li>
              </ul>

              <h2 className="sub_">View Eligible Products</h2>
              <br />
              <h1 className="product-details-heading">EMI option available</h1>
              <li className="bullets">EMI starting from Rs.87/month</li>
              <br />
              <p>Product Code: 14033232</p>
              <p>
                Seller:
                <span>
                  <b>Vishal Verma</b>
                </span>
              </p>
              <p className="sub">View Supplier Information</p>
            </div>
            <br />
            <div className="product_reviews">
              <div className="same">
                <h1 className="product-details-heading">Ratings</h1>
                <img src={Ratings} alt="img" className="rate___" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
