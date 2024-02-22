import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {
  Box,
  Typography,
  Avatar,
  ListItemAvatar,
  ListItemButton,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

function ContactListLeft() {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{ backgroundColor: "blue", height: "84vh" }}
      >
        <List sx={{ background: "#1f2c33" }}>
            <ListItem alignItems="flex-start">
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography color="white" variant="body1"></Typography>
                  }
                  secondary={
                    <Typography
                      sx={{ display: "inline", color: "white" }}
                      component="span"
                      variant="caption"
                      color="text.primary"
                    ></Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
        <List sx={{ background: "#1f2c33" }}>
            <ListItem alignItems="flex-start">
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography color="white" variant="body1"></Typography>
                  }
                  secondary={
                    <Typography
                      sx={{ display: "inline", color: "white" }}
                      component="span"
                      variant="caption"
                      color="text.primary"
                    ></Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
      </Grid>
    </Grid>
  );
}

export default ContactListLeft;
