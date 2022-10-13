
import React from "react";
import "./App.css";
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import Home from "./paginas/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./paginas/login/Login";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import ListaProduto from "./components/produtos/listaproduto/ListaProduto";
import DeletarCategoria from "./components/categorias/deletarCategoria/DeletarCategoria";
import DeletarProduto from "./components/produtos/deletarProduto/DeletarProduto";
import CadastroCategoria from "./components/categorias/cadastroCategoria/CadastroCategoria";
import ListaCategoria from "./components/categorias/listaCategoria/ListaCategoria";
import CadastroProduto from "./components/produtos/cadastroProduto/CadastroProduto";




function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
          <Route path="/produtos" element={<ListaProduto />} />
          <Route path="/categorias" element={<ListaCategoria />} />
          <Route path="/formularioProduto" element={<CadastroProduto />} />
          <Route path="/formularioProduto/:id" element={<CadastroProduto />} />
          <Route path="/formularioCategoria" element={<CadastroCategoria />} />
          <Route path="/formularioCategoria/:id" element={<CadastroCategoria />} />
          <Route path="/deletarProduto/:id" element={<DeletarProduto />} /> 
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );



}
export default App;
