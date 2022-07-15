import { Button, Grid } from "@mui/material";
import React from "react";
import Banner from "../../assets/banner.jpg";
import "./ProductCardStyle.css";
export default function ProductCard() {
  return (
    <>
      <div className="cardContainer">
        <img src={Banner} alt="" className="cardImg" width="200" />
        <h5>Price : 50000</h5>
        <p>New Banner for olx clone</p>
        <Button variant="contained" color="secondary">
          Favourite
        </Button>
      </div>
    </>
  );
}
