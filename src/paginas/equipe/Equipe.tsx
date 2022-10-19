import { Box, Button, Container, Typography } from "@mui/material";
import { Avatar, Grid, Link } from "@mui/material";
import React from "react";
import "./Equipe.css";
import andrei from "../../img/equipe/Andrei.svg";
import gabriel from "../../img/equipe/gabriel.svg";
import leticia from "../../img/equipe/leticia.svg";
import maikon from "../../img/equipe/maikon.svg";
import pamela from "../../img/equipe/pamela.svg";
import veronica from "../../img/equipe/veronica.svg";
import wesley from "../../img/equipe/wesley.svg";
import { GitHub } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";

function Equipe() {
  return (
    <>
      <Grid container>
        <Grid
          xs={12}
          style={{ justifyContent: "center", display: "flex" }}
          className="margin-titulo-equipe"
        >
          <Typography className='titulo-equipe'>
            Equipe
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h5"
              className="txt-equipe"
              gutterBottom
              color="textPrimary"
              component="h5"
              style={{
                color: "black",
                fontWeight: "light",
                fontSize: 22,
                marginTop: 20,
              }}
              align="center"
            >
              Conheça a equipe de desenvolvedores que tornaram esse projeto possível:
            </Typography>
          </Box>
          <Grid xs={8} style={{ justifyContent: "center", display: "flex", gap: '200px'}} className='margin-equipe'>
            <Box className="margin-foto">
              <Typography className='nome-integrante'>Andrei</Typography>
              <Avatar alt="Andrei" src={andrei} className="tamanho-avatar" /> 
              <Box style={{ display: "flex" }}>
                <a href="https://github.com/andrei-nascimento" target="_blank">
                  <GitHub className='posicionamento-icon' style={{ fontSize: 30, color: "black" }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/andrei-lima-nascimento/"
                  target="_blank"
                >
                  <LinkedIn className='posicionamento-icon-linkedin' style={{ fontSize: 30, color: "black" }} />
                </a>
              </Box>
            </Box>
            <Box className="margin-foto">
              <Typography className='nome-integrante'>Gabriel</Typography>
              <Avatar alt="Gabriel" src={gabriel} className="tamanho-avatar" />
              <Box style={{ display: "flex" }}>
                <a href="https://github.com/Gabrielrn" target="_blank">
                  <GitHub className='posicionamento-icon' style={{ fontSize: 30, color: "black" }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/gabriel-nascimento-4a7aa9116/"
                  target="_blank"
                >
                  <LinkedIn className='posicionamento-icon-linkedin' style={{ fontSize: 30, color: "black" }} />
                </a>
              </Box>
            </Box>
            <Box className="margin-foto">
              <Typography className='nome-integrante'>Letícia</Typography>
              <Avatar alt="Letícia" src={leticia} className="tamanho-avatar" />
              <Box style={{ display: "flex" }}>
                <a className='posicionamento-icon' href="https://github.com/Leticia0587" target="_blank">
                  <GitHub style={{ fontSize: 30, color: "black" }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/leticiadearaujo0305/"
                  target="_blank"
                >
                  <LinkedIn className='posicionamento-icon-linkedin' style={{ fontSize: 30, color: "black" }} />
                </a>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid xs={8} style={{ justifyContent: "center", display: "flex",  gap: '200px' }} className='margin-equipe'>
        <Box className="margin-foto">
          <Typography className='nome-integrante'>Maikon</Typography>
          <Avatar alt="Maikon" src={maikon} className="tamanho-avatar" />
          <Box style={{ display: "flex" }}>
            <a className='posicionamento-icon' href="https://github.com/Maikon-santoz" target="_blank">
              <GitHub style={{ fontSize: 30, color: "black" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/maikon-santos-2bb1a823a/"
              target="_blank"
            >
              <LinkedIn className='posicionamento-icon-linkedin' style={{ fontSize: 30, color: "black" }} />
            </a>
          </Box>
        </Box>
        <Box className="margin-foto">
          <Typography className='nome-integrante'>Pamela</Typography>
          <Avatar alt="Pamela" src={pamela} className="tamanho-avatar" />
          <Box style={{ display: "flex" }}>
            <a className='posicionamento-icon' href="https://github.com/LimaPamela">
              <GitHub style={{ fontSize: 30, color: "black" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/pamela-lima-s/"
              target="_blank"
            >
              <LinkedIn className='posicionamento-icon-linkedin' style={{ fontSize: 30, color: "black" }} />
            </a>
          </Box>
        </Box>
        <Box className="margin-foto">
          <Typography className='nome-integrante'>Verônica</Typography>
          <Avatar alt="Verônica" src={veronica} className="tamanho-avatar" />
          <Box style={{ display: "flex" }}>
            <a className='posicionamento-icon' href="https://github.com/veronicapupo" target="_blank">
              <GitHub style={{ fontSize: 30, color: "black" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/veronica-pupo/"
              target="_blank"
            >
              <LinkedIn className='posicionamento-icon-linkedin' style={{ fontSize: 30, color: "black" }} />
            </a>
          </Box>
        </Box>
        </Grid>
      </Grid>
      <Grid xs={8} style={{ justifyContent: "center", display: "flex" }} className='margin-equipe'>
      <Box className="margin-foto">
          <Typography className='nome-integrante'>Wesley</Typography>
          <Avatar alt="Wesley" src={wesley} className="tamanho-avatar" />
          <Box style={{ display: "flex" }}>
            <a  href="https://github.com/Wessslima" target="_blank">
              <GitHub className='posicionamento-icon'style={{ fontSize: 30, color: "black" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/wessslima/"
              target="_blank"
            >
              <LinkedIn className='posicionamento-icon-linkedin' style={{ fontSize: 30, color: "black" }} />
            </a>
          </Box>
        </Box>
      </Grid>
    </>
  );
}

export default Equipe;