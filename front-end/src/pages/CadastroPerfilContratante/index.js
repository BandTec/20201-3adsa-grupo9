import React from 'react';
import { Link } from 'react-router-dom';

import BannerLateralCadastro from './BannerLateralCadastro';

import './cadastro-perfil-contratante.css';

import LeftWhiteArrow from '../../assets/img/icons/left-arrow-white.png';
import GoogleIcon from '../../assets/img/icons/google.png';
import FacebookIcon from '../../assets/img/icons/facebook-icon.png';

function CadastroPerfilContratante(){

    return(
        <div>
            <div className="CadastroPerfilContratanteContainer">
                <div className="CadastroPerfilContratanteContent">
                    <Link to="/"><img className="Return" src={LeftWhiteArrow} alt="Ícone de seta para a esquerda para voltar para a tela innicial"/></Link>
                    <form onSubmit={function handleSubmit(){}}>
                        <div className="input-container">
                            <input type="text" name="nome"/>
                            <label>Nome completo</label>
                        </div>
                        <div className="input-container">
                            <input type="mail" name="email"/>
                            <label>Email</label>
                        </div>
                        <div className="input-container">
                            <input type="text" name="telefone"/>
                            <label>Telefone</label>
                        </div>
                        <div className="input-container">
                            <input type="password" name="senha"/>
                            <label>Senha</label>
                        </div>
                    </form>
                    <div className="BotoesCadastroPlataformas">
                        <Link className="ButtonLinkSquareCadastro"><img src={GoogleIcon} alt="Ícone do Google" /> Cadastrar usando Google</Link>
                        <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--blue-facebook)", marginTop: "1%", color: "var(--white)" }}><img src={FacebookIcon} alr="Ícone do Facebook" /> Cadastrar usando Facebook</Link>
                    </div>
                    <div className="BotoesLoginForm">
                        <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--blue", marginRight: " 5%", color:"var(--white)" }} to="/cadastro-info-pesosal-contratante">Cadastrar-se</Link>
                        <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--pink)" }} to="/login">Login</Link>
                    </div>
                </div>
            </div>
            <BannerLateralCadastro />
        </div>
    );
}

export default CadastroPerfilContratante;