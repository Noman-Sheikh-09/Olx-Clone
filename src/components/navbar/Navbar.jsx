import React from 'react'
import { Hidden } from '@mui/material';
import './NavbarStyle.css';
import { Link } from 'react-router-dom';
import NavDropdown from './NavDropdown';
export default function Navbar() {
  return (
    <div>
          <Hidden mdDown>
          <div className='navbarSection'> 
<NavDropdown />
                <ul className='navList'>
                <li> 
                </li>
                <li><Link className='link' to='/vehicles'>Vehicles</Link></li>
                 <li><Link className='link' to='/phone'>Mobile Phones</Link></li>
                  <li><Link className='link' to='/bike'>Motorcycles</Link></li>
                  <li><Link className='link' to='/electronics'>Electronics</Link></li>
                  <li><Link className='link' to='/house-plot'>Land & Plots</Link></li>
                  <li><Link className='link' to='/tablet'>Tablets</Link></li>
                  <li><Link className='link' to='/animals'>Animals</Link></li>
                </ul>
                </div>
                </Hidden>
        </div>
  )
}
