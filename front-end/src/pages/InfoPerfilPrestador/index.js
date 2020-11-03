import React from 'react';
import { Link } from 'react-router-dom';
import InfoIcon from '../../assets/img/icons/info.png';
import './perfil-contratante.css';
import BannerPerfilLateral from '../../components/BannerPerfilLateral';
import InputMask from 'react-input-mask';

const Input = (props) => (
    <InputMask mask="999.999.999-99" value={props.value} onChange={props.onChange} />
  );

  const InputCep = (props) => (
    <InputMask mask="99999-999" value={props.value} onChange={props.onChange} />
  );


function PerfilContratante(){
    return(
        
        <div className="PerfilContainer">
                        <BannerPerfilLateral />

            
                 <h2 style={{margin: '8%', marginLeft: '25%'}}>informações pessoais</h2>
                 <form className="FormularioPerfil" onSubmit={function handleSubmit(){}}>
                 <div>
                    <h4>Nome completo:</h4>
                    <label>
                        <input type="text" name="nome"/>
                    </label>
                </div>

                <div>
                    <h4>CPF:</h4>
                    <label>
                        <Input type="text" name="cpf"/>
                    </label>
                </div>

                <div>
                    <h4>CEP:</h4>
                    <label>
                        <InputCep type="text" name="cep"/>
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
                        <input type="text" name="endereco"/>
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



                <h3 style={{margin:'5%'}}>Dados bancários <img style={{width:'25px'}} src={InfoIcon} alt="Ponto de interrogação"/></h3>
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
                        <input className="Checkbox" type="checkbox" /><h1>Pessoa física</h1><br/>
                        <input className="Checkbox" type="checkbox" /> <h1>Pessoa jurídica</h1> <br/>
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

                <div style={{margin:'5%'}} className="BotoesPerfilForm">
                    <Link className="ButtonLinkSquarePerfil" style={{ background: "var(--blue)"}}>Atualizar informações</Link>
                </div>
            </form>


        </div>

    );
}

export default PerfilContratante;