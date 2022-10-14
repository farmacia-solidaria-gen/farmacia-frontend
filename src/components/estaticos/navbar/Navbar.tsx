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
                   <Link to="/home" className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        </Link>
                        <Link to="/produtos" className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Produtos
                            </Typography>
                        </Box>
                        </Link>
                        <Link to="/categorias" className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit" >
                                Categorias
                            </Typography>
                        </Box>
                        </Link>
                        <Link to="/formularioCategoria" className='text-decorator-none'>
            <Box mx={1} className='cursor'>
                <Typography variant="h6" color="inherit">
                Cadastrar Categoria
                </Typography>
                </Box>
                </Link>
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