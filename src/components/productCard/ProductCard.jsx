import {
  Card,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
  Grid,
} from "@mui/material";
import {useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./ProductCardStyle.css";
import UseFvrt from "../../pages/fvrt/UseFvrt";

export default function ProductCard({ singleProduct }) {
  const [{favButtonHandler, 
    setFavLoading, 
    setUnFavLoading}]= UseFvrt();


  return (
    <>
    
      <Card className="cardWrapper">
        <Link to={`/singleProduct/${singleProduct.docId}`}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={singleProduct.image}
          />
        </Link>
        <CardContent>
          <Typography variant="h5" component="div" className="textCard">
            Rs. {singleProduct.price}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="textCard">
            {singleProduct.title}
          </Typography>
        </CardContent>
        <CardActions>
        
            <button className="fvrtBtn" onClick={()=>favButtonHandler(singleProduct)} >
            <FavoriteBorderIcon fontSize="30" /> &nbsp; Favourite
          </button>
          
          
          
        </CardActions>
      </Card>
    </>
  );
}
