import React from "react";
import { Grid,Container,Button,Card,CardContent,Typography,CardActions , CardMedia} from "@mui/material";
import UseAllProducts from "../../components/allProducts/UseAllProducts";
import { useSelector } from "react-redux";
import './FvrtStyle.css';
import UseFvrt from "./UseFvrt";
import ProductCard from "../../components/productCard/ProductCard";
import CommonHooks from "../../commonHooks/CommonHooks";
export default function Fvrt() {
const [{getFavProductsArray,getProductsArray,}] = UseAllProducts()
const [{  favButtonHandler, 
  setFavLoading, unFavButtonHandler}] = UseFvrt()
  const [{ visible, loadMore }] = CommonHooks();

const user = useSelector(state=>state.AuthReducer.user)
// console.log('userid in fvrt', user?.uid);


const products = getFavProductsArray.filter((item)=>{
  if(item?.favUid == user?.uid){
  return item;
  }
})
// console.log('filtered products',products);

  return (
    <div>
      <Container>
        <h1>My Favourites</h1>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container spacing={2}>
            {products.slice(0, visible).map((singleProduct) => {
              return (
                <ProductCard singleProduct={singleProduct} />
              
              );
            })}
          </Grid>
        </Grid>
        {
        visible+1<products.length?
        <Button variant="contained" onClick={loadMore}style={{backgroundColor:'rgb(0, 47, 52)',color:'white',textAlign:'center',marginLeft:'40%', marginTop:'30px'}}>
          Load More
        </Button>
        :
        null
      }
      </Container>
    </div>
  );
}


  // <Card className="cardWrapper">
                                  
                //   <CardMedia
                //     component="img"
                //     alt="green iguana"
                //     height="140"
                //     image={myfav.image}
                //   />

                //   <CardContent>
                //     <Typography
                //       variant="h5"
                //       component="div"
                //       className="textEllips"
                //     >
                //       Rs. {myfav.price}
                //     </Typography>
                //     <Typography
                //       variant="body2"
                //       color="text.secondary"
                //       className="textEllips"
                //     >
                //       {myfav.title}
                //     </Typography>
                //   </CardContent>
                //   <CardActions>
                //     <button
                //       className="unfvrtBtn"
                //     // onClick={()=>unFavButtonHandler(favDocId)}
                //     >
                //       UnFavourite
                //     </button>
                    
                //   </CardActions>
                // </Card>