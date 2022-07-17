import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Banner from '../../assets/banner.png'
import './LandingPageStyle.css';
// import { ToastContainer } from 'react-toastify';
import { Grid } from '@mui/material';
import AllProducts from '../../components/allProducts/AllProducts';
import { Container } from '@mui/system';
export default function LandingPage() {
  return (
    <div>
    
    
    <br />
    <img src={Banner} alt="Banner" className='bannerimg'/>
    <br />
    <Container>
    <Grid container spacing={2}>
    <Grid item xs={12} sm={12}>
<h2>Fresh Recommended</h2>
    </Grid>

      <Grid item xs={12} sm={12} >
      <AllProducts />

      </Grid>
    </Grid>
    </Container>
    {/* <ToastContainer /> */}
    </div>
  )
}
