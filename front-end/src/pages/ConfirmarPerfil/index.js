import React from 'react';
import { Link } from 'react-router-dom';

import BannerLogoLateral from '../../components/BannerLogoLateral';

import './confirmar-perfil.css';

import LeftArrow from '../../assets/img/icons/left-arrow.png';

function Login(){

    function setPerfilBaba(){
        localStorage.setItem("tipo-usuario", 2); // tipo de usuario prestador de servicos
    }
    
    function setPerfilContratante(){
        localStorage.setItem("tipo-usuario", 1); // tipo de usuario contratante
    }

    return(
        <div>
            <div className="ConfirmContainer">
                <Link to="/"><img style={{marginTop:'5%'}} className="Return" src={LeftArrow} alt="Ícone de seta para a esquerda para voltar para a tela innicial"/></Link>
                    <h3 className="Titulo">Que tipo de usuário você é?</h3>
                    <div className="Botoes">
                        <Link className="ButtonSquareConfirmarPerfil" style={{ background: "var(--pink)" }} onClick={setPerfilBaba} to="/cadastro">Babá</Link>
                        <Link className="ButtonSquareConfirmarPerfil" style={{ background: "var(--blue)" }} onClick={setPerfilContratante} to="/cadastro-perfil-contratante">Contratante</Link>
                    </div>
            </div>
            <BannerLogoLateral className={"LogoDireita"} />
        </div>
    );
}

export default Login;