import React from 'react';
import './cadastroPerfil.css';
import { Link, useHistory } from 'react-router-dom';


function CadastroPerfilPrestador() {

    const history = useHistory();

    function handleCadastroDoisPrestador(e){
        e.preventDefault();

        var qtdDiasEscolhidos = 0;

        var element = document.getElementById("selectDias");
        localStorage.setItem("qtdSelectDias", element.options[element.selectedIndex].value );

        localStorage.setItem("segunda", document.getElementById("segunda").checked);
        localStorage.setItem("terca", document.getElementById("terca").checked);
        localStorage.setItem("quarta", document.getElementById("quarta").checked);
        localStorage.setItem("quinta", document.getElementById("quinta").checked);
        localStorage.setItem("sexta", document.getElementById("sexta").checked);
        localStorage.setItem("sabado", document.getElementById("sabado").checked);
        localStorage.setItem("domingo", document.getElementById("domingo").checked);

        if(localStorage.getItem("segunda") === "true"){
            qtdDiasEscolhidos++;
        }
        if(localStorage.getItem("terca") === "true"){
            qtdDiasEscolhidos++;
        }
        if(localStorage.getItem("quarta") === "true"){
            qtdDiasEscolhidos++;
        }
        if(localStorage.getItem("quinta") === "true"){
            qtdDiasEscolhidos++;
        }
        if(localStorage.getItem("sexta") === "true"){
            qtdDiasEscolhidos++;
        }
        if(localStorage.getItem("sabado") === "true"){
            qtdDiasEscolhidos++;
        }
        if(localStorage.getItem("domingo") === "true"){
            qtdDiasEscolhidos++;
        }

        if( localStorage.getItem('qtdSelectDias') == qtdDiasEscolhidos ){
            history.push('/cadastro-endereco-prestador');
        }
        else{
            alert("A quantidade de dias informados é diferente da quantidade selecionada.");
        }
    }

    function setCozinharSim() {
        localStorage.setItem("cozinhar", true);
    }
    
    function setCozinharNao() {
        localStorage.setItem("cozinhar", false);
    }
    
    function setLimpezaSim() {
        localStorage.setItem("limpar", true);
    }
    
    function setLimpezaNao() {
        localStorage.setItem("limpar", false);
    }

    return (
        <div style={{ backgroundColor: 'var(--white)' }} className='CadastroContainer'>
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
                    <li style={{ width: "20%" }}>
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
                <div className="step-bar" style={{ width: "35%" }}></div>
            </div>

            <div style={{ margin: '5%' }}>
                <h1>Falta pouco para finalizar seu cadastro, agora vamos deescrever seu perfil</h1>
                <h2>Este é o passo 2</h2>
            </div>

            <div className='formulario'>
                <div className='cozinhar'>
                    <h3>O seu serviço inclui cozinhar?</h3>
                    <button style={{ marginLeft: '35%' }} onClick={setCozinharSim}>Sim </button>
                    <button onClick={setCozinharNao}>Não</button>
                </div>

                <div className='limpeza'>
                    <h3>O seu serviço inclui limpeza?</h3>
                    <button style={{ marginLeft: '35%' }} onClick={setLimpezaSim}>Sim </button>
                    <button onClick={setLimpezaNao}>Não</button>
                </div>

                <div className='QtdSemana'>
                    <h3>Quantos dias da semana voce deseja trabalhar?</h3>
                    <select className='select' id='selectDias'>
                        <option value='0'> Selecione a quantidade de dias</option>
                        <option value='1'>1 dia</option>
                        <option value='2'>2 dias</option>
                        <option value='3'>3 dias</option>
                        <option value='4'>4 dias</option>
                        <option value='5'>5 dias</option>
                        <option value='6'>6 dias</option>
                        <option value='7'>7 dias</option>
                    </select>
                </div>

                <div className='diasSemana'>
                    <h3>Quais dias da semana voce deseja trabalhar?</h3>

                    <input type="checkbox" id="segunda" />
                    <label for="scales">Segunda-feira</label>

                    <input type="checkbox" id="terca" />
                    <label for="scales">Terça-feira</label>

                    <input type="checkbox" id="quarta" />
                    <label for="scales">Quarta-feira</label>

                    <input type="checkbox" id="quinta" />
                    <label for="scales">Quinta-feira</label>

                    <input type="checkbox" id="sexta" />
                    <label for="scales">Sexta-feira</label>

                    <input type="checkbox" id="sabado" />
                    <label for="scales">Sabádo-feira</label>

                    <input type="checkbox" id="domingo" />
                    <label for="scales">Domingo-feira</label>


                </div>

            </div>


            <div style={{ margin: '5%' }}></div>

            <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--blue)", marginRight: "5%", color: "var(--white)", marginLeft: "15%" }} onClick={handleCadastroDoisPrestador}>Próximo passo</Link>
            <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--pink)", color: "var(--white)" }} to='/cadastro'>Revisar dados anteriores</Link>
        </div>
    )
}


export default CadastroPerfilPrestador;