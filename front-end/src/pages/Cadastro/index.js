import React from 'react';
import './cadastro.css';
import AssistenteHorizontal from '../../components/Assistente';
import Formulario from '../../components/Formulario';



function Cadastro(){
    return(
        <div className="CadastroConteiner">
            <h1>Cadastre-se já e aumente sua clientela</h1>
            <h2>Este é o passo 1</h2> 
            
            <Formulario>
            </Formulario>
            
            
        </div>
    )
}



export default Cadastro;