import {
  Typography,
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  Container,
  InputLabel,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderStyle.css";
import { useSelector } from "react-redux";
import {
  Hidden,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from "../dropdown/Dropdown";
import Logo from "../../assets/logo.svg";
import LeftDrawer from "../leftDrawer/LeftDrawer";
import { ExpandMore } from "@mui/icons-material";
export default function Header() {
  const userAuth = useSelector((state) => state.AuthReducer.isUserLoggedIn);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div>
      <div className="headerContainer">
        <div className="logoContainer">
          <Hidden mdUp>
            <LeftDrawer />
          </Hidden>
          <Link to="/" className="logoLink">
            <img src={Logo} alt="" className="logo" />
          </Link>
        </div>
        <div className="searchBox">
          <Box
            sx={{
              maxWidth: "100%",
              display: "flex",
              alignItems: "center",
            }}
            className="searchInnerBox"
          >
            <TextField
              placeholder="Find Cars,Mobile Phones and more ..."
              type="search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Link to={`/${search}`} sx={{ textDecoration: "none" }}>
              <SearchIcon className="searcIcon" />
            </Link>
          </Box>
        </div>
        <Hidden mdDown>
          {userAuth ? (
            <Dropdown />
          ) : (
            <Link to="/login" className="loginLink">
              <h5>Login</h5>
            </Link>
          )}
        </Hidden>
        <Hidden mdDown>
          <Link to="/add" className="sellLink">
            <h5 style={{ marginTop: "5px" }}>+SELL</h5>
          </Link>
        </Hidden>
      </div>
    </div>
  );
}
