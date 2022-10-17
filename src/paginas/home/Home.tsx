import React, { useEffect } from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
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
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: "#D2FCF6" }}
      >
        <Grid item xs={12}>
          <img src={logo} width={400} height={400} className="img-home" />
        </Grid>
        <Grid alignItems="center" item xs={12}>
          <Box paddingX={1}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              style={{ color: "black", fontWeight: "bold", fontSize: 50 }}
              align="center"
            >
              Seja Bem-Vinde a Farmácia Solidária!
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              style={{ color: "black", fontWeight: "light", fontSize: 30 }}
              align="center"
            >
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


      <Grid container xs={12} style={{ backgroundColor: "#4d3efc", height: 500,}} className='box-sobre'>  
            <Grid xs={6} style={{color: 'white', fontSize: 50, fontWeight: 'bold' }}>
                Conheça o projeto
                <Typography style={{color: 'white'}} className='margin-right'>
                O projeto farmácia solidária tem o intuito de ajudar pessoas que necessitam de remédios de alto custo mas não possuem condições de obtê-los
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
    </>
  );
}

export default Home;
