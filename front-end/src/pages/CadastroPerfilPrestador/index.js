import React from 'react';
import './cadastroPerfil.css';
import { Link, useHistory } from 'react-router-dom';


function CadastroPerfilPrestador() {

    const history = useHistory();

    function setCozinharSim() {
        localStorage.setItem("cozinhar", true);
    }

    function setCozinharNao() {
        localStorage.setItem("cozinhar", false);
        localStorage.setItem("precoCozinhar", 0.00);
        document.getElementById("precoCozinhar").value = 0.00;
    }

    function setLimpezaSim() {
        localStorage.setItem("limpar", true);
    }

    function setLimpezaNao() {
        localStorage.setItem("limpar", false);
        localStorage.setItem("precoLimpeza", 0.00);
        document.getElementById("precoLimpeza").value = 0.00;
    }

    function handleCobrarHoraCheckbox() {
        document.getElementById("cobrarFixo").checked = false;
        localStorage.setItem("cobrarHora", true);
        localStorage.setItem("cobrarFixo", false);
        document.getElementById("precoFixo").value = 0.00;
    }

    function handleCobrarFixoCheckbox() {
        document.getElementById("cobrarHora").checked = false;
        localStorage.setItem("cobrarHora", false);
        localStorage.setItem("cobrarFixo", true);
        document.getElementById("precoHora").value = 0.00;
    }

    function handleCadastroDoisPrestador(e) {
        e.preventDefault();

        var qtdDiasEscolhidos = 0;

        var element = document.getElementById("selectDias");
        localStorage.setItem("qtdSelectDias", element.options[element.selectedIndex].value);

        localStorage.setItem("segunda", document.getElementById("segunda").checked);
        localStorage.setItem("terca", document.getElementById("terca").checked);
        localStorage.setItem("quarta", document.getElementById("quarta").checked);
        localStorage.setItem("quinta", document.getElementById("quinta").checked);
        localStorage.setItem("sexta", document.getElementById("sexta").checked);
        localStorage.setItem("sabado", document.getElementById("sabado").checked);
        localStorage.setItem("domingo", document.getElementById("domingo").checked);
        localStorage.setItem("cobrarHora", document.getElementById("cobrarHora").checked);
        localStorage.setItem("cobrarFixo", document.getElementById("cobrarFixo").checked);
        localStorage.setItem("precoCozinhar", document.getElementById("precoCozinhar").value);
        localStorage.setItem("precoLimpeza", document.getElementById("precoLimpeza").value);
        localStorage.setItem("precoAteTres", document.getElementById("preco_ate_tres").value);
        localStorage.setItem("precoTresAteOito", document.getElementById("preco_tres_ate_oito").value);
        localStorage.setItem("precoNoveAteQuinze", document.getElementById("preco_nove_ate_quinze").value);
        localStorage.setItem("precoHora", document.getElementById("precoHora").value);
        localStorage.setItem("precoFixo", document.getElementById("precoFixo").value);

        if (localStorage.getItem("segunda") === "true") {
            qtdDiasEscolhidos++;
        }
        if (localStorage.getItem("terca") === "true") {
            qtdDiasEscolhidos++;
        }
        if (localStorage.getItem("quarta") === "true") {
            qtdDiasEscolhidos++;
        }
        if (localStorage.getItem("quinta") === "true") {
            qtdDiasEscolhidos++;
        }
        if (localStorage.getItem("sexta") === "true") {
            qtdDiasEscolhidos++;
        }
        if (localStorage.getItem("sabado") === "true") {
            qtdDiasEscolhidos++;
        }
        if (localStorage.getItem("domingo") === "true") {
            qtdDiasEscolhidos++;
        }

        if (document.getElementById("preco_ate_tres").value.length === 0) {
            localStorage.setItem("precoAteTres", 0.00);
            document.getElementById("preco_ate_tres").value = 0.00;
        }

        if (document.getElementById("preco_tres_ate_oito").value.length === 0) {
            localStorage.setItem("precoTresAteOito", 0.00);
            document.getElementById("preco_tres_ate_oito").value = 0.00;
        }

        if (document.getElementById("preco_nove_ate_quinze").value.length === 0) {
            localStorage.setItem("precoNoveAteQuinze", 0.00);
            document.getElementById("preco_nove_ate_quinze").value = 0.00;
        }

        if (document.getElementById("precoHora").value.length === 0 && document.getElementById("cobrarHora").checked === "false" &&
            document.getElementById("precoFixo").value.length === 0 && document.getElementById("cobrarFixo").checked === "false") {
            alert("Por favor, antes de prosseguir, selecione a forma como deseja custear seus serviços.");
        }
        else {
            if (localStorage.getItem("qtdSelectDias") == qtdDiasEscolhidos) {
                history.push('/cadastro-endereco-prestador');
            }
            else {
                alert("A quantidade de dias informados é diferente da quantidade selecionada.");
            }
        }
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
                    <button className='botaoSim' onClick={setCozinharSim}>Sim </button>
                    <button className='botaoNao' onClick={setCozinharNao}>Não</button>
                    <input style={{ marginTop: '2%', width: '20%', marginLeft: '40%' }} type="text" id="precoCozinhar" placeholder="Qual o valor que voce cobra?" />
                </div>



                <div className='limpeza'>
                    <h3>O seu serviço inclui limpeza?</h3>
                    <button className='botaoSim' onClick={setLimpezaSim}>Sim </button>
                    <button className='botaoNao' onClick={setLimpezaNao}>Não</button>
                    <input style={{ marginTop: '2%', width: '20%', marginLeft: '40%' }} type="text" id="precoLimpeza" placeholder="Qual o valor que voce cobra?" />
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

                <h3>Quais dias da semana voce deseja trabalhar?</h3>
                <div className='diasSemana'>
                    <input type="checkbox" id="segunda" />
                    <label style={{ margin: '1%' }} for="scales">Segunda-feira</label>

                    <input type="checkbox" id="terca" />
                    <label style={{ margin: '1%' }} for="scales">Terça-feira</label>

                    <input type="checkbox" id="quarta" />
                    <label style={{ margin: '1%' }} for="scales">Quarta-feira</label>

                    <input type="checkbox" id="quinta" />
                    <label style={{ margin: '1%' }} for="scales">Quinta-feira</label>

                    <input type="checkbox" id="sexta" />
                    <label style={{ margin: '1%' }} for="scales">Sexta-feira</label>

                    <input type="checkbox" id="sabado" />
                    <label style={{ margin: '1%' }} for="scales">Sabádo-feira</label>

                    <input type="checkbox" id="domingo" />
                    <label style={{ margin: '1%' }} for="scales">Domingo-feira</label>
                </div>

                <h3 style={{ fontSize: '18px', margin: '5%' }}>Preço cobrado por faixa etária:</h3>
                <h3 style={{ margin: '-1%' }}>Crianças até 3 anos</h3>
                <input style={{ marginTop: '2%', width: '20%', marginLeft: '40%' }} type="text" id="preco_ate_tres" placeholder="Qual o valor que voce cobra?" />

                <h3 style={{ margin: '1%' }}>Crianças de 3 anos a 8 anos</h3>
                <input style={{ marginTop: '2%', width: '20%', marginLeft: '40%' }} type="text" id="preco_tres_ate_oito" placeholder="Qual o valor que voce cobra?" />

                <h3>Crianças de 8 anos a 15 anos</h3>
                <input style={{ marginTop: '2%', width: '20%', marginLeft: '40%' }} type="text" id="preco_nove_ate_quinze" placeholder="Qual o valor que voce cobra?" />

                <h3 style={{ margin: '2%' }}>Qual forma deseja cobrar pelo serviço?</h3>

                <input style={{ marginLeft: '40%' }} type="checkbox" id="cobrarHora" onClick={handleCobrarHoraCheckbox} />
                <label style={{ margin: '1%' }} for="scales">Cobrar por hora</label>
                <input style={{ marginTop: '2%', width: '20%', marginLeft: '40%' }} type="text" id="precoHora" placeholder="Qual o valor que voce cobra?" />
                <input style={{ marginLeft: '40%' }} type="checkbox" id="cobrarFixo" onClick={handleCobrarFixoCheckbox} />
                <label style={{ margin: '1%' }} for="scales">Cobrar por preço fixo</label>
                <input style={{ marginTop: '2%', width: '20%', marginLeft: '40%' }} type="text" id="precoFixo" placeholder="Qual o valor que voce cobra?" />

                 <div style={{padding:'3%'}} />

                <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--blue)", marginRight: "7%", color: "var(--white)", marginLeft: "19%"}} onClick={handleCadastroDoisPrestador}>Próximo passo</Link>
            <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--pink)", color: "var(--white)" }} to='/cadastro'>Revisar dados anteriores</Link>
                
            <div style={{padding:'3%'}} />

            </div>
            
        </div>


    )
}


export default CadastroPerfilPrestador;