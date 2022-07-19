import React from 'react'
import {
  Container,
    Grid,
} from "@mui/material";
import ProductCard from '../productCard/ProductCard'
import UseAllProducts from '../allProducts/UseAllProducts'
export default function House() {
  const [{ getProductsArray }] = UseAllProducts();
  let housePlots = getProductsArray.filter((row)=>{
        if(row.category=="House/Plots"){
            return row;
        }
    });
  return (
    <div>
    <Container>
      <h1>Lands & Plots</h1>
      <Grid item xs={12} sm={12} md={12} lg={12}>

     
      <Grid container spacing={2}>

        {housePlots.map((singleProduct) => {
          return (
         
             <ProductCard singleProduct={singleProduct} />
          );
        })}
      </Grid>
      </Grid>
    </Container>
  </div>
  )
}
