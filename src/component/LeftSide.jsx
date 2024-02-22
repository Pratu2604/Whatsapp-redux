import { Grid,Avatar } from "@mui/material";
import AppBarLeft from "./AppBarLeft";
import SearchBarLeft from "./SearchBarLeft";
import ContactListLeft from "./ContactListLeft";

function LeftSide() {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} sx={{backgroundColor:"yellow" , height:"8vh"}}><AppBarLeft/></Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} sx={{backgroundColor:"red" , height:"8vh"}}><SearchBarLeft/></Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} sx={{backgroundColor:"orange" , height:"84vh"}}><ContactListLeft/></Grid>
    </Grid>
  );
}

export default LeftSide;
