import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "#2E3B55",
        color: "white",
      }}
    >
      <Toolbar>
        <Typography
          variant="h4"
          component="div"
          sx={{
            textAlign: "center",
            flexGrow: 1,
          }}
        >
          Künye Güç Çarpanı
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
