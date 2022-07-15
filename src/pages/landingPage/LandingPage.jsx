import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Banner from '../../assets/banner.png'
import './LandingPageStyle.css';
import ProductCard from '../../components/productCard/ProductCard';
import { Grid } from '@mui/material';
export default function LandingPage() {
  return (
    <div>
    
    <Navbar style={{minWidth:500}} />
    <br />
    <img src={Banner} alt="Banner" className='bannerimg'/>
    <br />
   <Grid container align="center">
    
<Grid item xs={6} sm={12} md={3} lg={3}>
</Grid>
    </Grid>
    </div>
  )
}
