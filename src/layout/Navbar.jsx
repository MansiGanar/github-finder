import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Navbar = () => {
  return (
    <Box sx={{ padding: "1rem 2rem", background: "#CE2D4F" }}>
      <Grid container gap={1}>
        <Grid item>
          <GitHubIcon sx={{ color: "white" }} />
        </Grid>
        <Grid item>
          <Typography
            sx={{
              mr: 2,
              fontWeight: 700,
              fontSize: 18,
              color: "white",
            }}
          >
            Github Finder
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;
