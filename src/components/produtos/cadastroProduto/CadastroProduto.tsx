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
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Categoria from '../../../models/Categoria';
import Produto from '../../../models/Produto';
import { busca, buscaId, post, put, } from '../../../service/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';


function CadastroProduto() {
  
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    tipo: '',
  });

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

  const userId = useSelector<TokenState, TokenState['id']>(
    (state) => state.id
  )

  /*
  const [usuario, setUsuario] = useState<User>({
    id: +userId,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    cpf: '',
    endereco: ''
  })
  */

  useEffect(() => {
    if (token === "") {
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
        navigate("/login")
    }
  },[token])

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
      //usuario: usuario
    });
  }, [categoria]);

  useEffect(() => {
    getCategoria();
    if (id !== undefined) {
      findByIdProduto(id);
    }
  }, [id]);

  async function findByIdProduto(id: string) {
    await buscaId(`produto/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

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
      categoria: categoria
    });
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (id !== undefined) {
      put(`/produto`, produto, setProduto, {
          headers: {
              'Authorization': token
          }
      })
      toast.success('Produto atualizado com sucesso!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: 'colored',
          progress: undefined,
      });
    } else {
      post(`/produto`, produto, setProduto, {
          headers: {
              'Authorization': token
          }
      })
      toast.success('Produto cadastrado com sucesso!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: 'colored',
          progress: undefined,
      });
    }
      back()
  }

  function back() {
    navigate('/produtos')
  }

  return (
    <Container maxWidth="sm" className="topo">
        <form onSubmit={onSubmit}>
            <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro produto</Typography>
            <TextField value={produto.nome} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedProduto(event)} id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth />
            <TextField value={produto.descricao} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedProduto(event)} id="descricao" label="descricao" name="descricao" variant="outlined" margin="normal" fullWidth />

            <FormControl >
                <InputLabel id="demo-simple-select-helper-label">Categoria </InputLabel>
                <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper" onChange={(event: any) => buscaId(`/categoria/${event.target.value}`, setCategoria, {
                        headers: {
                            'Authorization': token
                        }
                    })}>
                    {
                        categorias.map(categoria => (
                            <MenuItem value={categoria.id}>{categoria.tipo}</MenuItem>
                        ))
                    }
                </Select>
                <FormHelperText>Escolha uma categoria para o produto</FormHelperText>
                <Button type="submit" variant="contained" color="primary" className='btn-lista-cadastro'>
                    Finalizar
                </Button>
            </FormControl>
        </form>
    </Container>
  )
}

export default CadastroProduto;

// function updatedCategoria(event: React.ChangeEvent<HTMLInputElement>): void {
//   throw new Error('Function not implemented.');
// }