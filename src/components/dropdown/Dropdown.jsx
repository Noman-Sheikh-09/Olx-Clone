import React from "react";
import { useDispatch } from "react-redux";
import Popper from "@mui/material/Popper";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Button, Fade, Box, Paper } from "@mui/material";
import HelpCenterRoundedIcon from "@mui/icons-material/HelpCenterRounded";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import Avatar from "../../assets/avatar.png";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import SimCardRoundedIcon from "@mui/icons-material/SimCardRounded";
import "./DropdownStyle.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { doLogout } from "../../store/actions/AuthAction";

export default function Dropdown() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;
  const logoutHandler = () => {
    console.log("logoutandler press");
    dispatch(doLogout(navigate("/")));
  };

  return (
    <div>
      <Button aria-describedby={id} type="button" onClick={handleClick}>
        <img src={Avatar} alt="" className="avatarImg" />
        <ArrowDropDownIcon />
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{ p: 1 }}>
              <Paper elevation={5} style={{ width: "300px", height: "auto" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={Avatar} alt="Profile" className="profileImg" />
                  <div>
                    <small>Hello</small>
                    {/* here will be userName */}
                    <h3>Welcome</h3>
                    {/* here will be userName */}
                  </div>
                </div>

                <hr />
                <List component="nav" aria-label="main mailbox folders">
                  <ListItemButton
                  //   selected={selectedIndex === 0}
                  //   onClick={(event) => handleListItemClick(event, 0)}
                  >
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sell Now" />
                  </ListItemButton>
                  <ListItemButton
                  //   selected={selectedIndex === 1}
                  //   onClick={(event) => handleListItemClick(event, 1)}
                  >
                    <ListItemIcon>
                      <SimCardRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Ads" />
                  </ListItemButton>
                  <ListItemButton
                  //   selected={selectedIndex === 1}
                  //   onClick={(event) => handleListItemClick(event, 1)}
                  >
                    <ListItemIcon>
                      <FavoriteBorderRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Favourite" />
                  </ListItemButton>
                  <ListItemButton
                  //   selected={selectedIndex === 1}
                  //   onClick={(event) => handleListItemClick(event, 1)}
                  >
                    <ListItemIcon>
                      <HelpCenterRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Help" />
                  </ListItemButton>
                  <ListItemButton onClick={logoutHandler}>
                    <ListItemIcon>
                      <LogoutRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItemButton>
                </List>
              </Paper>
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
}
