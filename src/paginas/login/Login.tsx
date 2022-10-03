import React from 'react';
import {Grid, Box, Typography, TextField, Button} from '@mui/material';
 import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
        <Grid container className='container'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={15}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos'>Entrar</Typography>
                        <TextField id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth/>

                        <Box className='botao'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' className='logar'>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box className='subtitulos'>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não possui uma conta?</Typography>
                        </Box>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos'>Cadastre-se</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>
            </Grid>
        </Grid>
    );
}

export default Login;