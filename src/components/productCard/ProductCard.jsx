import { Button, Grid, Paper } from "@mui/material";
import React from "react";
import "./ProductCardStyle.css";
export default function ProductCard({ singleProduct }) {
  return (
    <Paper elevation={5} className="cardContainer">
      <img src={singleProduct.image} alt="" className="cardImg" width="200" />
      <h5>Price : {singleProduct.price}</h5>
      <p className="cardTitle">{singleProduct.title}</p>
      <Button variant="contained" color="secondary">
        Favourite
      </Button>
    </Paper>
  );
}
