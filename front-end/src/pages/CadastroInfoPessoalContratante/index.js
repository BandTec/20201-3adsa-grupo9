import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import BannerLateralInfoCadastro from './BannerLateralInfoCadastro';

import './cadastro-info-contratante.css';

import LeftWhiteArrow from '../../assets/img/icons/left-arrow-white.png';
import InfoIcon from '../../assets/img/icons/info.png';
import api from '../../services/api';

function CadastroInfoPessoalContratante() {

    const history = useHistory();

    function handleCadastroDoisContratante(e) {
        e.preventDefault();

        localStorage.setItem("cep", document.getElementById("cep").value);
        localStorage.setItem("endereco", document.getElementById("endereco").value);
        localStorage.setItem("bairro", document.getElementById("bairro").value);
        localStorage.setItem("numero", document.getElementById("numero").value);
        localStorage.setItem("complemento", document.getElementById("complemento").value);

        history.push('/cadastro-info-bancaria-contratante');
        // to="/cadastro-info-bancaria-contratante"
    }

    return (
        <div>
            <div className="CadastroInfoPessoalContratanteContainer">
                <div className="CadastroInfoPessoalContratanteContent">
                    <Link to="/"><img className="Return" src={LeftWhiteArrow} alt="Ícone de seta para a esquerda para voltar para a tela innicial" /></Link>
                    <form onSubmit={handleCadastroDoisContratante}>
                        <div className="input-container">
                            <input style={{ marginLeft:'35%'}} type="text" id="cep" name="cep"
                                onBlur={ async e => {
                                    var uri = `/usuarios/cep/${document.getElementById("cep").value}`;
                                    const response = await api.get(uri);
                                    document.getElementById("endereco").value = response.data.logradouro;
                                    document.getElementById("bairro").value = response.data.bairro;
                                    document.getElementById("complemento").value = response.data.complemento;
                                }} /> <img src={InfoIcon} alt="Ícone de interrogação indicando ajuda" />
                            <label style={{marginTop:'-0.5%', marginLeft:'5%', color:'var(--white)'}}>Informe seu CEP:</label>
                        </div>
                        <div className="input-container">
                            <input style={{margin:'-3%', marginLeft:'35%'}} type="text" id="endereco" name="endereco" />
                            <label style={{marginTop:'-0.5%', marginLeft:'5%', color:'var(--white)'}}>Endereço:</label>
                        </div>
                        <div className="input-container">
                            <input style={{margin:'5%', marginLeft:'35%'}} type="text" id="bairro" name="bairro" />
                            <label style={{marginTop:'-0.5%', marginLeft:'5%', color:'var(--white)'}}>Bairro:</label>
                        </div>
                        <div className="input-container">
                            <input style={{margin:'-2%', marginLeft:'35%'}} type="text" id="numero" name="numero" />
                            <label style={{marginTop:'-0.5%', marginLeft:'5%', color:'var(--white)'}}>Número</label>
                        </div>
                        <div className="input-container">
                            <input style={{margin:'5%', marginLeft:'35%'}} type="text" id="complemento" name="complemento" />
                            <label style={{marginTop:'-0.5%', marginLeft:'5%', color:'var(--white)'}}>Complemento:</label>
                        </div>
                        <div className="BotoesLoginForm">
                            <button className="ButtonLinkSquareCadastro" style={{ background: "var(--blue", marginRight: " 5%", color: "var(--white)" , padding:'25px'}} type="submit" >Continuar cadastro</button>
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