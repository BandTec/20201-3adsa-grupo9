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
        localStorage.setItem("prev-page", "/cadastro-info-pessoal-contratante");

        history.push('/termos');
        // history.push('/cadastro-info-bancaria-contratante');
        // to="/cadastro-info-bancaria-contratante"
    }

    return (
        <div>
            <div  className="CadastroInfoPessoalContratanteContainer">
                <div  className="CadastroInfoPessoalContratanteContent">
                    <Link to="/"><img style={{marginTop:'-9%'}}  className="Return" src={LeftWhiteArrow} alt="Ícone de seta para a esquerda para voltar para a tela innicial" /></Link>
                    <form onSubmit={handleCadastroDoisContratante}>
                        <div className="input-container">
                            <input style={{ marginLeft:'35%', margin:'6%'}} type="text" id="cep" name="cep"
                                onBlur={ async e => {
                                    var uri = `/usuarios/cep/${document.getElementById("cep").value}`;
                                    const response = await api.get(uri);
                                    document.getElementById("endereco").value = response.data.logradouro;
                                    document.getElementById("bairro").value = response.data.bairro;
                                    document.getElementById("complemento").value = response.data.complemento;
                                }} />
                            <label style={{marginTop:'-0.5%', marginLeft:'5%', color:'var(--black)'}}>Informe seu CEP:</label>
                        </div>
                        <div className="input-container">
                            <input style={{margin:'-3%', marginLeft:'35%'}} type="text" id="endereco" name="endereco" />
                            <label style={{marginTop:'-0.5%', marginLeft:'5%', color:'var(--black)'}}>Endereço:</label>
                        </div>
                        <div className="input-container">
                            <input style={{margin:'5%', marginLeft:'35%'}} type="text" id="bairro" name="bairro" />
                            <label style={{marginTop:'-0.5%', marginLeft:'5%', color:'var(--black)'}}>Bairro:</label>
                        </div>
                        <div className="input-container">
                            <input style={{margin:'-2%', marginLeft:'35%'}} type="text" id="numero" name="numero" />
                            <label style={{marginTop:'-0.5%', marginLeft:'5%', color:'var(--black)'}}>Número</label>
                        </div>
                        <div className="input-container">
                            <input style={{margin:'5%', marginLeft:'35%'}} type="text" id="complemento" name="complemento" />
                            <label style={{marginTop:'-0.5%', marginLeft:'5%', color:'var(--black)'}}>Complemento:</label>
                        </div>

                        <div style={{marginTop:'-3%'}} className='zona'>
                    <label style={{margin:'1%', marginLeft:'35%'}}>Selecione a zona que você se encontra: </label>
                    <select style={{marginLeft:'35%'}} className='select' id='selectZona'>
                        <option value='0'>Selecione uma opção: </option>
                        <option value='1'>Zona Sul</option>
                        <option value='2'>Zona Leste</option>
                        <option value='3'>Zona Oeste</option>
                        <option value='4'>Zona Norte</option>
                    </select>
                </div>


                        <div style={{margin:'6%'}} className="BotoesLoginForm">
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