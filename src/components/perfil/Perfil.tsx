import { Container, Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import User from '../../models/User'
import { buscaId } from '../../service/Service'
import { TokenState } from '../../store/tokens/tokensReducer'
import './Perfil.css'
import { Box, CardContent, CardMedia } from '@mui/material';
import { Link} from 'react-router-dom'
import { makeStyles, Card, CardActions,  Button, InputAdornment } from '@material-ui/core';


function Perfil() {

  const userId = useSelector<TokenState, TokenState['id']>(
    (state) => state.id
  )

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
);

  const [usuario, setUsuario] = useState<User>({
    id: +userId,
    nome: '',
    usuario: '',
    foto: '',
    senha: '',
    cpf: '',
    endereco: ''
    
  })

  async function getUserById(id: number) {
    await buscaId(`/usuario/${id}`, setUsuario, {
    headers: {Authorization: token}
    })
  }

  useEffect(() => {
    getUserById(+userId)
  }, [])

  return (
    <>
    <Grid container className='perfil-bg'>
      <Container>
        <div className='perfilContainer'>
          <Grid xs={3} alignItems='center' justifyContent='center' className='perfilusuario'>
          <img src={usuario.foto} alt="" className='imgPerfil' />
            
          </Grid>
          <Grid xs={9} justifyContent='center' className='perfilusuario'>
            <Typography className='titulo-perfil' variant='h4' align='center'>Produtos de {usuario.nome}</Typography>
            <Typography className='subtitulo-perfil' align='center'> Você tem um total de {usuario.produto?.length} produtos cadastrados.</Typography>

            <div className="postUser">
            {usuario.produto?.map((produtos) => (
              
              <div className="postPerfil">
                           
                <h3>{produtos.nome}</h3>
                <CardMedia
                    component="img"
                    height="250"
                    image={produtos.fabricante}

                    //className={classes.media}
                    
                     />
<Box display="flex" justifyContent="center" mb={1.5}>
<Link to={`/formularioProduto/${produtos.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="botao-atualizar" size='small' color="primary" >
                      Atualizar 
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarProduto/${produtos.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="botao-deletar" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                  </Box>
                <strong className='txt'>Categoria: {produtos.categoria?.tipo}</strong>
                <p>Quantidade:{produtos.quantidade}</p> 
                
              </div>


            ))}
            </div>
          </Grid>
        </div>
      </Container>
      </Grid>
    </>
  );
}
export default Perfil;