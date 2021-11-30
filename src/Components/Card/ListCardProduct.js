import React from "react";
import "./Card.css";
import CardProduct from "./CardProduct";
function ListCardProduct() {
  return (
    <div
      className="sale-page__card--list"
      style={
        {
          // height: "80vh",
          // msOverflowY: "hidden",
          // backgroundColor: "green",
        }
      }
    >
      <div className="sale-page__card--single">
        <CardProduct />
      </div>{" "}
      <div className="sale-page__card--single">
        <CardProduct />
      </div>{" "}
      <div className="sale-page__card--single">
        <CardProduct />
      </div>
      <div className="sale-page__card--single">
        <CardProduct />
      </div>{" "}
      <div className="sale-page__card--single">
        <CardProduct />
      </div>{" "}
      <div className="sale-page__card--single">
        <CardProduct />
      </div>{" "}
    </div>
  );
}

export default ListCardProduct;
