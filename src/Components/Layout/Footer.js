import React from 'react'
import {Box, Typography} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
  return (
   <>
   <Box sx={{textAlign:"center", bgcolor:'#1A1A19',color:"white",p:3}}>
    <Typography variant='h5'sx={{"@media(max-width:600px)":{fontSize:"1rem"}}}>
        <Box sx={{my:3,"& svg":{fontSize:"50px",cursor:'pointer', mr:2,}}}>
        <InstagramIcon/>
        <TwitterIcon/>
        <YouTubeIcon/>
        <GitHubIcon/>
        </Box>
        All Right Reserved &copy; Mama's Kitchen
    </Typography>
   </Box>
   </>
   
  )
}

export default Footer