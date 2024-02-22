import { Avatar, Grid } from "@mui/material";

function AppBarLeft() {
  return (
    <Grid container mt={0.5} display="flex" gap={2.5}>
        <Grid item xs={1.2} sm={1} md={0.8} lg={3}>
          <Avatar />
        </Grid>
        {/* <Grid item xs={1.2} sm={1} md={0.8} lg={3}>
          <Avatar />
        </Grid>
        <Grid item xs={1.2} sm={1} md={0.8} lg={3}>
          <Avatar />
        </Grid>
        <Grid item xs={1.2} sm={1} md={0.8} lg={3}>
          <Avatar />
        </Grid>
        <Grid item xs={1.2} sm={1} md={0.8} lg={3}>
          <Avatar />
        </Grid>
        <Grid item xs={1.2} sm={1} md={0.8} lg={3}>
          <Avatar />
        </Grid> */}
    </Grid>
  );
}

export default AppBarLeft;
