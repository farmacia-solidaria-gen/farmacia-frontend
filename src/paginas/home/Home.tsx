import React, { useEffect } from 'react';
import {Typography, Box, Grid, Button} from '@mui/material';
import TabProduto from '../../components/produtos/tabproduto/TabProduto';
import ModalProduto from '../../components/produtos/modalproduto/ModalProduto';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    
    useEffect(() => {
    if (token == "") {
        toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate("/login")

    }
}, [token])


    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#3acc59" }}>

                <Grid alignItems="center" item xs={6}>

                    <Box paddingX={20} >

                        <Typography 
                        variant="h3" 
                        gutterBottom 
                        color="textPrimary" 
                        component="h3" 
                        style={{ color: "white", fontWeight: "bold" }}
                        align="center">Seja Bem Vinde
                        </Typography>


                        <Typography 
                        variant="h5" 
                        gutterBottom 
                        color="textPrimary" 
                        component="h5" 
                        style={{ color: "white", fontWeight: "bold" }}
                        align="center">encontre aqui o que você procura!
                        </Typography>

                    </Box>


                    <Box display="flex" justifyContent="center">

                        <Box marginRight={1}>
                            <ModalProduto />
                        </Box>

                        <Link to='/produtos' className='text-decorator-none'>
                        <Button variant="outlined">Ver Produtos</Button>
                        </Link>

                    </Box>

                </Grid>


                <Grid item xs={6}>
                    <img 
                    src="https://thumbs.dreamstime.com/b/farmaceuta-wektoru-ilustracja-farmaceuta-na-tle-p%C3%B3%C5%82ki-z-lekarstwami-71719701.jpg" alt="" 
                    width="600px" 
                    height="500px" />
                </Grid>


                <Grid xs={12} style={{ backgroundColor: "white" }}>
                    <TabProduto />
                </Grid>


            </Grid>
        </>
    );
}

export default Home;