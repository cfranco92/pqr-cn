import React from "react";

import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Link } from "react-router-dom";
import TopicRoundedIcon from "@mui/icons-material/TopicRounded";
import { useTheme } from "@mui/material/styles";

const Sidebar = () => {
  const theme = useTheme();
  return (
    <div>
      <Toolbar
        sx={{ backgroundColor: theme.palette.primary.main }}
        children={
          <>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                color: "GrayText",
              }}
            >
              CARPETA CIUDADANA
            </Typography>
          </>
        }
      />
      <List>
        <Link to="/dashboard">
          <ListItem button key={"Inicio"}>
            <ListItemIcon>
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={"Inicio"} />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/dashboard/documents">
          <ListItem button key={"Documentos"}>
            <ListItemIcon>
              <TopicRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={"Documentos"} />
          </ListItem>
        </Link>
        <Divider />
      </List>
    </div>
  );
};

export default Sidebar;
