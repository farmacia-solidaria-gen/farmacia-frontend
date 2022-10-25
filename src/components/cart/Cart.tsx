import React, { useEffect, useState, ChangeEvent } from 'react'
import { Box, Button, Card, TextField, Typography } from '@mui/material'
import { Link, useNavigate, useParams } from 'react-router-dom'

import Produto from '../../models/Produto'
import { buscaId } from '../../service/Service'

import './Cart.css'
import { useSelector } from 'react-redux'
import { TokenState } from '../../store/tokens/tokensReducer'
import { toast } from 'react-toastify'



function Cart() {
   

    let history = useNavigate()

    const { id } = useParams<{ id: string }>()

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const [quantidadeFinal, setQuantidadeFinal] = useState(0)

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        descricao: '',
        fabricante: '',
        quantidade: 0,
        preco: 0,
        categoria: null,
        usuario: null 
    
    })

    useEffect(() => {
        if (token === "") {
            toast.error('Você precisa estar logado!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history("/login")
        }
    }, [token])

     useEffect(() => {
         if (id !== undefined) {
            findByIdProduto(id)
         }
     }, [id])

     async function findByIdProduto(id: string) {
     await buscaId(`produto/${id}`, setProduto, {
            headers: {
                 'Authorization': token
            }
         })
     }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        let valor = +e.target.value
        setQuantidadeFinal(valor);
    }

    function valorTotal() {
        return quantidadeFinal * produto.preco
    }

    
    function confirmSales() {
        toast.success('Compra confirmada, para os próximos passos confirme seu e-mail! ✔', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        history("/carrinho")
    }

    function cancelar() {
        history("/produtos")
      }
    return (
        <>
            <Box m={2} display="flex" justifyContent="center" className='caixaCart'>
                <Card variant="outlined" className='cartContainer'>

                    <div className='cardProduct'>
                        <img src={produto.fabricante} alt="Img" width= '250px' />

                        <div className='cardProductInfo'>
                            <Typography color="textSecondary" gutterBottom>
                                Produto
                            </Typography>

                            <Typography variant="h5" component="h2">
                                {produto.nome}
                            </Typography>

                            <Typography variant="body2" component="p">
                            {new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency: 'BRL',
                      }).format(produto.preco)
                     }
                            </Typography>

                            <Typography variant="body2" component="p">
                                Quantidade Máx: {produto.quantidade}
                            </Typography>

                            <TextField
                                value={quantidadeFinal}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
                                InputProps={{ inputProps: { min: 1, max: produto.quantidade } }}
                                id="quantidade" label="quantidade" type="number" variant="outlined"
                                name="quantidade" margin="normal" fullWidth
                            />

                            <Typography variant="body2" component="p">
                                Total: R$ {valorTotal()}
                            </Typography>
                        </div>
                    </div>

                </Card>

                <Box display="flex" flexDirection="column" justifyContent="center" mb={1.5}>

                    <Box className="cardProductButton">
                        <Box mx={1} >
                            <Button onClick={confirmSales} variant="contained" size='small' color="primary" className='botaoCompra'>
                                Confimar Compra
                            </Button>
                        </Box>
                    </Box>

                    <Link to="/produtos" className="cardProductButton">
                        <Box mx={1}>
                            <Button onClick={cancelar} variant="contained" size='small' color="secondary" className='botaoCancelarCompra text-decorator-none'>
                                Cancelar
                            </Button>
                        </Box>
                    </Link>

                </Box>
            </Box>
        </>
    )
}

export default Cart