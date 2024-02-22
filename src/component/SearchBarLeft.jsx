import { Grid, InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import FilterListIcon from "@mui/icons-material/FilterList";

function SearchBarLeft() {
  return (
    <Grid display="flex">
        <Box width="90%" display="flex" >
          <IconButton type="button" aria-label="search">
            <SearchIcon sx={{ color: "white" }} />
          </IconButton>
          <InputBase
            sx={{color: "white", backgroundColor:"black" ,width:"100%"}}
            placeholder="Search or start new chat"
          />
        </Box>
        <Box width="10%">
          <FilterListIcon sx={{ color: "white" }} />
        </Box>
    </Grid>
  );
}

export default SearchBarLeft;
