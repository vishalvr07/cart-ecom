

import "./CartDisplayProduct.css";



function CartDisplayProduct(props) {

  const {  name, image, price} =
    props;

  return (
    <div className="single-cart-product-card">
      <div className="cart-card-flex">
        <div className="cart-product-image">
          <img src={image} alt={name} />
        </div>
        <div className="cart-product-details">
            <h3 className="capitalize">{name}</h3>
        <h6>   Seller : Vishal Verma</h6>
         <h3>  Price : {price} Inr</h3>
        </div>
      </div>
    </div>
  );
}

export default CartDisplayProduct;
