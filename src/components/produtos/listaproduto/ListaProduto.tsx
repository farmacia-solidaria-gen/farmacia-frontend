import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaProduto.css';
import { Box } from '@mui/material';

function ListaProduto() {

  return (
    <>
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
    </>)
}

export default ListaProduto;