import React, { useEffect } from "react";
import { Typography, Box, Grid, Button, Container } from "@mui/material";
import TabProduto from "../../components/produtos/tabproduto/TabProduto";
import ModalProduto from "../../components/produtos/modalproduto/ModalProduto";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import logo from "../../img/logo.svg";
import doctors from '../../img/Doctors.svg'


function Home() {
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens,
  );

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login");
    }
  }, [token]);

  return (
    <>
      <Grid container justifyContent="center" alignItems="center" style={{ backgroundColor: "#D2FCF6" }}>
        <Grid item xs={12} >
          <img src={logo} width={400} height={400} className="img-home" />
        </Grid>
        <Grid alignItems="center" item xs={12}>
          <Box paddingX={1}>
            <Typography className='titulo-home' variant="h3" gutterBottom color="textPrimary" component="h3" align="center">
              Seja Bem-Vinde a Farmácia Solidária!
            </Typography>

            <Typography className='subtitulo-home' variant="h5" gutterBottom color="textPrimary" component="h5" align="center">
              Encontre aqui o que você procura
            </Typography>
          </Box>

          <Box display="flex" justifyContent="center">
            <Box marginRight={2} className="padding">
              <ModalProduto />
            </Box>

            <Link to="/produtos" className="text-decorator-none padding">
              <Button className='btn-postagem' variant="outlined">Ver Produtos</Button>
            </Link>
          </Box>
        </Grid>

        <Grid xs={12} style={{ backgroundColor: "#D2FCF6" }}>
          {/* <TabProduto /> */}
        </Grid>
      </Grid>


    <Container>
      <Grid container xs={12} style={{height: 400}} className='box-sobre'>  
        <Grid xs={6} className='titulo-sobre'>
          Conheça o projeto
          <Typography style={{color: 'white'}} className='margin-right'>
            A farmácia solidária tem o intuito de ajudar pessoas que necessitam de remédios de alto custo mas não possuem condições de obtê-los pelo sistema de saúde convencional
          </Typography>
          <Link to='/sobre' style={{textDecoration: 'none'}}>
            <Button className='btn-sobre'>
              Saiba mais
            </Button>
          </Link>
        </Grid>
        
        <Grid xs={6}>
          <img className='img-sobre' src={doctors} alt="Imagem-sobre" />
        </Grid>

      </Grid>
    </Container>
    </>
  );
}

export default Home;
