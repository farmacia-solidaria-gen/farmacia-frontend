import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { makeStyles, Card, CardActions, CardContent, Button, Typography, Grid, InputAdornment } from '@material-ui/core';
import './ListaProduto.css';
import { Box, CardActionArea, CardMedia } from '@mui/material';
import Produto from '../../../models/Produto';
import { busca } from '../../../service/Service';
import { toast } from 'react-toastify';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import './ListaProduto.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 350,
    objectFit: 'contain',
    width: 'auto',
  },
});

function ListaProduto() {
  const classes = useStyles();

 

  let navigate = useNavigate();
  const [produtos, setProdutos] = useState<Produto[]>([])
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  
  useEffect(() => {
    if (token === "") {
      toast.error('Você precisa estar logado',{
        position: 'top-right',
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
  
  async function getProduto() {
    await busca("/produto", setProdutos, {
      headers: {
        'Authorization': token
      }
    })
  }
  
  useEffect(() => {
    getProduto()
  }, [produtos.length])


    
 
    return (
      <>
      <Grid className='container-produto'>
        {
          produtos.map(produto => (
            <Box className='container2'>
              <Card className="tamanho">
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={produto.fabricante}
                    title={produto.nome}
                     />
                  <CardContent>
                    <Box className='box-descricao-produto' borderBottom={2}>
                    <Typography variant="body2" component="p" className='titulo-card-produto'>
                      {produto.nome}
                    </Typography>
                    
                    <Typography variant="body2" component="p">
                      {produto.descricao}
                    </Typography>
                    <Typography variant="body2" component="p" className='texto-preco-produto'>
                      R${produto.preco}
                    </Typography>
                    </Box>
                    <Typography variant="body2" component="p" className='texto-categoria-produto'>
                      Categoria: {produto.categoria?.tipo}
                    </Typography>
                    <Typography variant="body2" component="p" className='texto-categoria-produto'>
                      Quantidade: {produto.quantidade}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardContent className='caixa-botoes'>
                  <Box display="flex" justifyContent="center" mb={1.5}>

                    <Link to={`/formularioProduto/${produto.id}`} className="text-decorator-none" >
                      <Box mx={1}>
                        <Button variant="contained" className="botao-atualizar" size='small' color="primary" >
                          atualizar
                        </Button>
                      </Box>
                    </Link>
                    <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" className="botao-deletar" size='small' color="secondary">
                          deletar
                        </Button>
                      </Box>
                    </Link>
                  </Box>
                </CardContent>

              </Card>
            </Box >
          ))
        }
      </Grid>
    </>
  )
} 

export default ListaProduto;