import React, { useState } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard(props) {

  return (
    <div className="productCard__container slider-card">
      <Link to={`/products/${props.id}`}>
        <div
          style={{
            backgroundImage: `url('${props.url}')`,
          }}
          className="productCard__productImage"
        ></div>
        <div className="productCard__infoContainer">
          <div className="productCard__infoContainerMiddle">
            <h2 className="productCard__title">
              {props.name.length < 30
                ? props.name
                : `${props.name.slice(0, 30)} ...`}
            </h2>
          </div>
          <div className="productCard__infoContainerMiddle">
            <h2 >
              For {props.gender} In {props.color} Color
            </h2>
          </div>
          <div className="productCard__infoContainerTop">
            <h2 className="productCard__priceTag">
              <strong>{props.price} INR</strong>
            </h2>

          </div>
          {/* <div className="productCard__infoContainerBottom">
          <button className="buyButton">Buy Now</button>
        </div> */}
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
