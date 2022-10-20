import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import { busca } from '../../../service/Service';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Categoria from '../../../models/Categoria';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './ListaCategoria.css';


function ListaCategoria() {
    
    let navigate = useNavigate();

    
    const [categorias, setCategorias] = useState<Categoria[]>([])

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    
    useEffect(() => {
        if(token === '') {
            toast.error('Você precisa estar logado', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined
            });
            navigate('/login')
        }
    }, [token])

   
    async function getCategorias() {
        await busca('/categoria', setCategorias, {
            headers: {'Authorization': token}
        })
    }

    
    useEffect(() => {
        getCategorias()
    }, [categorias.length])

    return (
        <>
            
            {categorias.map(categoria => (

                <Box m={2} className="largura" >
                    <Card variant="outlined" >

                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Categoria</Typography>
                            <Typography variant="h5" component="h2">{categoria.tipo}</Typography>
                        </CardContent>

                        <CardActions>
                            <Box display="flex" justifyContent="center" mb={1.5} >
                                <Link to={`/atualizarCategoria/${categoria.id}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" className="marginLeft" size='small' color="primary">Atualizar </Button>
                                    </Box>
                                </Link>
                                <Link to={`/deletarCategoria/${categoria.id}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" size='small'
                                            color="secondary">deletar</Button>
                                           
                                    </Box>
                                </Link>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>
            ))}
        </>
    );
}

export default ListaCategoria;

// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';