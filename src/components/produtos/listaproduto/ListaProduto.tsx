import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CardActionArea, CardMedia, makeStyles, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaProduto.css';
import { Box } from '@mui/material';
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
    
    <div className="listaCards">
      {produtos.map((produto) => (
        <Card className={classes.root} key={produto.id}>
            <CardActionArea>
            <Link to={`/produto/${produto.id}`} className='text-decorator-none' >
              <CardMedia
                className={classes.media}
                image={produto.fabricante}
                title={produto.nome}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className='titleDescription'>
                  {produto.nome}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className="productDescription"
                >
                  {produto.descricao}
                </Typography>
              </CardContent>
              </Link>
            </CardActionArea>
            <CardActions className='cardActions'>
              <Link to={`/produto/${produto.id}`} className='text-decorator-none'>
                <Button size="small" color="primary" variant="contained" fullWidth>
                  Ver mais
                </Button>
              </Link>
            </CardActions>
          </Card>
        
      ))}
    </div>
  );
}

export default ListaProduto;