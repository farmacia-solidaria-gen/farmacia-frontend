import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box, Grid, Button } from '@mui/material';
import {Link, useNavigate} from "react-router-dom";
import './Navbar.css'
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import { toast } from 'react-toastify';
import logo from '../../../img/logo.svg'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );

    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
      dispatch(addToken(''));
      toast.info('Usuário deslogado!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'dark',
        progress: undefined,
      });
      navigate('/login')
    }

    var navbarComponent;

    if(token != ''){
        navbarComponent = <AppBar position="static" className="cor-navbar">
        
        <Toolbar variant="dense">
          <Grid container justifyContent='space-between' alignItems='center'>
            <Box>
              <Link to="/home">
                <Box className="cursor">
                  <Typography variant="h5" color="inherit" className="logo">
                    <img src={logo} alt="" />
                  </Typography>
                </Box>
              </Link>
            </Box>

            <Box display="flex" justifyContent="center">
              <Link to="/produtos" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography className='principais' variant="h6">
                    Produtos
                  </Typography>
                </Box>
              </Link>
              <Link to="/categorias" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography className='principais'variant="h6">
                    Categorias
                  </Typography>
                </Box>
              </Link>
              <Link to="/formularioCategoria" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography className='principais' variant="h6">
                    Cadastrar Categoria
                  </Typography>
                </Box>
              </Link>
              <Link to="/equipe" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography className='principais' variant="h6">
                    Equipe
                  </Typography>
                </Box>
              </Link>
              <Link to="/sobre" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography className='principais' variant="h6">
                    Sobre nós
                  </Typography>
                </Box>
              </Link>

              <Link to='/perfil' className='text-decorator-none'>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit" className='perfill-icon'>
                        <AccountCircleIcon className="perfil-icon"/>
                    </Typography>
                </Box>
            </Link>

              <Link to="/carrinho" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography variant="h6">
                    <ShoppingCartIcon className='carrinho-logo'/>
                  </Typography>
                </Box>
              </Link>
            </Box>
            

            <Box>
              <Box mx={1} className="cursor">
                <Typography variant="body2">
                  <Button className="btn-logout" variant="outlined" onClick={goLogout}>
                    sair
                  </Button>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    }

  return (
    <> 
        {navbarComponent}
    </>
  );
}

export default Navbar;