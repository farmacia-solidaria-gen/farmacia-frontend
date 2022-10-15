import React , {useState, useEffect, ChangeEvent} from 'react';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import './CadastroUsuario.css';
import { Box } from '@mui/material';
import User from '../../models/User';
import { cadastroUsuario } from '../../service/Service';
import './CadastroUsuario.css';
import { toast } from 'react-toastify';



function CadastroUsuario() {
    let navigate = useNavigate();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            cpf: '',
            endereco: '' 
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            cpf: '',
            endereco: '' 
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        if (confirmarSenha === user.senha && user.senha.length >= 8) {
          try {
            await cadastroUsuario('/cadastroUsuario', user, setUserResult);
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
        } else {
          alert(
            'Senhas divergentes, ou menores que 8 caracteres. Por favor, verifique os campos.'
          );
        }
      }   
        
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>register</Typography>
                        <TextField required value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='nome' label='name' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField required value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='usuario' label='user' variant='outlined' name='usuario' margin='normal'fullWidth />
                        <TextField required value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='foto' label='Photograph (url)' variant='outlined' name='foto' margin='normal' fullWidth />
                        <TextField required value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='senha' label='password' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField required value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>)=> confirmarSenhaHandle(e)} id='confirmarSenha' label='confirm-password' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary' className="btnCadastrar">
                            Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CadastroUsuario;