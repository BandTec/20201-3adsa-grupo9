import React from 'react';

import './cadastro-info-bancaria-contratante.css';
import InfoIcon from '../../assets/img/icons/info.png';
import { Link, useHistory } from 'react-router-dom';

function CadastroInfoBancariaContratante(){

    const history = useHistory();
    
    function handleCadastroTresContratante(e){
        e.preventDefault();

        localStorage.setItem("banco", document.getElementById("banco").value);
        localStorage.setItem("tipo-conta", document.getElementById("tipo-conta").value);
        localStorage.setItem("titular-conta", document.getElementById("titular-conta").value);

        localStorage.setItem("agencia", document.getElementById("agencia").value);
        localStorage.setItem("digito-agencia", document.getElementById("digito-agencia").value);
        localStorage.setItem("conta", document.getElementById("conta").value);
        localStorage.setItem("digito-conta", document.getElementById("digito-conta").value);

        localStorage.setItem("prev-page", "/cadastro-info-bancaria-contratante");

        if( (localStorage.getItem("pessoa-fisica") == "true") || (localStorage.getItem("pessoa-juridica") == "true")) {
            history.push('/termos');
            // to="/termos"
        }
        else{
            alert("Por favor, selecione o tipo de documento");
        }
    }

    function pessoaFisicaCheckbox() {
        document.getElementById("pessoa-juridica").checked = false;
        localStorage.setItem("pessoa-fisica", true);
        localStorage.setItem("pessoa-juridica", false);
    }

    function pessoaJuridicaCheckbox() {
        document.getElementById("pessoa-fisica").checked = false;
        localStorage.setItem("pessoa-fisica", false);
        localStorage.setItem("pessoa-juridica", true);
    }

    return(
        <div className="CadastroInfoBancariaContratanteContainer">
            <h2>Cadastro de informações bancárias</h2>
            <form className="FormularioBancarioContratante" onSubmit={handleCadastroTresContratante}>
            <h3>Dados bancários <img src={InfoIcon} alt="Ponto de interrogação" /></h3>
                    <div>
                        <h4>Banco:</h4>
                        <label>
                            <input type="text" id="banco" name="banco" />
                        </label>
                    </div>
                    <div>
                        <h4>Tipo de conta:</h4>
                        <label>
                            <input type="text" id="tipo-conta" name="tipo-conta" />
                        </label>
                    </div>
                    <div>
                        <h4>Titular da conta:</h4>
                        <label>
                            <input type="text" id="titular-conta" name="titular-conta" />
                        </label>
                    </div>
                    <div>
                        <h4>Tipo de documento:</h4>
                        <label>
                            <input className="Checkbox" id="pessoa-fisica" type="checkbox" onClick={pessoaFisicaCheckbox} />Pessoa física <br />
                            <input className="Checkbox" id="pessoa-juridica" type="checkbox" onClick={pessoaJuridicaCheckbox} />Pessoa jurídica <br />
                        </label>
                    </div>
                    <div>
                        <h4>Agencia*:</h4>
                        <label>
                            <input type="number" id="agencia" name="agencia" />
                        </label>
                        <h4>Digito*:</h4>
                        <label>
                            <input type="number" id="digito-agencia" name="digito" />
                        </label>
                    </div>
                    <div>
                        <h4>Conta*:</h4>
                        <label>
                            <input type="number" id="conta" name="conta" />
                        </label>
                        <h4>Digito*:</h4>
                        <label>
                            <input type="number" id="digito-conta" name="digito" />
                        </label>
                    </div>
                    <div className="BotoesLoginForm">
                        <button className="ButtonLinkSquareCadastro" style={{ background: "var(--blue)", marginRight: "5%", color: "var(--white)", marginLeft: "28%" }} type="submit" >Confirmar dados</button>
                        <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--pink)", color: "var(--white)" }} to="/cadastro-endereco-prestador">Revisar dados anteriores</Link>
                    </div>
            </form>
        </div>
    )}


    export default CadastroInfoBancariaContratante;