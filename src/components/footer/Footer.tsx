import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css'


// import purple from '@material-ui/core/colors/purple';
// const roxin = purple[300];

function Footer() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box style={{backgroundColor: "#68D0C9", height: '78px'}}>
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                style={{fontSize: 22, color: 'white' }}
              >
                Siga-nos nas redes sociais{' '}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a
                href="https://www.facebook.com/generationbrasil"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon style={{ fontSize: 30, color: 'white' }} />
              </a>
              <a
                href="https://www.instagram.com/generationbrasil/"
                target="_blank" rel="noreferrer"
              >
                <InstagramIcon style={{ fontSize: 30, color: 'white' }} />
              </a>
              <a
                href="https://www.linkedin.com/school/generationbrasil/"
                target="_blank" rel="noreferrer"
              >
                <LinkedInIcon style={{ fontSize: 30, color: 'white' }} />
              </a>
            </Box>
          </Box>
          <Box style={{ backgroundColor: '#408575', height: '40px' }}>
            <Box paddingTop={1}>
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                style={{ color: 'white' }}
              >
                © 2022 Copyright: Farmácia Solidária
              </Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://brasil.generation.org" rel="noreferrer">
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  style={{ color: 'white' }}
                  align="center"
                >
                  brasil.generation.org
                </Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;