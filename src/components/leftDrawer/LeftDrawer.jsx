import React, { useState } from 'react';
import './LeftDrawerStyle.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import './LeftDrawerStyle.css'





export default function LeftDrawer() {
const [open, setOpen] = useState(false)


const handleDrawerOpen = ()=>{
    setOpen(true)
}
const handleDrawerClose = ()=>{
    setOpen(false)
}



  return (
    <>
    

   
    <div style={{marginTop:'12px'}}>
        <MenuIcon size={30} onClick={handleDrawerOpen} />
        </div>
     
        <Drawer className='drawerPaper'
            variant="persistent"
            anchor="left"
        open={open}
        >
            <div onClick={handleDrawerClose}>
            <h3> X </h3>
            </div>
          
        </Drawer>
     
    </>
    
  )
}
