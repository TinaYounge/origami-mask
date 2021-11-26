import React from "react";
import ImgMediaCard from "./Card";
import "./Card.css";
function ListCard() {
  return (
    <div className="landing-page__card--list">
      <ImgMediaCard />
      <ImgMediaCard />
      <ImgMediaCard />
      <ImgMediaCard />
    </div>
  );
}

export default ListCard;
