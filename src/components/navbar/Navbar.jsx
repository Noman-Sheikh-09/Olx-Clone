import React from 'react'
import { AppBar, TextField, Toolbar, Typography } from '@mui/material'
import './NavbarStyle.css';
import SearchIcon from '@mui/icons-material/Search';
export default function Navbar() {
  return (
    <>
      <AppBar color='inherit' style={{height:80}}  >
        <Toolbar >
            <div className='navbarContainer'>
            <Typography>
                olx
            </Typography>
            <div className="locBox">

            <TextField  placeholder='Location' className='locFeild' />

            </div>
            <div className='searchBox'>
            <TextField  placeholder='Search' type="search"  className='searchFeild' />

    <SearchIcon className='searchIcon' />

            </div>

            </div>
           
        </Toolbar>
        </AppBar>  
    </>
  )
}
