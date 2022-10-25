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
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { pink } from '@material-ui/core/colors';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 350,
//     objectFit: 'contain',
//     width: 'auto',
//   },
// });

function ListaProduto() {
  // const classes = useStyles();

 

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
               
                  <CardContent>
                  <CardMedia
                    component="img"
                    height="250"
                    image={produto.fabricante}

                    //className={classes.media}
                    
                     />
                  
                    <Box className='box-produto' borderBottom={2}>
                    <Typography variant="body2" component="p" className='titulo-card-produto'>
                      {produto.nome}
                    </Typography>
                    
                    <Typography variant="body2" component="p">
                      {produto.descricao}
                    </Typography>
                    <Typography variant="body2" component="p" className='preco-produto'>
                      {new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency: 'BRL',
                      }).format(produto.preco)
                     }
                    </Typography>
                    </Box>
                    <Typography variant="body2" component="p" className='categoria-produto'>
                      Categoria: {produto.categoria?.tipo}
                    </Typography>
                    <Typography variant="body2" component="p" className='categoria-produto'>
                      Quantidade: {produto.quantidade}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardContent className='botoes'>
                  <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/carrinho/${produto.id}`} className='text-decorator-none'>
                            <Button variant="contained" className="botao-comprar" fullWidth  color="secondary">
                                Adicionar ao carrinho
                            </Button>
                        </Link>
                    {/* <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" className="botao-deletar" size='small' color="secondary">
                          deletar
                        </Button>
                      </Box>
                    </Link> */}
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