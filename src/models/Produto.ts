import Categoria from "./Categoria";

interface Produto{
    id: number;
    nome: string;
    descricao: string;
    fabricante: string;
    quantidade: number;
    preco: number;
    categoria: Categoria| null;
}
export default Produto;