import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import Banner from "../Assets/1.png"
import "../Styles/HomeStyle.css";

const Home = () => {
  return (
   
     <Layout>
        <div className="home" style={{backgroundImage:`url(${Banner})`}}>
            <div className='headerContainer'>
                <h1>Food Website</h1>
                <p>Best Food In India</p>
                <Link to="/menu">
                <Button variant="outlined">
                 order
                </Button>
                </Link>
            </div>
        </div>
        
     </Layout>
  )
}

export default Home