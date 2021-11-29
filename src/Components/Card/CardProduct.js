import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Card.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});
export default function CardProduct() {
  return (
    <Link to="/singleProduct" style={{ textDecoration: "none" }}>
      <Card
        className="landing-page__card--border"
        sx={
          {
            // maxWidth: { xs: 160, md: 240 },
          }
        }
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          image="https://i.pinimg.com/564x/70/64/e0/7064e0232bf3e7023d8f7e70dcbb8645.jpg"
        />
        <Divider style={{ marginTop: "10px", marginBottom: "20px" }} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            キールズ DS クリアリーホワイト{" "}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            肌（角質層）に素早く浸透し、高い美白効果
          </Typography>
        </CardContent>
        <Typography
          style={{
            color: "black",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          10,230円（税込）
        </Typography>
        <Divider style={{ marginTop: "10px", marginBottom: "20px" }} />
        <StyledRating
          readOnly
          name="customized-color"
          defaultValue={4.5}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          style={{ color: "#ff3d47", marginBottom: "20px" }}
        />{" "}
        <span style={{ color: "#ff3d47" }}> (600)</span>
      </Card>
    </Link>
  );
}
