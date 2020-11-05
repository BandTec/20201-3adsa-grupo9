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



            <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--blue)", marginRight: "5%", color:"var(--white)", marginLeft: "15%"}} to="/cadastro-endereco-prestador">Próximo passo</Link>
            <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--pink)", color: "var(--white)" }} to='/cadastro'>Revisar dados anteriores</Link>
            </div>
    )
}


export default CadastroPerfilPrestador;