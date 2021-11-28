import React from "react";
import ImgMediaCard from "./Card";
import "./Card.css";
function ListCard() {
  return (
    <div className="landing-page__card--list">
      <div className="landing-page__card--single">
        <ImgMediaCard />
      </div>{" "}
      <div className="landing-page__card--single">
        <ImgMediaCard />
      </div>{" "}
      <div className="landing-page__card--single">
        <ImgMediaCard />
      </div>
      <div className="landing-page__card--single">
        <ImgMediaCard />
      </div>{" "}
      <div className="landing-page__card--single">
        <ImgMediaCard />
      </div>
    </div>
  );
}

export default ListCard;
