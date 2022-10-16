import React, { useState, useEffect, ChangeEvent } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { Box } from "@mui/material";
import { login } from "../../service/Service";
import { useDispatch } from "react-redux";
import { addId, addToken } from "../../store/tokens/actions";
import { toast } from "react-toastify";
import UserLogin from "../../models/UserLogin";

function Login() {

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState('');

  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    cpf: "",
    endereco: "",
    token: "",
  });

  const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    cpf: "",
    endereco: "",
    token: "",
  });

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {

    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }
  console.log("updateModel: token: ", token);
  console.log("updateModel: respUserLogin.token", respUserLogin.token);

  useEffect(() => {
    console.log("primeiro useEffect called");
    console.log("token", token);
    if (token !== '') {
      dispatch(addToken(token));
      navigate('/home');
    }
  }, [token]);

  useEffect(() => {
    console.log("segundo useEffect called");
    console.log("segundo useEffect called: respUserLogin", respUserLogin);
    console.log("segundo useEffect called: respUserLrespUserLogin.token", respUserLogin.token);
    if (respUserLogin.token !== '') {
      dispatch(addToken(respUserLogin.token));
      dispatch(addId(respUserLogin.id.toString()));
      navigate('/home');
    }
  }, [respUserLogin.token]);
  
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {

      console.log("dentro do try catch : userLogin : " , userLogin);
      
      console.log("dentro do try catch  :setRespUserLogin :", setRespUserLogin)
      await login(`/usuario/logar`, userLogin, setRespUserLogin);

      toast.success("Usuário logado com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } catch (error) {
      toast.error("Dados inconsistentes, erro ao logar!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    }
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" xs={6}>
        <Box paddingX={20}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="textos1"
            >
              log in
            </Typography>
            <TextField
              style={{ fontFamily: "Arial" }}
              value={userLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="usuario"
              label="user"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField
              value={userLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha"
              label="password"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Button
                className="botao"
                type="submit"
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center">
                don't have an account?
              </Typography>
            </Box>
            <Link to="/cadastrousuario">
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                className="textos1"
              >
                sign up
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid xs={6} className="imagem"></Grid>
    </Grid>
  );
}

export default Login;
