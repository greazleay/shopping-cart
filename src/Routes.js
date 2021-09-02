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

class CartEntry {
  constructor(id, source, itemName, price, count = 1) {
    this.id = id;
    this.source = source;
    this.itemName = itemName;
    this.price = price;
    this.count = count;
  }
}

const Routes = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateCart = (item) => {
    const updatedCartItems = [...cartItems, new CartEntry(item.id, item.image, item.title, item.price)]
    setCartItems(updatedCartItems);
    const priceUpdate = updatedCartItems.map(i => i.price).reduce((a, b) => a + b)
    setTotalPrice(priceUpdate);
  };

  const increaseCount = (id) => {
    const updatedCartItems = cartItems.map(entry => {
      return {
        ...entry, count: entry.id === Number(id) ? entry["count"] + 1 : entry["count"]
      }
    });
    setCartItems(updatedCartItems);
    const priceUpdate = updatedCartItems.map(i => i.count * i.price).reduce((a, b) => a + b)
    setTotalPrice(priceUpdate);
  }

  const decreaseCount = (id) => {
    const updatedCartItems = cartItems.filter(i => i.count !== 0).map(entry => {
      return {
        ...entry, count: entry.id === Number(id) ? entry["count"] - 1 : entry["count"]
      }
    });
    setCartItems(updatedCartItems);
    const priceUpdate = updatedCartItems.length === 0 ? 0 : updatedCartItems.map(i => i.count * i.price).reduce((a, b) => a + b);
    setTotalPrice(priceUpdate);
  }
  
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar cart={cartItems.length === 0 ? null : cartItems.map(i => i.count).reduce((a, b) => a + b )} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/shop"
            render={() => <Shop updateCart={(item) => updateCart(item)} />}
          />
          <Route path="/shop/:id" component={ItemDetail} />
          <Route
            exact
            path="/checkout"
            render={() => (
              <Checkout
                cartItems={cartItems}
                totalPrice={totalPrice}
                increaseCount={(e) => increaseCount(e)}
                decreaseCount={(e) => decreaseCount(e)}
              />
            )}
          />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Routes;