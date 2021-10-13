import React from "react";
import { Link } from "react-router-dom";
import main from "../assets/images/main-img.jpg";

const Home = () => {
  return (
    <main className="home">
      <div>
        <h1>Everything you are looking for in one place</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
          volutpat commodo sed egestas egestas fringilla. Faucibus ornare
          suspendisse sed nisi lacus sed viverra tellus in. Faucibus nisl
          tincidunt eget nullam non nisi. Cursus mattis molestie a iaculis at
          erat.
        </p>
        <Link to="/shop"><button>Shop Items</button></Link>
      </div>
      <div>
          <img src={main} alt="Main-Page"/>
      </div>
    </main>
  );
};

export default Home;