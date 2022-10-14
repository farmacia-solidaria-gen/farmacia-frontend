import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaProduto.css';
import { Box } from '@mui/material';
import Produto from '../../../models/Produto';
import { busca } from '../../../service/Service';
import { toast } from 'react-toastify';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';

function ListaProduto() {

    const [produtos, setProdutos] = useState<Produto[]>([])
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
  
    useEffect(() => {
      if (token == "") {
        toast.error('Você precisa estar logado!',{
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
  
    async function getPost() {
      await busca("/produtos", setProdutos, {
        headers: {
          'Authorization': token
        }
      })
    }
  
    useEffect(() => {
  
      getPost()
  
    }, [produtos.length])
    
  return (
    <>
    {produtos.map(produtos => (
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Nome
            </Typography>
            <Typography variant="h5" component="h2">
              Descricao do Produto
            </Typography>
            <Typography variant="body2" component="p">
              Fabricante do Produto
            </Typography>
            <Typography variant="body2" component="p">
              Quantidade
            </Typography>
            <Typography variant="body2" component="p">
              Preco
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5}>

              <Link to="" className="text-decorator-none" >
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to="" className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
))}
      
    </>)
}

export default ListaProduto;