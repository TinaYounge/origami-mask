import React from "react";
import ImgMediaCard from "./Card";
import "./Card.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
function ListCard() {
  return (
    <div
      className="landing-page__card--list"
      style={
        {
          // height: "80vh",
          // msOverflowY: "hidden",
          // backgroundColor: "green",
        }
      }
    >
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
      <div
        className="landing-page__card--list--next"
        style={{
          // marginTop: "-35vh",
          // marginBottom: "200px",
          // color: "red",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ArrowBackIosNewIcon />
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
}

export default ListCard;
