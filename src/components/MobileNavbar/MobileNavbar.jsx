import React from 'react'
import { Grid, Hidden } from '@mui/material'
import {Link} from 'react-router-dom';
export default function MobileNavbar() {
    const categories = [
        {
            image : <img src="https://img.icons8.com/color/48/000000/carpool.png" />,
          title: "Vehicles",
          link: "/vehicles",
        },
        {
            image : <img src="https://img.icons8.com/color/48/000000/android.png" />,
          title: "Mobile Phones",
          link: "/phone",
        },
        {
            image : <img src="https://img.icons8.com/color/48/000000/motorcycle.png"  />,
          title: "MotorCycles",
          link: "/bike",
        },
        {
            image : <img src="https://img.icons8.com/color/48/000000/appliances.png" />,
          title: "Electronics",
          link: "/electronics",
        },
        {
            image : <img src="https://img.icons8.com/color/48/000000/land-sales.png" />,
          title: "Land & Plots",
          link: "/house-plot",
        },
        {
            image : <img src="https://img.icons8.com/color/48/000000/group-of-animals.png" />,
          title: "Animals",
          link: "/animals",
        },
        {
            image : <img src="https://img.icons8.com/color/48/000000/android-tablet.png" />,
          title: "Tablets",
          link: "/tablet",
        },
        {
            image : <img src="https://images.app.goo.gl/YxmoVo2sUW9U9Jwa8" />,
          title: "Computer & Accessories",
          link: "/computer-accessories",
        },
        {
             image : <img src="https://img.icons8.com/color/48/000000/android.png" />,
          title: "Watches",
          link: "/watch",
        },
      ];
    


  return (
    <div>
        <Hidden mdUp>
<div className='MblNavWrapper'>
<Grid container spacing={2}>
<Grid item xs={6} sm={4}>
<h4 style={{textAlign:'center'}}>Browse Categories</h4>
</Grid>
<Grid item xs={6} sm={8}>
                            </Grid>

{
    categories.map((item)=>{
        return (
            <Grid item xs={4}>
                 <Link className='link' to={item.link}>
                                        <div className='items'>
                                            {item.image}
                                            <h5>{item.title}</h5>
                                        </div>
                                        </Link>
                </Grid>
        )
    })
}


</Grid>
</div>
        </Hidden>
    </div>
  )
}
