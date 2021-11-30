import React from "react";
import ImgMediaCard from "./Card";
import "./Card.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ListCard from "./ListCard";
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
