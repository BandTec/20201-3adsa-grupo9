import React from 'react';
import './cadastroBancario.css';
import InfoIcon from '../../assets/img/icons/info.png';
import { Link } from 'react-router-dom';


function CadastroBancarioPrestador(){
    return(

        <div className='ContainerBancario'>
            <div className = 'Assistente'>
            <ol class="progress" data-steps="4">
  <li class="active">
    <span class="name">Dados cadastrais</span>
    <span class="step"><span>1</span></span>
  </li>
  <li class="active">
    <span class="name">Cadastro de perfil</span>
    <span class="step"><span>2</span></span>
  </li>
  <li class="active">
    <span class="name">Cadastro de endereço</span>
    <span class="step"><span>3</span></span>
  </li>
  <li>
    <span class="name">Dados bancários</span>
    <span class="step"><span>4</span></span>
  </li>
</ol>


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
                    <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--blue)", marginRight: "5%", color:"var(--white)", marginLeft: "28%"}} to="/termos">Confirmar dados</Link>
                    <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--pink)", color: "var(--white)" }}>Revisar dados anteriores</Link>
                </div>
            </form>
        </div>
        </div>
        </div>
    )
}

export default CadastroBancarioPrestador;