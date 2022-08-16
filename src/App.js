import "./App.css";
import { useEffect, useState } from "react";
import LandingPage from "./pages/landing-page";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import ProductPage from "./pages/productpage/ProductPage";
import CartPage from "./pages/cart";
import { getCart } from "./pages/cart/useLocalStorage";

function App() {

  const cartItems = getCart();

  const [cartItemsCount, setCartItemsCount] = useState(cartItems.length);

  useEffect(() => {
    if (!localStorage.getItem("cartItems"))
      localStorage.setItem("cartItems", JSON.stringify([]));
    if (!localStorage.getItem("orderItems"))
      localStorage.setItem("orderItems", JSON.stringify([]));
  }, []);

  return (
    <div className="App">
      <Navbar
        cartItemsCount={cartItemsCount}
      />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/products/:id">
          <ProductPage setCartItemsCount={setCartItemsCount} />
        </Route>
        <Route exact path="/cart">
          <CartPage setCartItemsCount={setCartItemsCount} />
        </Route> 
      </Switch>
    </div>
  );
}

export default App;
