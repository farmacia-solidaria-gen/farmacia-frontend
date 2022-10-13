import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import userEvent from '@testing-library/user-event';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useLocalStorage from 'react-use-localstorage';
import Categoria from '../../../models/Categoria';
import Produto from '../../../models/Produto';
import User from '../../../models/User';
import { busca, buscaId, post, put, } from '../../../service/Service';
import ListaProduto from '../listaproduto/ListaProduto';

function CadastroProduto() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [token, setToken] = useLocalStorage('token');
  
  

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    tipo: '',
  });

  
 //const userId = useSelector<TokenState, TokenState['id']>(
  //  (state) => state.id  )

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: '',
    descricao: '',
    fabricante: '',
    quantidade: 0,
    preco: 0,
    categoria: null,
    //usuario: null 
  });

 
  const [usuario, setUsuario] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    cpf: '',
    endereco: ''
  })

  useEffect(() => {
    if (token == "") {
        toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate("/login")}},[token]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
      //usuario: usuario
    });
  }, [categoria]);

  async function findByIdProduto(id: string) {
    await buscaId(`produto/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getCategoria();
    if (id !== undefined) {
      findByIdProduto(id);
    }
  }, [id]);

  async function getCategoria() {
    await busca('/categoria', setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedProduto(event: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [event.target.name]: event.target.value,
      categoria: categoria,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await put(`/produto`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        alert('Produto atualizado com sucesso');
      } catch (error) {
        alert('Erro ao atualizar, verifique os campos');
      }
    } else {
      try {
        await post(`/produto`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        alert('Produto cadastrado com sucesso');
      } catch (error) {
        alert('Erro ao cadastrar, verifique os campos');
      }
    }
    navigate('/produto');
  }

  return (
    <>
      <Container>
        <form onSubmit={onSubmit}>
          <Typography
            variant="h3"
            color="textSecondary"
            component="h1"
            align="center"
          >
            Formulário de cadastro Produto
          </Typography>

          <TextField
            value={produto.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
            id="nome"
            label="nome"
            variant="outlined"
            name="nome"
            margin="normal"
            fullWidth
          />

          <TextField
            value={produto.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
            id="descricao"
            label="descricao"
            name="descricao"
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <FormControl fullWidth variant="standard">
            <InputLabel id="demo-simple-select-helper-label">Categoria </InputLabel>

            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              onChange={(e) =>
                buscaId(`/categoria/${e.target.value}`, setCategoria, {
                  headers: {
                    Authorization: token,
                  },
                })
              }
            >
              {categorias.map((item) => (
                <MenuItem value={item.id} style={{ display: 'block' }}>
                  {item.tipo}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Escolha uma Categoria para o Produto</FormHelperText>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={categoria.id === 0}
            >
              Cadastrar
            </Button>
          </FormControl>
        </form>
      </Container>
    </>
  );
}

export default CadastroProduto;