import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import ListCard from "../../Components/Card/ListCard";
import {
  Breadcrumbs,
  Divider,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Pagination,
  Select,
  Typography,
} from "@mui/material";
import Message from "../../Components/Message/Message";

import ConfirmPickProduct from "../../Components/ConfirmPickProduct/ConfirmPickProduct";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import "../../App.css";
import InformationProduct from "../../Components/InfomationProduct/InformationProduct";
import QuiltedImageList from "../../Components/ImageList/ImageSingleProduct";
const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const theme = createTheme();

export default function SinglePage() {
  const handlePick = () => {
    ConfirmPickProduct();
  };
  const [age, setAge] = React.useState("");

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Divider style={{ marginBottom: "10px" }} />
        <main>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              キールズホーム
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/getting-started/installation/"
            >
              スキンケア{" "}
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/getting-started/installation/"
            >
              スキンケア{" "}
            </Link>
            <Typography color="text.primary">保湿ケア</Typography>
          </Breadcrumbs>
          <Grid container spacing={2} style={{ marginTop: "5px" }}>
            <Grid item xs={12} md={5}>
              <img
                alt="green iguana"
                height="548px"
                src="https://i.pinimg.com/564x/70/64/e0/7064e0232bf3e7023d8f7e70dcbb8645.jpg"
              />{" "}
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography gutterBottom variant="h4" component="div">
                キールズ DS クリアリーホワイト{" "}
              </Typography>
              <Typography variant="body2" style={{ fontWeight: "bold" }}>
                美容液
              </Typography>{" "}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  variant="h4"
                  style={{ fontWeight: "bold", color: "red", padding: "20px" }}
                >
                  ¥10,230{" "}
                </Typography>{" "}
                <div>
                  {" "}
                  <StyledRating
                    readOnly
                    name="customized-color"
                    defaultValue={4.5}
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                  />{" "}
                  <span> (600)</span>
                </div>
              </div>
              <Typography variant="body" color="text.secondary">
                ふわふわのフリースがやさしく暖かく包み込む。コートのインナーや室内での羽織りにも。ふわふわのフリースがやさしく暖かく包み込む。コートのインナーや室内での羽織りにも。ふわふわのフリースがやさしく暖かく包み込む。コートのインナーや室内での羽織りにも。
              </Typography>{" "}
              <Divider style={{ marginTop: "10px", marginBottom: "20px" }} />
              <Typography
                variant="body"
                color="text.secondary"
                style={{ fontWeight: "bold" }}
              >
                カラー:{" "}
              </Typography>{" "}
              <div>
                {" "}
                <img
                  alt="green iguana"
                  height="40px"
                  src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/439140/chip/goods_08_439140_chip.jpg"
                />{" "}
                <img
                  alt="green iguana"
                  height="40px"
                  src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/439140/chip/goods_30_439140_chip.jpg"
                />{" "}
                <img
                  alt="green iguana"
                  height="40px"
                  src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/439140/chip/goods_08_439140_chip.jpg"
                />{" "}
                <img
                  alt="green iguana"
                  height="40px"
                  src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/439140/chip/goods_30_439140_chip.jpg"
                />{" "}
              </div>
              <div style={{ fontWeight: "bold", marginTop: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {" "}
                  <Typography variant="body" color="text.secondary">
                    サイズ:{" "}
                  </Typography>{" "}
                  <Link to="#">
                    <Typography variant="body" color="text.secondary">
                      サイズチャート{" "}
                    </Typography>{" "}
                  </Link>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                  }}
                >
                  <Box
                    className="single-page__size--hover"
                    style={{
                      width: "45px",
                      height: "45px",
                      padding: "10px",
                      borderStyle: "double",
                      fontSize: "20px",
                      marginRight: "8px",
                    }}
                  >
                    S
                  </Box>
                  <Box
                    className="single-page__size--hover"
                    style={{
                      width: "45px",
                      height: "45px",
                      padding: "10px",
                      borderStyle: "double",
                      fontSize: "20px",
                      marginRight: "8px",
                    }}
                  >
                    M
                  </Box>{" "}
                  <Box
                    className="single-page__size--hover"
                    style={{
                      width: "45px",
                      height: "45px",
                      padding: "10px",
                      borderStyle: "double",
                      fontSize: "20px",
                      marginRight: "8px",
                    }}
                  >
                    L
                  </Box>
                </div>
              </div>
              <div style={{ fontWeight: "bold", marginTop: "20px" }}>
                {" "}
                <Typography variant="body" color="text.secondary">
                  数量:{" "}
                </Typography>{" "}
                <div>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      1{" "}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={age}
                      onChange={handleChangeAge}
                      label="Age"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <Typography variant="body2" color="text.secondary">
                  在庫あり
                </Typography>{" "}
              </div>
              <ConfirmPickProduct />
              <div style={{ marginTop: "20px" }}>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  style={{ fontWeight: "bolder" }}
                >
                  この商品について
                </Typography>
                <div style={{ marginTop: "20px" }}>
                  <InformationProduct />
                </div>
              </div>
            </Grid>
          </Grid>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              width: "100%",
              textAlign: "center",
              borderBottom: "2px solid #000",
              lineHeight: "0rem",
              margin: "50px 0px 20px",
            }}
          >
            <span style={{ padding: "0 10px", backgroundColor: "#ffff" }}>
              {" "}
              カタログ{" "}
            </span>
          </Typography>
          <QuiltedImageList />
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              width: "100%",
              textAlign: "center",
              borderBottom: "2px solid #000",
              lineHeight: "0rem",
              margin: "50px 0px 20px",
            }}
          >
            <span style={{ padding: "0 10px", backgroundColor: "#ffff" }}>
              {" "}
              あなたのデザイン{" "}
            </span>
          </Typography>
          <ListCard />
          <Message />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "20px",
            }}
          >
            {" "}
            <Pagination count={10} />
          </div>
        </main>
      </Container>
    </ThemeProvider>
  );
}
