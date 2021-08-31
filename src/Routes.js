import "./css/App.css";
import "./css/Shop.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./components/Home";
import Shop from "./components/Shop";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemDetail from "./components/ItemDetail";
import Checkout from "./components/Checkout";


const Routes = () => {
  const [cart, setCart] = useState(0);

  const updateCart = () => {
    setCart(cart + 1);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <NavBar cart={cart} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/shop"
            render={() => <Shop updateCart={updateCart} />}
          />
          <Route path="/shop/:id" component={ItemDetail} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Routes;
