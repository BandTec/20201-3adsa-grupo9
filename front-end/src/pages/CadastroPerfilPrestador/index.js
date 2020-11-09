import React from 'react';
import './cadastroPerfil.css';
import { Link } from 'react-router-dom';


function CadastroPerfilPrestador(){
    return(      
        <div style={{backgroundColor: 'var(--white)'}} className='CadastroContainer'>
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
        <li  style={{width: "20%"}}>
            <div class="step">
                <div class="step-image"><span></span></div>
                <div class="step-current">Etapa 3</div>
                <div class="step-description">Cadastro de endereço</div>
            </div>
        </li>
        <li  style={{width: "20%"}}>
            <div class="step">
                <div class="step-image"><span></span></div>
                <div class="step-current">Etapa 4</div>
                <div class="step-description">Dados bancários</div>
            </div>
        </li>
    </ul>
    <div class="step-bar" style={{width: "35%"}}></div>
</div>

            <div style={{margin: '5%'}}>
            <h1>Falta pouco para finalizar seu cadastro, agora vamos deescrever seu perfil</h1>
            <h2>Este é o passo 2</h2>
            </div>

            <div className='formulario'>
                <div className='cozinhar'>
                <h3>O seu serviço inclui cozinhar?</h3>
                <button style={{marginLeft:'35%'}}>Sim </button>
                <button>Não</button>
                </div>

                <div className='limpeza'>
                <h3>O seu serviço inclui limpeza?</h3>
                <button style={{marginLeft:'35%'}}>Sim </button>
                <button>Não</button>
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

                <div className= 'diasSemana'>
                <h3>Quais dias da semana voce deseja trabalhar?</h3>

                <input type="checkbox" id="segunda" ></input>
                <label for="scales">Segunda-feira</label>

                <input type="checkbox" id="terca" ></input>
                <label for="scales">Terça-feira</label>

                <input type="checkbox" id="quarta" ></input>
                <label for="scales">Quarta-feira</label>

                <input type="checkbox" id="quinta" ></input>
                <label for="scales">Quinta-feira</label>

                <input type="checkbox" id="sexta" ></input>
                <label for="scales">Sexta-feira</label>

                <input type="checkbox" id="sabado"></input>
                <label for="scales">Sabádo-feira</label>

                <input type="checkbox" id="domingo"></input>
                <label for="scales">Domingo-feira</label>


               </div>
                
            </div>


<div style={{margin: '5%'}}></div>
           
            <Link  className="ButtonLinkSquareCadastro" style={{ background: "var(--blue)", marginRight: "5%", color:"var(--white)", marginLeft: "15%"}} to="/cadastro-endereco-prestador">Próximo passo</Link>
            <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--pink)", color: "var(--white)" }} to='/cadastro'>Revisar dados anteriores</Link>
            </div>
    )
}


export default CadastroPerfilPrestador;