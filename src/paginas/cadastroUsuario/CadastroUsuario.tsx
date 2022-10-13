import React , {useState, useEffect, ChangeEvent} from 'react';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import './CadastroUsuario.css';
import { Box } from '@mui/material';
import User from '../../models/User';
import { cadastroUsuario } from '../../service/Service';
import './CadastroUsuario.css';
import UserLogin from '../../models/UserLogin';



function CadastroUsuario() {
    let navigate = useNavigate();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<UserLogin>(
        {
            id: 0,
            nome:'',
            usuario:'',
            senha: '',
            foto:'',
            cpf:'',
            endereco:'',
            token:''
        })

    const [userResult, setUserResult] = useState<UserLogin>(
        {
            id: 0,
            nome:'',
            usuario:'',
            senha:'',
            foto:'',
            cpf:'',
            endereco:'',
            token:''
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

        console.log(user)

    }
    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        if (confirmarSenha === user.senha && user.senha.length >= 8) {
          try {
            await cadastroUsuario('usuario/cadastrar', user, setUserResult);
            alert('Usuário criado com sucesso. Efetue seu login! ');
          } catch (error) {
            alert('Falha ao cadastrar o usuário. Por favor, confira os campos');
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
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                        <TextField required value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField required value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal'fullWidth />
                        <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='foto' label='foto (url)' variant='outlined' name='foto' margin='normal' fullWidth />
                        <TextField required value={user.cpf} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='cpf' label='cpf' variant='outlined' name='cpf' margin='normal' fullWidth />
                        <TextField required value={user.endereco} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='endereco' label='endereco' variant='outlined' name='endereco' margin='normal' fullWidth />
                        <TextField required value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField required value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>)=> confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
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

export default CadastroUsuario