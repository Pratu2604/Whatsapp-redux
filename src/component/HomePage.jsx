import React from "react";
import { Grid } from "@mui/material";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function HomePage() {
  return (
    <Grid container >
      <Grid item xs={12} sm={4} md={4} lg={4} sx={{backgroundColor:"purple", height:"100vh"}}>
        <LeftSide />
      </Grid>
      <Grid item sm={8} md={8} lg={8} sx={{ display: { xs: "none", sm:'block'},backgroundColor:"green",height:"100vh" }} >
        <RightSide />
      </Grid>
    </Grid>
  );
}

export default HomePage;
