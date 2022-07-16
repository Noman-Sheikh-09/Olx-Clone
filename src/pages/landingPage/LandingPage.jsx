import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Banner from '../../assets/banner.png'
import './LandingPageStyle.css';
// import { ToastContainer } from 'react-toastify';
import { Grid } from '@mui/material';
import AllProducts from '../../components/allProducts/AllProducts';
export default function LandingPage() {
  return (
    <div>
    
    <Navbar style={{minWidth:500}} />
    <br />
    <img src={Banner} alt="Banner" className='bannerimg'/>
    <br />
    <Grid>
      
    </Grid>
  <AllProducts />
    {/* <ToastContainer /> */}
    </div>
  )
}
