import Produto from "./Produto";

interface User{
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    cpf: string;
    endereco: string;
    produto?: Produto[]
    
}
export default User;