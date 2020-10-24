import React from 'react';
import { Link } from 'react-router-dom';

import BannerLateralInfoCadastro from './BannerLateralInfoCadastro';

import './cadastro-info-contratante.css';

import LeftWhiteArrow from '../../assets/img/icons/left-arrow-white.png';
import InfoIcon from '../../assets/img/icons/info.png';

function CadastroInfoPessoalContratante(){
    return(
        <div>
            <div className="CadastroInfoPessoalContratanteContainer">
                <div className="CadastroInfoPessoalContratanteContent">
                    <Link to="/"><img className="Return" src={LeftWhiteArrow} alt="Ícone de seta para a esquerda para voltar para a tela innicial"/></Link>
                    <form onSubmit={function handleSubmit(){}}>
                        <div className="input-container">
                            <input type="text" name="cep"/> <img src={InfoIcon} alt="Ícone de interrogação indicando ajuda"/>
                            <label>Informe seu CEP:</label>
                        </div>
                        <div className="input-container">
                            <input type="text" name="endereco"/>
                            <label>Endereço:</label>
                        </div>
                        <div className="input-container">
                            <input type="text" name="bairro"/>
                            <label>Bairro:</label>
                        </div>
                        <div className="input-container">
                            <input type="text" name="numero"/>
                            <label>Número</label>
                        </div>
                        <div className="input-container">
                            <input type="text" name="complemento"/>
                            <label>Complemento:</label>
                        </div>
                    </form>
                    <div className="BotoesLoginForm">
                        <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--blue", marginRight: " 5%", color:"var(--white)" }} to="/cadastro-info-bancaria-contratante">Continuar cadastro</Link>
                        <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--pink)", color: "var(--white)" }}>Revisar dados anteriores</Link>
                    </div>
                </div>
            </div>
            <BannerLateralInfoCadastro />
        </div>
    );
}

export default CadastroInfoPessoalContratante;