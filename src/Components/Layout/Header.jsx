import React,{useState}from 'react'
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom"
import'../../Styles/HeaderStyle.css';
function Header() {
  const[mobileOpen,setMobileOpen]=useState(false)
  //menu Drawer
  const handleDrawerToggle=()=>{
    setMobileOpen(!mobileOpen)
  }
  const drawer=(
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
<Typography color={'goldenrod'} variant="h6" component="div" sx={{flexGrow:1,my:2}}>
                <FastfoodIcon/>
                My Resturant
            </Typography>
                <ul className='moblie-navigation'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    
                    <li>
                        <Link to={'/menu'}>Menu</Link>
                    </li>
                    
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                </ul>  
    </Box>
  )
  return (
    <>
    <Box>
        <AppBar component={"nav"} sx={{bgcolor:'black'}}>
            <Toolbar>
                <IconButton color='inherit' aria-label='open drawer' edge="start" sx={{mr:2, display:{sm:"none"},"&.muiDreawer-paper":{boxSizing:"border-box",width:"240px",},}}onClick={handleDrawerToggle}>
                    <MenuIcon/>
                </IconButton>
            <Typography color={'goldenrod'} variant="h6" component="div" sx={{flexGrow:1}}>
                <FastfoodIcon/>
                My Resturant
            </Typography>
            <Box sx={{display:{xs:'none',sm:"block"}}}>
                <ul className='navigation-menu'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    
                    <li>
                        <Link to={'/menu'}>Menu</Link>
                    </li>
                    
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </Box>
            </Toolbar>
        </AppBar>
        <Box component="nav">
            <Drawer variant="temporary" open={mobileOpen} 
            onClose={handleDrawerToggle}
            sx={{display:{xs:'block',sm:'none'}}}>
                {drawer}
            </Drawer>
        </Box>
        <Box>
        <Toolbar/>
        </Box>
    </Box>
    </>
  )
}

export default Header