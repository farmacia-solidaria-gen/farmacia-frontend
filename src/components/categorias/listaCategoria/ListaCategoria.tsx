import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import { busca } from '../../../service/Service';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Categoria from '../../../models/Categoria';
import { TokenState } from '../../../store/tokens/tokensReducer';

function ListaCategoria() {
    //trazer a função de navegação interna
    let navigate = useNavigate();

    // estado para gerenciar os temas que virão do backend
    const [categorias, setCategorias] = useState<Categoria[]>([])

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    //verificar se a pessoa tem token, se não tiver, mandar pra login
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

    //função que realmente vai até o backend para buscar os temas
    async function getTemas() {
        await busca('/categoria', setCategorias, {
            headers: {'Authorization': token}
        })
    }

    //função para disparar a busca de temas assim que a tela for carregada
    useEffect(() => {
        getTemas()
    }, [categorias.length])

    return (
        <>
            {/* mapeamento do array de temas, para recriar a estrutura inteira para cada tema existente */}
            {categorias.map(categoria => (
                <Box m={2} >
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Tema</Typography>
                            <Typography variant="h5" component="h2">{categoria.tipo}</Typography>
                        </CardContent>

                        <CardActions>
                            <Box display="flex" justifyContent="center" mb={1.5} >
                                <Link to={`/formularioTema/${categoria.id}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" className="marginLeft" size='small' color="primary">atualizar</Button>
                                    </Box>
                                </Link>
                                <Link to={`/deletarTema/${categoria.id}`} className="text-decorator-none">
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