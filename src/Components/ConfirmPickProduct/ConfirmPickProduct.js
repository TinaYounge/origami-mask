import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import "../../App.css";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ConfirmPickProduct() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box
        className="single-page__size--hover"
        onClick={handleClickOpen}
        style={{
          height: "50px",
          width: "300px",
          // paddingLeft: "80px",
          // paddingTop: "10px",
          borderStyle: "double",
          fontSize: "20px",
          marginTop: "20px",
        }}
        component="button"
      >
        カートに入れる
      </Box>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          sx={{ minWidth: { md: "600px" } }}
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <h4> カートに商品が追加されました </h4>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography gutterBottom style={{ fontWeight: "bold" }}>
              カラー:
            </Typography>
            <Typography gutterBottom>ブラック</Typography>
          </div>
          <Divider />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <Typography gutterBottom style={{ fontWeight: "bold" }}>
              サイズ:
            </Typography>
            <Typography gutterBottom>M</Typography>
          </div>
          <Divider />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <Typography gutterBottom style={{ fontWeight: "bold" }}>
              数量:{" "}
            </Typography>
            <Typography gutterBottom>2</Typography>
          </div>
        </DialogContent>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px",
            }}
          >
            <Button
              onClick={handleClose}
              className="single-page__size--hover"
              style={{
                height: "50px",
                width: "300px",
                // paddingLeft: "80px",
                // paddingTop: "10px",
                borderStyle: "double",
                fontSize: "20px",
                marginTop: "20px",
                borderRadius: "2px",
              }}
            >
              こちらも{" "}
            </Button>
            <Button
              onClick={handleClose}
              className="single-page__size--hover"
              style={{
                height: "50px",
                width: "300px",
                // paddingLeft: "80px",
                // paddingTop: "10px",
                marginLeft: "20px",
                borderStyle: "double",
                fontSize: "20px",
                marginTop: "20px",
                borderRadius: "2px",
              }}
            >
              こちらも{" "}
            </Button>{" "}
          </div>
        </div>
      </BootstrapDialog>
    </div>
  );
}
