import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import SideBar from "./Sidebar";
import "../assets/css/Shop.css";

const Shop = (props) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const PER_PAGE = 4;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(items.length / PER_PAGE);

  const fetchItems = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setItems(data);
    setIsLoading(false);
  };

  const handleClick = (elm) => {
    const { textContent } = elm.target;
    setFilter(textContent);
  };

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  const filteredItems =
    filter === "" || filter === "All Items"
      ? items
      : items.filter(
        (item) => item.category.substring(1) === filter.substring(1)
      );

  const itemList = filteredItems.slice(offset, offset + PER_PAGE).map((item) => (
    <div key={item.id} className="shop-item">
      <Link to={`/shop/${item.id}`}>
        <div>
          <img src={item.image} alt="" />
        </div>
      </Link>
      <p>{item.title}</p>
      <p>${item.price}</p>
      <button id={item.id} onClick={() => props.addToCart(item)}>Add to cart</button>
    </div>
  ));

  return (
    <main className="shop">
      <SideBar handleClick={(e) => handleClick(e)} />
      {isLoading ? (
        <p>Loading Items....</p>
      ) : (
        <div className="section">
          <div className="shop-items">{itemList}</div>
          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
        </div>
      )}
    </main>
  );
};

export default Shop;
