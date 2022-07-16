import { Grid } from "@mui/material";
import React from "react";
import ProductCard from "../productCard/ProductCard";
import UseAllProducts from "./UseAllProducts";

export default function AllProducts() {
  const [{ getProductsArray }] = UseAllProducts();
  return (
    <div>
      <Grid container align="center">
        <Grid item xs={6} sm={6} md={3} lg={3}>
          

          {getProductsArray.map((singleProduct) => {
            return (
              <ProductCard
                singleProduct={singleProduct}
                key={singleProduct.id}
              />
            );
          })}
      
        </Grid>

      </Grid>
    </div>
  );
}
