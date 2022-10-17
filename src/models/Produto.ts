import Categoria from "./Categoria";
import User from "./User";

interface Produto{
    id: number;
    nome: string;
    descricao: string;
    fabricante: string;
    quantidade: number;
    preco: number;
    categoria: Categoria| null;
    usuario?: User | null;
}
export default Produto; //Comentado por Pamela Maikon