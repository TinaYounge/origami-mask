import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
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
    <Box component="footer" sx={{ bgcolor: "background.paper" }}>
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
            borderRadius: "5px",
          }}
        >
          <span> IPP air</span> - 天然素材にこだわり、愛情を込めて
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
          <Grid item xs={8}>
            <span style={{ fontSize: "18px" }}>会社概要 </span>
            <div>キールズ コミュニティ</div>
            <div>キールズの歴史</div>
            <div> 日焼け止め/スキンケア下地</div>
          </Grid>
          <Grid item xs={4}>
            <span style={{ fontSize: "18px" }}> IPP air をフォロー </span>
            <div>
              <FacebookIcon />
              <span> FaceBook</span>
            </div>
            <div>
              <InstagramIcon />
              <span> Instagram</span>
            </div>{" "}
            <div>
              <ChatBubbleOutlineIcon />

              <span> Line</span>
            </div>
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
