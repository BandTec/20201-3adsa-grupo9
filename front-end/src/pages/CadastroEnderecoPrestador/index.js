import React from 'react';
import './cadastroEndereco.css';
// import InputMask from 'react-input-mask';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

// const InputCep = (props) => (
//     <InputMask mask="99999-999" value={props.value} onChange={props.onChange} />
// );

function CadastroEnderecoPrestador() {

    const history = useHistory();

    function handleCadastroTresPrestador(e) {
        e.preventDefault();

        localStorage.setItem("cep", document.getElementById("cep").value);
        localStorage.setItem("endereco", document.getElementById("endereco").value);
        localStorage.setItem("bairro", document.getElementById("bairro").value);
        localStorage.setItem("numero", document.getElementById("numero").value);
        localStorage.setItem("complemento", document.getElementById("complemento").value);

        history.push('/cadastro-info-bancaria-prestador');
        // to="/cadastro-info-bancaria-prestador"
    }

    return (

        <div className='ContainerEndereco'>

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
                    <li style={{ width: "20%" }}>
                        <div className="step">
                            <div className="step-image"><span></span></div>
                            <div className="step-current">Etapa 4</div>
                            <div className="step-description">Dados bancários</div>
                        </div>
                    </li>
                </ul>
                <div className="step-bar" style={{ width: "60%" }}></div>
            </div>


            <h1 style={{ color: 'var(--black)', marginTop: '9%' }}>Cadastro de endereço</h1>
            <h2>Este é o passo 3</h2>

            <div className='form'>
                <form onSubmit={handleCadastroTresPrestador}>
                    <label className='titulo' >Informe seu CEP: </label>
                    <input type="text" id="cep" name="cep" placeholder="Digite seu CEP"
                        onBlur={e => {
                            var uri = `/ws/${document.getElementById("cep").value}/json`;
                            const response = api.get(uri);
                            document.getElementById("endereco").value = response.endereco;
                            document.getElementById("bairro").value = response.bairro;
                        }} />

                    <label className='titulo' >Endereço: </label>
                    <input type="text" id="endereco" name="endereco" placeholder="Digite seu endereço" />

                    <label className='titulo' >Bairro: </label>
                    <input type="text" id="bairro" name="bairro" placeholder="Digite seu bairro" />

                    <label className='titulo' >Número: </label>
                    <input type="text" id="numero" name="numero" placeholder="Digite o número da casa" />

                    <label className='titulo' >Complemento: </label>
                    <input type="text" id="complemento" name="complemento" placeholder="Complemento" />

                    <button className="ButtonLinkSquareCadastro" style={{ background: "var(--blue)", marginRight: "5%", color: "var(--white)", marginLeft: "28%" }} type="submit" >Próximo passo</button>
                </form>
            </div>

            <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--pink)", color: "var(--white)" }} to='/cadastro-perfil'>Revisar dados anteriores</Link>



        </div>
    )
}

export default CadastroEnderecoPrestador;

