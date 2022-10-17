
import React, { useState, useEffect, ChangeEvent } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { Box } from "@mui/material";
import { login } from "../../service/Service";
import { useDispatch } from "react-redux";
import { addId, addToken } from "../../store/tokens/actions";
import { toast } from "react-toastify";
import UserLogin from "../../models/UserLogin";

function Login() {


  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState('');


  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    cpf: "",
    endereco: "",
    token: "",
  });

  const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    cpf: "",
    endereco: "",
    token: "",
  });

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {

 function Login() {

import './Login.css';
import { useDispatch } from 'react-redux';
import { addId, addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';

function Login() {
    const dispatch = useDispatch();
  

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState ('');
  
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
      )
  
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
  
   

    return(

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

        <Grid container direction='row' justifyContent='center' alignItems='center'>

            <Grid alignItems='center' xs={6}>

                <Box paddingX={20}>

                    <form onSubmit={onSubmit}>

                        <Typography 
                        className='textos1'
                        variant='h3' 
                        gutterBottom 
                        color='textPrimary' 
                        component='h3' 
                        align='center'>Entrar
                        </Typography>


                        <TextField 
                        className='bg-Form'
                        value={userLogin.usuario} 
                        onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                        id='usuario' 
                        label='Usuário' 
                        variant='outlined' 
                        name='usuario' 
                        margin='normal' 
                        fullWidth />


                        <TextField 
                        value={userLogin.senha} 
                        onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                        id='senha' 
                        label='Senha' 
                        variant='outlined' 
                        name='senha' 
                        margin='normal' 
                        type='password'
                        fullWidth />


                        <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='outlined'>
                                    Logar
                                </Button>
                        </Box>

                    </form>


                    <Box display='flex' justifyContent='center' marginTop={2}>

                        <Box marginRight={1}>
                            <Typography 
                            variant='subtitle1' 
                            gutterBottom 
                            align='center'>Ainda não tem uma conta?
                            </Typography>
                        </Box>


                        <Link to='/cadastroUsuario'>
                            <Typography 
                            className='textos1'
                            variant='subtitle1' 
                            gutterBottom 
                            align='center'>Cadastre-se
                            </Typography>
                        </Link>
                            
                    </Box>
                    
                </Box>
            
            </Grid>

        <Grid xs={6} className='imagem'>

        </Grid>

        </Grid>
    );
}

export default Login;

