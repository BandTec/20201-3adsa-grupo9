import React from 'react';
import './cadastroEndereco.css';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

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


            <h1 style={{ color: 'var(--black)', marginTop: '5%' }}>Cadastro de endereço</h1>
            <h2>Este é o passo 3</h2>

            <div style={{marginLeft:'35%', marginTop:'3%'}} className='form'>
                <form onSubmit={handleCadastroTresPrestador}>
                    <label style={{margin:'1%'}}>Informe seu CEP: </label>
                    <input style={{margin:'1%', width:'50%'}} type="text" id="cep" name="cep" placeholder="Digite seu CEP"
                        onBlur={ async e => {
                            var uri = `/trabalhadores/cep/${document.getElementById("cep").value}`;
                            const response = await api.get(uri);
                            document.getElementById("endereco").value = response.data.logradouro;
                            document.getElementById("bairro").value = response.data.bairro;
                            document.getElementById("complemento").value = response.data.complemento;
                        }} />

                    <label style={{margin:'1%'}}>Endereço: </label>
                    <input style={{margin:'1%', width:'50%'}}  type="text" id="endereco" name="endereco" placeholder="Digite seu endereço" />

                    <label style={{margin:'1%'}}>Bairro: </label>
                    <input  style={{margin:'1%', width:'50%'}} type="text" id="bairro" name="bairro" placeholder="Digite seu bairro" />

                    <label style={{margin:'1%'}}>Número: </label>
                    <input  style={{margin:'1%', width:'50%'}} type="text" id="numero" name="numero" placeholder="Digite o número da casa" />

                    <label style={{margin:'1%'}}>Complemento: </label>
                    <input  style={{margin:'1%', width:'50%'}} type="text" id="complemento" name="complemento" placeholder="Complemento" />


                    <button className="ButtonLinkSquareCadastro" style={{ background: "var(--blue)", color: "var(--white)",padding:'25px', marginTop:'7%', marginLeft:'-23.2%', textAlign: 'center'}} type="submit" >Próximo passo</button>
                </form>
            </div>
               
            <div style={{marginTop: '-3.7%', marginLeft: "50%"}} >
            <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--pink)", color: "var(--white)"}} to='/cadastro-perfil'>Revisar dados anteriores</Link>
            </div> 

        <div style={{padding:'3%'}} />

        </div>
    )
}

export default CadastroEnderecoPrestador;

