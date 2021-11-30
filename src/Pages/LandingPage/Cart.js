import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ListCard from "../../Components/Card/ListCard";
import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Message from "../../Components/Message/Message";
import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";

const theme = createTheme();

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
export default function Cart() {
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
          <Typography gutterBottom variant="h4" component="div">
            カート
          </Typography>
          <Typography gutterBottom variant="tex.secondary" component="div">
            この注文は送料無料になりました。
          </Typography>

          <Grid
            container
            spacing={2}
            style={{ padding: "10px", marginBottom: "20px", marginTop: "20px" }}
          >
            <Grid item xs={12} md={8}>
              <Paper
                sx={{
                  p: 2,
                  margin: "auto",
                  flexGrow: 1,
                  boxShadow: "none",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                      <Img
                        alt="complex"
                        src="https://i.pinimg.com/564x/70/64/e0/7064e0232bf3e7023d8f7e70dcbb8645.jpg"
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="h6" component="div">
                          ソフトボアフリースVネックカーディガン{" "}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          カラー: 30 NATURAL
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          サイズ: L
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          価格: ¥2,990
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          sx={{ cursor: "pointer", fontWeight: "bold" }}
                          variant="body2"
                        >
                          削除{" "}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      {" "}
                      <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ cursor: "pointer", fontWeight: "bold" }}
                      >
                        数量{" "}
                      </Typography>
                      <div>
                        <FormControl
                          variant="standard"
                          sx={{ m: 1, minWidth: 120 }}
                        >
                          <InputLabel id="demo-simple-select-standard-label">
                            1{" "}
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
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
                        <Typography sx={{ fontWeight: "bold" }}>
                          {" "}
                          小計: ¥17,940
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
              <Divider />
              <Paper
                sx={{
                  p: 2,
                  margin: "auto",
                  flexGrow: 1,
                  boxShadow: "none",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                      <Img
                        alt="complex"
                        src="https://i.pinimg.com/564x/70/64/e0/7064e0232bf3e7023d8f7e70dcbb8645.jpg"
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="h6" component="div">
                          ソフトボアフリースVネックカーディガン{" "}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          カラー: 30 NATURAL
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          サイズ: L
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          価格: ¥2,990
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          sx={{ cursor: "pointer", fontWeight: "bold" }}
                          variant="body2"
                        >
                          削除{" "}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      {" "}
                      <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ cursor: "pointer", fontWeight: "bold" }}
                      >
                        数量{" "}
                      </Typography>
                      <div>
                        <FormControl
                          variant="standard"
                          sx={{ m: 1, minWidth: 120 }}
                        >
                          <InputLabel id="demo-simple-select-standard-label">
                            1{" "}
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
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
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <div
                style={{
                  padding: "20px",
                  // height: "300px",
                  marginLeft: "10px",
                  backgroundColor: "rgba(175, 175, 175, 0.107)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "20px",
                  }}
                >
                  {" "}
                  <Typography
                    variant="h6"
                    component="div"
                    style={{ fontWeight: "bold" }}
                  >
                    注文内容{" "}
                  </Typography>{" "}
                  <Typography
                    variant="h6"
                    component="div"
                    style={{ fontWeight: "bold" }}
                  >
                    15 件{" "}
                  </Typography>{" "}
                </div>
                <Divider />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    marginTop: "10px",
                  }}
                >
                  {" "}
                  <Typography variant="h6" component="div">
                    注文内容{" "}
                  </Typography>{" "}
                  <Typography variant="h6" component="div">
                    15 件{" "}
                  </Typography>{" "}
                </div>
                <Divider />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    marginTop: "10px",
                  }}
                >
                  {" "}
                  <Typography variant="h6" component="div">
                    注文内容{" "}
                  </Typography>{" "}
                  <Typography variant="h6" component="div">
                    15 件{" "}
                  </Typography>{" "}
                </div>
                <Divider />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    marginTop: "10px",
                  }}
                >
                  {" "}
                  <Typography variant="h6" component="div">
                    注文内容{" "}
                  </Typography>{" "}
                  <Typography variant="h6" component="div">
                    15 件{" "}
                  </Typography>{" "}
                </div>
                <Divider />
                <Box
                  className="single-page__size--hover"
                  // onClick={handleClickOpen}
                  style={{
                    height: "50px",
                    width: "280px",
                    borderStyle: "double",
                    fontSize: "20px",
                    marginTop: "20px",
                  }}
                  component="button"
                >
                  カートに入れる
                </Box>
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
