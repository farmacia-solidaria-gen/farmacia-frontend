import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TokenState } from '../../store/tokens/tokensReducer';
import './Sobre.css';
import { toast } from 'react-toastify';

import { Box, Grid } from '@mui/material';
import { Typography } from '@mui/material';

import logo from "../../assets/logo.png";

function Sobre() {

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
        <Grid>
            <Grid container direction="row" alignItems="center">
                <Grid alignItems="center" item xs={12} className='center'>
                <Typography className='logo' align='center'><img src={logo}/></Typography>
                    <Typography variant="h4" component="h3" className='quemSomos'>Projeto Farmácia Solidária</Typography>
                </Grid>
                <Grid alignItems="center" item xs={12} className='center'>
                    <p className='text-sobre'>
                    Muitas vezes os medicamentos de alto custo não são fornecidos pelo sus e muitos pacientes não conseguem realizar seus tratamentos. Nossa missão é custear medicamentos de alto custo para pessoas que necessitem. Uma sociedade saudável é uma sociedade que cuida da mente e do corpo, resultando assim, em um futuro mais consciente.
                    </p>
                    <Typography variant="h4" gutterBottom color="textPrimary" component="h3" className='quemSomos' >Saúde e Bem Estar</Typography>
                    <p className='text-sobre-2'> 
                    E-commerce onde a venda dos produtos seja revertida para custear os remédios das pessoas necessitadas. As pessoas que realizarem as compras dos produtos, recebem uma "gamificação", onde adquirem descontos nos produtos e quanto maior o ranking maior o desconto. Para o fornecimento de produtos, teremos parceiros.
                    </p>
                </Grid>
            </Grid>
        </Grid>
    </>
);
}

export default Sobre;