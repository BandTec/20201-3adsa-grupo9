import React from 'react';
import './cadastroBancario.css';
import InfoIcon from '../../assets/img/icons/info.png';
import { Link, useHistory } from 'react-router-dom';


function CadastroBancarioPrestador() {

    const history = useHistory();

    function handleCadastroQuatro(e) {
        e.preventDefault();

        localStorage.setItem("banco", document.getElementById("banco").value);
        localStorage.setItem("tipo-conta", document.getElementById("tipo-conta").value);
        localStorage.setItem("titular-conta", document.getElementById("titular-conta").value);

        localStorage.setItem("agencia", document.getElementById("agencia").value);
        localStorage.setItem("digito-agencia", document.getElementById("digito-agencia").value);
        localStorage.setItem("conta", document.getElementById("conta").value);
        localStorage.setItem("digito-conta", document.getElementById("digito-conta").value);

        localStorage.setItem("prev-page", "/cadastro-info-bancaria-prestador");

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

    return (
        <div className='ContainerBancario'>

            <div className="steps">
                <ul className="steps-container">
                    <li style={{ width: "20%" }} className="activated">
                        <div className="step">
                            <div className="step-image"><span></span></div>
                            <div className="step-current">Etapa 1</div>
                            <div className="step-description">Dados cadastrais</div>
                        </div>
                    </li>
                    <li style={{ width: "30%" }} className="activated">
                        <div className="step">
                            <div className="step-image"><span></span></div>
                            <div className="step-current">Etapa 2</div>
                            <div className="step-description">Cadastro de perfil</div>
                        </div>
                    </li>
                    <li style={{ width: "20%" }} className="activated">
                        <div className="step">
                            <div className="step-image"><span></span></div>
                            <div className="step-current">Etapa 3</div>
                            <div className="step-description">Cadastro de endereço</div>
                        </div>
                    </li>
                    <li style={{ width: "20%" }} className="activated">
                        <div className="step">
                            <div className="step-image"><span></span></div>
                            <div className="step-current">Etapa 4</div>
                            <div className="step-description">Dados bancários</div>
                        </div>
                    </li>
                </ul>
                <div className="step-bar" style={{ width: "80%" }}></div>
            </div>





            <div className="CadastroInfoBancariaPrestadorContainer" style={{ padding: '5%' }}>
                <h2>Cadastro de informações bancárias</h2>
                <form className="FormularioBancarioContratante" onSubmit={handleCadastroQuatro}>
                    <h3>Dados bancários <img src={InfoIcon} alt="Ponto de interrogação" /></h3>
                    <div>
                        <h4>Banco:</h4>
                        <label>
                            <input  id="banco" name="banco" />
                        </label>
                    </div>
                    <div>
                        <h4>Tipo de conta:</h4>
                        <label>
                            <input  id="tipo-conta" name="tipo-conta" />
                        </label>
                    </div>
                    <div>
                        <h4>Titular da conta:</h4>
                        <label>
                            <input id="titular-conta" name="titular-conta" />
                        </label>
                    </div>

                    <div>
                        <h4>Tipo de documento:</h4>
                        <label>
                            <input style={{width:'30px'}}  id="pessoa-fisica" type="checkbox" onClick={pessoaFisicaCheckbox} /><div style={{marginLeft:'3%', marginTop:'-4.4%'}}> Pessoa física </div> <br />
                            <input style={{width:'30px'}}  id="pessoa-juridica" type="checkbox" onClick={pessoaJuridicaCheckbox} /> <div style={{marginLeft:'3%', marginTop:'-4%'}}>Pessoa jurídica</div><br />
                        </label>
                    </div>

                        <h4>Agencia*:</h4>
                        <label>
                            <input className='inputAgencia' type="number" id="agencia" name="agencia" />
                        </label>

                        <h4>Digito*:</h4>
                        <label>
                            <input className='inputDigito' type="number" id="digito-agencia" name="digito" />
                        </label>

                        <h4>Conta*:</h4>
                        <label>
                            <input className='inputAgencia' type="number" id="conta" name="conta" />
                        </label>

                        <h4>Digito*:</h4>
                        <label>
                            <input className='inputDigito' type="number" id="digito-conta" name="digito" />
                        </label>

                    <div className="BotoesLoginForm">
                        <button className="ButtonLinkSquareCadastro" style={{ background: "var(--blue)", color: "var(--white)", marginLeft: "15%", padding:'25px'}} type="submit" >Confirmar dados</button>
                        <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--pink)", color: "var(--white)"}} to="/cadastro-endereco-prestador">Revisar dados anteriores</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CadastroBancarioPrestador;