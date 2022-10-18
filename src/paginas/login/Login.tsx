import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Box, Typography, TextField, Button, InputAdornment } from '@mui/material';
import { Link, useNavigate} from 'react-router-dom';
import { login } from '../../service/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';
import { useDispatch } from 'react-redux';
import { addId, addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';
import logoFarm from '../../img/logo.svg';
import { AccountCircle } from '@mui/icons-material';
import { pink } from '@material-ui/core/colors';
import LockSharpIcon from '@mui/icons-material/LockSharp'

function Login() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            cpf: '',
            endereco: '',
            token: '',
        }
        );

        const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            cpf: '',
            endereco: '',
            token: '',
        });


        function updatedModel(e: ChangeEvent<HTMLInputElement>) {

            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }

            useEffect(()=> {
                if(respUserLogin.token !== ''){
                    dispatch(addToken(respUserLogin.token))
                    dispatch(addId(respUserLogin.id.toString()))
                    navigate('/home');
                }
            }, [respUserLogin.token])


        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
            try{
                await login(`/usuario/logar`, userLogin, setRespUserLogin);
                toast.success('Logado', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            }catch(error){
                toast.error('Login ou senha inválidos', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            }
        }

    return (

<>
        <Grid xs={12} className='imagem-login' >
        <Box paddingX={50} className='box'>
        <div className="vidro">
            <form onSubmit={onSubmit} className= "form">
              <Typography
                variant="h3"
                gutterBottom
                color="textPrimary"
                component="h3"
                align="center"
                className='textos' 
                
              >
                 <img src={logoFarm} alt=""  />
                 
                
              </Typography>
              <TextField className='txt-style inputBranco' 
                value={userLogin.usuario}
                onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)}
                id="usuario"
                label="Usuário"
                placeholder="Entre com seu usuário"
                name="usuario"
                margin="normal"
                fullWidth
                variant="standard"
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle sx={{ color: pink[500] }}/>
                      </InputAdornment>
                    ),
                  }}
                
              />
              <TextField className='txt-style inputBranco'
                value={userLogin.senha}
                onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)}
                id="senha"
                label="Senha"
                variant="standard"
                name="senha"
                margin="normal"
                type="password"
                placeholder="Entre com sua senha"
                fullWidth
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockSharpIcon sx={{ color: pink[500] }}/>
                      </InputAdornment>
                    ),
                  }}
              />
                <Box marginTop={2} textAlign='center'>
                                      
                    <Button type='submit' variant='contained' className="btn-login" >
                        Logar
                    </Button>

                </Box>
                <Box display='flex' justifyContent='center' marginTop={2}>
              <Box marginRight={1}>
                <Typography variant='subtitle1' gutterBottom align='center' className='bold'>
                  Não tem uma conta?
                </Typography>
              </Box>
              <Link to='/cadastrousuario'  className='textos'>
                  <Typography variant='subtitle1' gutterBottom align='center' className='bold'>
                      Cadastre-se
                  </Typography>
              </Link>
            </Box>
            </form>
           
          </div>
          </Box>
        </Grid>
    </>

      
    );
}

export default Login;