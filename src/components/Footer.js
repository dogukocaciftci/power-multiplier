import React from "react";
import { Typography, Link, Container } from "@mui/material";

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: "auto",
        backgroundColor: "#2E3B55",
        padding: "20px 0",
      }}
    >
      <Container>
        <Typography variant="body1" color="white" align="center">
          Made with love by{" "}
          <Link
            sx={{ color: "white" }}
            href="https://github.com/dogukocaciftci"
            target="_blank"
            rel="noopener noreferrer"
          >
            İbrahim Doğu Kocaçiftçi
          </Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
