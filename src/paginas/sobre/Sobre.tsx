import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TokenState } from '../../store/tokens/tokensReducer';
import './Sobre.css';
import { toast } from 'react-toastify';


let navigate = useNavigate();
const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
);

useEffect(() => {
if (token == "") {
    toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
    });
    navigate("/login")

}
}, [token])

function Sobre() {
    return (
      <> 
        
      </>
    );
}

export default Sobre;