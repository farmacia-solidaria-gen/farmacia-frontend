import React from 'react';
import {Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './Footer.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


  function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
  );
  
  var footerComponent;
  
  if(token != ''){
      footerComponent =  <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid alignItems="center" item xs={12}>
        <Box style={{backgroundColor: "#D2FCF6", height: '78px'}}>
          <Box
            paddingTop={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              className='siga-texto'
              variant="h5"
              align="center"
              gutterBottom
            >
              Siga-nos nas redes sociais{' '}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center" className='gap-social'>
            <a
              href="https://www.facebook.com/generationbrasil"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon style={{ fontSize: 30, color: 'black' }} />
            </a>
            <a
              href="https://www.instagram.com/generationbrasil/"
              target="_blank" rel="noreferrer"
            >
              <InstagramIcon style={{ fontSize: 30, color: 'black' }} />
            </a>
            <a
              href="https://www.whatsapp.com/?lang=pt_br"
              target="_blank" rel="noreferrer"
            >
              <WhatsAppIcon style={{ fontSize: 30, color: 'black' }} />
            </a>
          </Box>
        </Box>
        <Box style={{ backgroundColor: '#D2FCF6', height: '40px' }}>
          <Box paddingTop={1}>
            <Typography
              className='direitos'
              variant="subtitle2"
              align="center"
              gutterBottom
            >
              © Todos os direitos reservados: Farmácia Solidária
            </Typography>
          </Box>
          <Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  
  }

    return (
        <>
            {footerComponent}
        </>
    )
    
    }

    export default Footer;