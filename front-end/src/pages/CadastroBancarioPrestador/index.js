import React from 'react';
import './cadastroBancario.css';
import InfoIcon from '../../assets/img/icons/info.png';
import { Link } from 'react-router-dom';


function CadastroBancarioPrestador(){
    return(

        <div className='ContainerBancario'>

<div class="steps">
    <ul class="steps-container">
        <li  style={{width: "20%"}} class="activated">
            <div class="step">
                <div class="step-image"><span></span></div>
                <div class="step-current">Etapa 1</div>
                <div class="step-description">Dados cadastrais</div>
            </div>
        </li>
        <li style={{width: "30%"}} class="activated">
            <div class="step">
                <div  class="step-image"><span></span></div>
                <div class="step-current">Etapa 2</div>
                <div class="step-description">Cadastro de perfil</div>
            </div>
        </li>
        <li  style={{width: "20%"}} class="activated">
            <div class="step">
                <div class="step-image"><span></span></div>
                <div class="step-current">Etapa 3</div>
                <div class="step-description">Cadastro de endereço</div>
            </div>
        </li>
        <li  style={{width: "20%"}} class="activated">
            <div class="step">
                <div class="step-image"><span></span></div>
                <div class="step-current">Etapa 4</div>
                <div class="step-description">Dados bancários</div>
            </div>
        </li>
    </ul>
    <div class="step-bar" style={{width: "80%"}}></div>
</div>


           


<div  className="CadastroInfoBancariaPrestadorContainer"  style={{ padding: '5%'}}>
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
                        <input type="number" name="agencia"/>
                    </label>
                    <h4>Digito*:</h4>
                    <label>
                        <input type="number" name="digito"/>
                    </label>
                </div>
                <div>
                    <h4>Conta*:</h4>
                    <label>
                        <input type="number" name="conta"/>
                    </label>
                    <h4>Digito*:</h4>
                    <label>
                        <input type="number" name="digito"/>
                    </label>
                </div>
                <div className="BotoesLoginForm">
                    <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--blue)", marginRight: "5%", color:"var(--white)", marginLeft: "28%"}} to="/termos">Confirmar dados</Link>
                    <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--pink)", color: "var(--white)" }} to="/cadastro-endereco-prestador">Revisar dados anteriores</Link>
                </div>
            </form>
        </div>
        </div>
    )
}

export default CadastroBancarioPrestador;