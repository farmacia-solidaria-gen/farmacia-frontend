import React , {useState, useEffect, ChangeEvent} from 'react';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import './CadastroUsuario.css';
import { Box, InputAdornment } from '@mui/material';
import { cadastroUsuario } from '../../service/Service';
import './CadastroUsuario.css';

import { toast } from 'react-toastify';
import User from '../../models/User';
import logo from "../../assets/logo.png";
import { AccountCircle } from '@mui/icons-material';
import { pink } from '@material-ui/core/colors';
import LockSharpIcon from '@mui/icons-material/LockSharp';
import CameraAltSharpIcon from '@mui/icons-material/CameraAltSharp';
import BusinessSharpIcon from '@mui/icons-material/BusinessSharp';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import AdminPanelSettingsSharpIcon from '@mui/icons-material/AdminPanelSettingsSharp';




function CadastroUsuario() {

    let navigate = useNavigate();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {

            id: 0,
            nome:'',
            usuario:'',
            senha: '',
            foto:'',
            cpf:'',
            endereco:'',
         
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome:'',
            usuario:'',
            senha:'',
            foto:'',
            cpf:'',
            endereco:'',
}) 

  
    
  
    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }
  
    const [cadastro, setCadastro] = useState(false)
  
    useEffect(() => {
      if(user.nome.length > 3 && user.usuario !== '' && user.senha.length >= 8) {
        setCadastro(true)
      }
    })
  
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
  
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if(confirmarSenha === user.senha && user.senha.length >= 8){
          try {
            await cadastroUsuario('usuarios/cadastrar', user, setUserResult);

            toast.success('Usuário cadastrado com sucesso!',{
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
          } catch (error) {
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro!',{
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });

          }
        }else{
          toast.error('Dados inconsistentes. Por Favor verificar as informações de cadastro!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'dark',
            progress: undefined,
        });
        }
    }
  
    useEffect(() => {
      if (userResult.id !== 0) {
          navigate("/login")
      }
  }, [userResult])
  
       
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='fundo'>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10} >
                    <form onSubmit={onSubmit} className='fundoForm'>
                        <Typography align='center'><img src={logo}/></Typography>
                        <Box>

                        <TextField 
                        required 
                        value={user.nome} 
                        onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} 
                        id='nome' 
                        label='Nome' 
                        variant='standard' 
                        name='nome' 
                        margin='normal' 
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <AccountCircle sx={{ color: pink[500] }}/>
                              </InputAdornment>
                            ),
                          }}
                        fullWidth />

                        <TextField 
                        required 
                        value={user.usuario} 
                        onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} 
                        id='usuario' 
                        label='Usuário' 
                        variant='standard' 
                        name='usuario' 
                        margin='normal'
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <MailOutlineSharpIcon sx={{ color: pink[500] }}/>
                              </InputAdornment>
                            ),
                          }}
                        fullWidth />

                        <TextField 
                        value={user.foto} 
                        onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} 
                        id='foto' 
                        label='Foto (url)' 
                        variant='standard' 
                        name='foto' 
                        margin='normal' 
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <CameraAltSharpIcon sx={{ color: pink[500] }}/>
                              </InputAdornment>
                            ),
                          }}
                        fullWidth />

                        <TextField 
                        required 
                        value={user.cpf} 
                        onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} 
                        id='cpf' 
                        label='CPF' 
                        variant='standard' 
                        name='cpf' 
                        margin='normal' 
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <AdminPanelSettingsSharpIcon sx={{ color: pink[500] }}/>
                              </InputAdornment>
                            ),
                          }}
                        fullWidth />

                        <TextField 
                        required 
                        value={user.endereco} 
                        onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} 
                        id='endereco' 
                        label='Endereço' 
                        variant='standard' 
                        name='endereco' 
                        margin='normal' 
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <BusinessSharpIcon sx={{ color: pink[500] }}/>
                              </InputAdornment>
                            ),
                          }}
                        fullWidth />
                        
                        <TextField 
                        required 
                        value={user.senha} 
                        onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} 
                        id='senha' 
                        label='Senha' 
                        variant='standard' 
                        name='senha' 
                        margin='normal' 
                        type='password' 
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <LockSharpIcon sx={{ color: pink[500] }}/>
                              </InputAdornment>
                            ),
                          }}
                        fullWidth />

                        <TextField 
                        required 
                        value={confirmarSenha} 
                        onChange={(e: ChangeEvent<HTMLInputElement>)=> confirmarSenhaHandle(e)} 
                        id='confirmarSenha' 
                        label='Confirmar Senha' 
                        variant='standard' 
                        name='confirmarSenha' 
                        margin='normal' 
                        type='password' 
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <LockSharpIcon sx={{ color: pink[500] }}/>
                              </InputAdornment>
                            ),
                          }}
                        fullWidth />

                        </Box>
                        
                        <Box display='flex' justifyContent='space-around'>
                        <Box marginTop={5} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary' className="btnCadastrar">
                                    Cadastrar
                            </Button>
                        </Box>


                        <Box marginTop={5} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                            <Button type='submit' variant='contained' color='primary' className="btnCancelar">
                                    Cancelar
                            </Button>
                            </Link>
                        </Box>
                        </Box>
                    </form>
                </Box>
            </Grid>



        </Grid>
    );
}

export default CadastroUsuario;