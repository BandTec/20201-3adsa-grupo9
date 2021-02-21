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

            
                <button>Salvar informações</button>

                </div>
    )}


    export default InfoPerfilContratante;