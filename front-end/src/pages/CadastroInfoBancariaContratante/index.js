import React from 'react';

import './cadastro-info-bancaria-contratante.css';

import InfoIcon from '../../assets/img/icons/info.png';

import { Link } from 'react-router-dom';

function CadastroInfoBancariaContratante(){
    return(
        <div className="CadastroInfoBancariaContratanteContainer">
            <h2>Cadastro de informações bancárias</h2>
            <form className="FormularioBancarioContratante" onSubmit={function handleSubmit(){}}>
                <h3>Dados bancários <img src={InfoIcon} alt="Ponto de interrogação"/></h3>
                <div>
                    <h4>Banco:</h4>
                    <label>
                        <input type="text" name="banco"/>
                    </label>
                </div>
                <div>
                    <h4>Tipo de conta:</h4>
                    <label>
                        <input type="text" name="tipo-conta"/>
                    </label>
                </div>
                <div>
                    <h4>Titular da conta:</h4>
                    <label>
                        <input type="text" name="titular-conta"/>
                    </label>
                </div>
                <div>
                    <h4>Tipo de documento:</h4>
                    <label>
                        <input className="Checkbox" type="checkbox" />Pessoa física <br/>
                        <input className="Checkbox" type="checkbox" />Pessoa jurídica <br/>
                    </label>
                </div>
                <div>
                    <h4>Agencia*:</h4>
                    <label>
                        <input type="text" name="agencia"/>
                    </label>
                    <h4>Digito*:</h4>
                    <label>
                        <input type="text" name="digito"/>
                    </label>
                </div>
                <div>
                    <h4>Conta*:</h4>
                    <label>
                        <input type="text" name="conta"/>
                    </label>
                    <h4>Digito*:</h4>
                    <label>
                        <input type="text" name="digito"/>
                    </label>
                </div>
                <div className="BotoesLoginForm">
                    <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--blue)", marginRight: " 5%", color:"var(--white)" }} to="/termos">Confirmar dados</Link>
                    <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--pink)", color: "var(--white)" }}>Revisar dados anteriores</Link>
                </div>
            </form>
        </div>
    )}


    export default CadastroInfoBancariaContratante;