import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import BannerLateralInfoCadastro from './BannerLateralInfoCadastro';

import './cadastro-info-contratante.css';

import LeftWhiteArrow from '../../assets/img/icons/left-arrow-white.png';
import InfoIcon from '../../assets/img/icons/info.png';
import api from '../../services/api';

function CadastroInfoPessoalContratante(){

    const history = useHistory();

    function handleCadastroDoisContratante(e){
        e.preventDefault();

        localStorage.setItem("cep", document.getElementById("cep").value );
        localStorage.setItem("endereco", document.getElementById("endereco").value );
        localStorage.setItem("bairro", document.getElementById("bairro").value );
        localStorage.setItem("numero", document.getElementById("numero").value );
        localStorage.setItem("complemento", document.getElementById("complemento").value );

        history.push('/cadastro-info-bancaria-contratante');
        // to="/cadastro-info-bancaria-contratante"
    }

    return(
        <div>
            <div className="CadastroInfoPessoalContratanteContainer">
                <div className="CadastroInfoPessoalContratanteContent">
                    <Link to="/"><img className="Return" src={LeftWhiteArrow} alt="Ícone de seta para a esquerda para voltar para a tela innicial"/></Link>
                    <form onSubmit={handleCadastroDoisContratante}>
                        <div className="input-container">
                            <input type="text" id="cep" name="cep"
                            onFocusOut={e => {
                                var uri = `/ws/${document.getElementById("cep").value}/json`;
                                const response = api.get(uri);
                                console.log(response);
                            }}/> <img src={InfoIcon} alt="Ícone de interrogação indicando ajuda"/>
                            <label>Informe seu CEP:</label>
                        </div>
                        <div className="input-container">
                            <input type="text" id="endereco" name="endereco"/>
                            <label>Endereço:</label>
                        </div>
                        <div className="input-container">
                            <input type="text" id="bairro" name="bairro"/>
                            <label>Bairro:</label>
                        </div>
                        <div className="input-container">
                            <input type="text" id="numero" name="numero"/>
                            <label>Número</label>
                        </div>
                        <div className="input-container">
                            <input type="text" id="complemento" name="complemento"/>
                            <label>Complemento:</label>
                        </div>
                        <div className="BotoesLoginForm">
                            <button className="ButtonLinkSquareCadastro" style={{ background: "var(--blue", marginRight: " 5%", color:"var(--white)" }} type="submit" >Continuar cadastro</button>
                            <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--pink)", color: "var(--white)" }}>Revisar dados anteriores</Link>
                        </div>
                    </form>
                </div>
            </div>
            <BannerLateralInfoCadastro />
        </div>
    )
}

export default CadastroInfoPessoalContratante;