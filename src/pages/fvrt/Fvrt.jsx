import React from "react";
import { Card,CardContent,Typography,CardActions , CardMedia} from "@mui/material";
// import UseAllProducts from "../../components/allProducts/UseAllProducts";
export default function Fvrt() {
//   const [{getProductsArray,getFavProductsArray}] = UseAllProducts();
//  console.log(getFavProductsArray);

  // const products = getFavProductsArray.filter((fvrt)=>{

  // })

  return (
    <div>
      <Card className="cardWrapper">
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          // image={myad.image}
        />

        <CardContent>
          <Typography variant="h5" component="div" className="textEllips">
            Rs. r4545
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="textEllips"
          >
            ncsjcn
          </Typography>
        </CardContent>
        <CardActions>
          <button
            className="dltBtn"
           
          >
            Delete
          </button>
        </CardActions>
      </Card>
    </div>
  );
}
