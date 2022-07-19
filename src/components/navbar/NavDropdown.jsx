import React from "react";
import { useState } from "react";
import "./NavDropDownStyle.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { ListItem, List, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
export default function NavDropdown() {
  const [open, setOpen] = useState(false);
  const [iconsOpen, setIconsOpen] = useState(true);

  const handleChangeOpen = () => {
    setOpen(true);
    setIconsOpen(false);
  };
  const handleChangeClose = () => {
    setOpen(false);
    setIconsOpen(true);
  };
  const categories = [
    {
      title: "Vehicles",
      link: "/vehicles",
    },
    {
      title: "Mobile Phones",
      link: "/phone",
    },
    {
      title: "MotorCycles",
      link: "/bike",
    },
    {
      title: "Electronics",
      link: "/electronics",
    },
    {
      title: "Land & Plots",
      link: "/house-plot",
    },
    {
      title: "Tv/Media",
      link: "/tv-media",
    },
    {
      title: "Tablets",
      link: "/tablet",
    },
    {
      title: "Computer & Accessories",
      link: "/computer-accessories",
    },
    {
      title: "Watches",
      link: "/watch",
    },
  ];

  return (
    <>
      <div className="dropDownMenu">
        <div>
          {open ? (
            <h4 style={{ cursor: "pointer" }} onClick={handleChangeClose}>
              ALL CATEGORIES
            </h4>
          ) : (
            <h4 style={{ cursor: "pointer" }} onClick={handleChangeOpen}>
              ALL CATEGORIES
            </h4>
          )}
        </div>
        <div>
          {iconsOpen ? (
            <ExpandMoreIcon
              style={{ cursor: "pointer" }}
              onClick={handleChangeOpen}
              id="expandMoreIcon"
            />
          ) : (
            <ExpandLessIcon
              style={{ cursor: "pointer" }}
              onClick={handleChangeClose}
              id="expandLessIcon"
            />
          )}
        </div>
      </div>
      {open ? (
        <div className="dropDownSection">
          <List>
            {categories.map((text) => (
              <ListItem>
                <Link
                  className="link"
                  onClick={handleChangeClose}
                  to={text.link}
                >
                  <ListItemText>{text.title}</ListItemText>
                </Link>
              </ListItem>
            ))}
          </List>
        </div>
      ) : null}
    </>
  );
}
