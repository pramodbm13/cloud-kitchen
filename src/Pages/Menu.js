import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Button, Card, CardActions,  CardContent,  CardMedia, Typography } from "@mui/material"
import { MenuList } from '../data/data'
import StarIcon from '@mui/icons-material/Star';

const Menu = () => {
    const AddToCart=()=>{
        alert("Your order is taken :)")
    }
    return (
        <Layout>
            <Box sx={{display:'flex',flexWrap:'wrap', justifyContent:'center',m:2}}>
                {MenuList.map(menu => (
                    
                    <Card sx={{maxWidth:'900px', }}>
                        <CardActions>
                            <CardMedia
                                sx={{minHeight:'200px'}}
                                component={'img'}
                                src={menu.image}
                                alt={menu.name}
                            />
                        <CardContent>
                        <Typography variant='h3' gutterBottom={"div"}>
                            {menu.name}
                        </Typography>
                        <Typography variant='body2'>
                            {menu.description}
                        </Typography>
                        <Typography color={'gold'}>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                        </Typography>
                        <Typography variant='body2'>
                            ${menu.price}
                        </Typography>
                        <Typography>
                            <Button variant="outlined" onClick={AddToCart}>Add to cart</Button>
                        </Typography>
                        </CardContent>
                        </CardActions>
                    </Card>
                ))
                }
            </Box>
        </Layout>
    )
}

export default Menu