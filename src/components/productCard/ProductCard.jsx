import {
  Card,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
} from "@mui/material";
import {Link} from 'react-router-dom'
import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./ProductCardStyle.css";


export default function ProductCard({ singleProduct }) {
  return (
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
        <Typography variant="h5" component="div" >
          Rs. {singleProduct.price}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          {singleProduct.title}
        </Typography>
      </CardContent>
      <CardActions>
        <button className="fvrtBtn">
           <FavoriteBorderIcon fontSize="30" />   &nbsp; Favourite
        </button>
      </CardActions>

    </Card>
  );
}
