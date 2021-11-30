import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import ListCard from "../../Components/Card/ListCard";
import {
  Breadcrumbs,
  Divider,
  Link,
  Pagination,
  Typography,
} from "@mui/material";
import Message from "../../Components/Message/Message";

import ListFilter from "../../Components/List/ListFilter";
import ListCardProduct from "../../Components/Card/ListCardProduct";
import SaleHeader from "../../Components/Header/SaleHeader";

const images = [
  {
    label: "保護された状態を保ち、スタイリッシュに見える",
    des: "モダンなデザインの3層ハンドメイドマスク",

    imgPath:
      "https://images.unsplash.com/photo-1586942593822-268ff3828458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    label: "保護された状態を保ち、スタイリッシュに見える",
    des: "モダンなデザインの3層ハンドメイドマスク",

    imgPath:
      "https://images.unsplash.com/photo-1586216583928-5a1ecf74bce2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    label: "保護された状態を保ち、スタイリッシュに見える",
    des: "モダンなデザインの3層ハンドメイドマスク",

    imgPath:
      "https://images.unsplash.com/photo-1586579649032-1a9eacebf04a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    label: "保護された状態を保ち、スタイリッシュに見える",
    des: "モダンなデザインの3層ハンドメイドマスク",

    imgPath:
      "https://images.unsplash.com/photo-1548273989-e90f53ea0501?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

const theme = createTheme();

export default function SaleProductPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Divider style={{ marginBottom: "10px" }} />
        <SaleHeader images={images} />{" "}
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
            <Typography color="text.primary">保湿ケア</Typography>
          </Breadcrumbs>
          <Grid container spacing={2} style={{ marginTop: "5px" }}>
            <Grid item xs={12} md={3}>
              <ListFilter />
            </Grid>
            <Grid item xs={12} md={9}>
              <ListCardProduct />
            </Grid>
          </Grid>
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
        </main>
      </Container>
    </ThemeProvider>
  );
}
