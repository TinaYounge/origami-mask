import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Grid } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        IPP air{" "}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          style={{
            backgroundColor: "#91986B",
            color: "white",
            padding: "20px",
            borderBlockStyle: "double",
          }}
        >
          <span style={{ fontSize: "oblique" }}> IPP air</span> -
          天然素材にこだわり、愛情を込めて
        </Typography>
        {/* <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography> */}

        <Grid container spacing={2}>
          <Grid item xs={8} style={{ fontSize: "20px" }}>
            会社概要{" "}
          </Grid>
          <Grid item xs={4}>
            HHHI{" "}
          </Grid>
          <Grid item xs={4}>
            1{" "}
          </Grid>
          <Grid item xs={8}>
            1{" "}
          </Grid>
        </Grid>
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
