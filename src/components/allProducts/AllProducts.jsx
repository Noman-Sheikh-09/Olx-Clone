import { Button, Container, Grid } from "@mui/material";
import React from "react";
import CommonHooks from "../../commonHooks/CommonHooks";
import ProductCard from "../productCard/ProductCard";
import UseAllProducts from "./UseAllProducts";

export default function AllProducts() {
  const [{ getProductsArray, getFavProductsArray }] = UseAllProducts();
  const [{ visible, loadMore }] = CommonHooks();
  return (
    <div>
      <Container>


      <Grid container>
        <Grid item xs={12} sm={12} lg={12} md={12}>
          <Grid container spacing={2}>
            {getProductsArray.slice(0, visible).map((singleProduct) => {
              return (
                <ProductCard
                  singleProduct={singleProduct}
                  key={singleProduct.docId}
                />
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      {
        visible+1<getProductsArray.length?
        <Button variant="contained" onClick={loadMore} style={{backgroundColor:'rgb(0, 47, 52)',color:'white',textAlign:'center',marginLeft:'40%', marginTop:'30px'}} >
          Load More
        </Button>
        :
        null
      }
      </Container>
    </div>
  );
}
