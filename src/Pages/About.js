import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Typography } from '@mui/material'
import { Box } from "@mui/material"
const About = () => {
  return (
    <Layout>
      <Box sx={{ m: 6, width: "600px", ml: 10, fontSize: '30px', "@media(max-width:600px)": { width: '300px' } }}>
        <Typography variant='h3'>
          Our vision is to be the largest food service distribution platform for corporates & enterprise supply chains.<br /><br />

        </Typography>
      </Box>
      <Box sx={{ m: 3, width: "600px", ml: 10, textAlign: 'justify', fontSize: '30px', "@media(max-width:600px)": { width: '300px' } }}>
        <Typography variant='h4'>
          <p textAlign={'justify'}><b>Proprietary food service distribution and ordering platform.</b><br />
            Digitize Corporate Food Services and Elevate Operational Efficiency.<br /><br />
          </p>
          <p>
            <b>Digital Transformation</b>
          </p>
          <p textAlign={'justify'}>
            of food services to integrated food programs creating value & experience for employers & employees.<br /><br />
          </p>
          <p>
            <b>In-Built Expertise</b>
          </p>
          <p textAlign={'justify'}>
            for food service operators & corporates to manage their business seamlessly and efficiently.
          </p>
        </Typography>
      </Box>
    </Layout>
  )
}

export default About