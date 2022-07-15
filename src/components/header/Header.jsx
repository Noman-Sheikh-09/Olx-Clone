import { Typography, Box, TextField, Select, MenuItem, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./HeaderStyle.css";
import {useSelector} from 'react-redux'
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from "../dropdown/Dropdown";
export default function Header() {
  const userAuth = useSelector(state=>state.AuthReducer.isUserLoggedIn)
  console.log("user logiin in header", userAuth);
  return (
    <div>
      <div className="headerContainer">
        <Link to="/" style={{ textDecoration: "none", fontSize:'30' }}>
          <Typography className="logo">olx</Typography>
        </Link>
        <div className="locBox">
          <TextField placeholder="Location" />

          <Select>
            <MenuItem value={10}>Faisalbad</MenuItem>
            <MenuItem value={20}>Karachi</MenuItem>
            <MenuItem value={30}>Lahore</MenuItem>
          </Select>
        </div>
        <div className="searchBox">
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              fullWidth
              placeholder="Find Cars,Mobile Phones and more ..."
            />
            <SearchIcon className="searcIcon" />
          </Box>
        </div>
        {
          userAuth?
          <Dropdown />
          :
        <Link to="/login" className="loginLink">
          <h5>Login</h5>
        </Link>
        }

        <Link to="/add" className="sellLink">
          <h5 style={{marginTop:'5px'}}>+SELL</h5>
        </Link>
     
      </div>
    </div>
  );
}
