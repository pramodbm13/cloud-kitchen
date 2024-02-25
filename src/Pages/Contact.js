import React from 'react'
import Layout from '../Components/Layout/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { Box, Paper, TableCell, TableContainer, TableHead, TableRow, Typography, Table, TableBody } from "@mui/material"
const Contact = () => {
    return (
        <Layout>
            <Box>

            <Box sx={{m:3,width:"600px",ml:10 ,fontSize:'30px',"@media(max-width:600px)":{width:'300px'}}}>
                <Typography variant='h1' fontWeight={'blod'}>
                    <b>CONTACT US</b><br /><br />
                </Typography>
            </Box>
            </Box>

            <Box sx={{m:3,width:"600px",ml:10,"@media(max-width:600px)":{width:'300px'}}}>
                <TableContainer component={Paper}>
                    <Table aria-label="Contact table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{bgcolor:'black',color:'white'}}align='center'>Contact Details</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                <SupportAgentIcon sx={{color:"red",pt:1}}/>123456
                                </TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell>
                                <EmailIcon sx={{color:"skyblue",pt:1}}/>help@gmail.com
                                </TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell>
                                <CallIcon sx={{color:"lightgreen",pt:1}}/>help@gmail.com
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Layout>
    )
}

export default Contact