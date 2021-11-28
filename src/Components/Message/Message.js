import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { FormControlLabel, Switch } from "@mui/material";

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Hidden" },
  { icon: <ShareIcon />, name: "Share" },
];

export default function Message() {
  // const [hidden, setHidden] = React.useState(false);
  // const handleHiddenChange = (event) => {
  //   setHidden(event.target.checked);
  // };

  return (
    <Box
      sx={{
        height: 320,
        transform: "translateZ(0px)",
        flexGrow: 1,

        position: "fixed",
        bottom: 16,
        right: 20,
        // display: { sx: "none" },
      }}
    >
      {/* <FormControlLabel
        control={
          <Switch
            checked={hidden}
            onChange={handleHiddenChange}
            color="primary"
          />
        }
        label="Hidden"
      /> */}
      <SpeedDial
        ariaLabel="SpeedDial playground  example"
        // hidden={hidden}
        // sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
