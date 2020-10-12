import React from 'react';
import { Link } from 'react-router-dom';

import './confirmar-perfil.css';

import LeftArrow from '../../assets/img/icons/left-arrow.png';

function Login(){

    return(
        <div className="ConfirmContainer">
            <Link to="/"><img className="Return" src={LeftArrow} alt="Ícone de seta para a esquerda para voltar para a tela innicial"/></Link>
            <div className="SelectProfile">
                <h3 className="Titulo">Que tipo de usuário você é?</h3>
                <div className="Botoes">
                    <Link className="ButtonSquare" style={{ background: "var(--dark-button)" }} to="">Pestador de serviço</Link>
                    <Link className="ButtonSquare" style={{ background: "var(--light-button)" }} to="">Contratante</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;