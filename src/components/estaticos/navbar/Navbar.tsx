import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box, Grid, Button } from '@mui/material';
import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <> 
        <AppBar position="static" className="cor-navbar">
                <Toolbar variant="dense">
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                           Logo
                        </Typography>
                    </Box>
                   
                   <Grid container justifyContent="flex-end">
                   <Box display="flex" justifyContent="flex-end">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Produtos
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit" >
                                Categorias
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Sobre nós
                            </Typography>
                        </Box>
                        <Link to='/' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="body2">
                                   <Button className='btn-logout' variant='contained'>logout</Button> 
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                   </Grid>

                </Toolbar>
            </AppBar>
    </>
  )
}

export default Navbar