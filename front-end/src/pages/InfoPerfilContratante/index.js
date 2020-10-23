import React from 'react';

import './info-perfil-contratante.css';

import InfoIcon from '../../assets/img/icons/info.png';

import BannerPerfilLateral from '../../components/BannerPerfilLateral';

function InfoPerfilContratante(){
    return(
        <div className="InfoPerfilContratanteContainer">
            <BannerPerfilLateral />
            <h3>Informações pessoais</h3>
            <form className="FormularioInfoPerfilContratante" onSubmit={function handleSubmit(){}}>
                <div>
                    <h4>Nome completo:</h4>
                    <label>
                        <input type="text" name="nome"/>
                    </label>
                </div>
                <div>
                    <h4>CPF:</h4>
                    <label>
                        <input type="text" name="cpf"/>
                    </label>
                </div>
                <div>
                    <h4>CEP:</h4>
                    <label>
                        <input type="text" name="cep"/>
                    </label>
                </div>
                <div>
                    <h4>Bairro:</h4>
                    <label>
                        <input type="text" name="bairro"/>
                    </label>
                </div>
                <div>
                    <h4>Endereço:</h4>
                    <label>
                        <input type="text" name="rua"/>
                    </label>
                </div>
                <div>
                    <h4>Número:</h4>
                    <label>
                        <input type="text" name="numero"/>
                    </label>
                </div>
                <div>
                    <h4>Complemento:</h4>
                    <label>
                        <input type="text" name="complemento"/>
                    </label>
                </div>
                <button>Salvar informações</button>
            </form>

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
                <button>Salvar informações</button>
            </form>
        </div>
    )}


    export default InfoPerfilContratante;