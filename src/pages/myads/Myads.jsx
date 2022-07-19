import {
  Container,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
  Grid,
  Button,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import "./MyadsStyle.css";
import { Link } from "react-router-dom";
// import UseMyds from "./UseMyds";
import { useSelector } from "react-redux";
import UseAllProducts from "../../components/allProducts/UseAllProducts";
export default function Myads() {
  const user = useSelector((state) => state.AuthReducer.user);
  const [{ getProductsArray }] = UseAllProducts();
  const { id: docId } = useParams();

  // console.log("uid in myads ", user?.uid);
  //   console.log("user in myads ", user);
  // console.log("data in myads", getProductsArray);
  const myads = getProductsArray?.filter((row) => {
    if (row?.userId === user?.uid) {
      return row;
    }
  });
  console.log("data in My ads page", myads);

  

  return (
    <div>
      <Container>
        <h1>My Ads</h1>
        <Grid item xs={12} sm={12} md={12} lg={12}>

       
        <Grid container spacing={2}>

          {myads.map((myad) => {
            return (
           
                <Card className="cardWrapper">
              
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={myad.image}
                  />
             
                  

                  <CardContent>
                    <Typography variant="h5" component="div">
                      Rs. {myad.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {myad.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <button className="dltBtn">
                      Delete
                    </button>
                    <button color="inherit" className="editBtn">
                      Edit
                    </button>
                  </CardActions>
                </Card>
          
            );
          })}
        </Grid>
        </Grid>
      </Container>
    </div>
  );
}
