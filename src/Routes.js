import "./assets/css/App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./components/Home";
import Shop from "./components/Shop";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemDetails from "./components/ItemDetails";
import Checkout from "./components/Checkout";

const Routes = () => {
  const [cartItems, setCartItems] = useState([]);

  class CartEntry {
    constructor(id, source, itemName, price, count) {
      this.id = id;
      this.source = source;
      this.itemName = itemName;
      this.price = price;
      this.count = count;
    }
  }

  const addToCart = (item) => {
    const updatedCartItems = [
      ...(cartItems.map((i) => i.id).includes(item.id)
        ? cartItems.map(i => {
          if (i.id === item.id) {
            return {
              ...i, count: item.count ? i.count + item.count : i.count + 1
            }
          }
          return i
        })
        : [...cartItems, new CartEntry(item.id, item.image, item.title, item.price, !item.count ? 1 : item.count)]),
    ];
    setCartItems(updatedCartItems);
  };

  const increaseCount = (id) => {
    const updatedCartItems = cartItems.map(entry => {
      return {
        ...entry, count: entry.id === id ? entry["count"] + 1 : entry["count"]
      }
    });
    setCartItems(updatedCartItems);
  }

  const decreaseCount = (id) => {
    const updatedCartItems = cartItems.filter(i => i.count !== 0).map(entry => {
      return {
        ...entry, count: entry.id === id ? entry["count"] - 1 : entry["count"]
      }
    });
    setCartItems(updatedCartItems);
  }

  const itemsTotal = cartItems.length === 0
    ? null
    : cartItems.map((i) => i.count).reduce((a, b) => a + b)
  
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar
          cart={itemsTotal}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/shop"
            render={() => <Shop addToCart={(item) => addToCart(item)} />}
          />
          <Route
            path="/shop/:id"
            render={(props) => (
              <ItemDetails
                addToCart={(item) => addToCart(item)}
                match={props.match}
              />
            )}
          />
          <Route
            exact
            path="/checkout"
            render={() => (
              <Checkout
                cartItems={cartItems}
                itemsTotal={itemsTotal}
                totalPrice={cartItems.length === 0 ? 0 : cartItems.map(i => i.count * i.price).reduce((a, b) => a + b)}
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