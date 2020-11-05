import React from 'react';
import './cadastroEndereco.css';
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';




const InputCep = (props) => (
    <InputMask mask="99999-999" value={props.value} onChange={props.onChange} />
  );

function CadastroEnderecoPrestador(){
    return(
        
         <div className='ContainerEndereco'>

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
        <li  style={{width: "20%"}} class="activated">
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
    <div class="step-bar" style={{width: "60%"}}></div>
</div>


             <h1  style={{color: 'var(--black)', marginTop:'9%'}}>Cadastro de endereço</h1>
             <h2>Este é o passo 3</h2>

             <div className='form'>
             <form>
             <label className='titulo' for="cep">Informe seu CEP: </label>
             <InputCep type="text" id="cep" name="cep" placeholder="Digite seu CEP"></InputCep>

             <label className='titulo'  for="endereco">Endereço: </label>
             <input type="text" id="endereco" name="endereco" placeholder="Digite seu endereço"></input>

             <label className='titulo'  for="bairro">Bairro: </label>
             <input type="text" id="bairro" name="bairro" placeholder="Digite seu bairro"></input>

             <label className='titulo'  for="numero">Número: </label>
             <input type="text" id="numero" name="numero" placeholder="Digite o número da casa"></input>

             <label className='titulo'  for="complemento">Complemento: </label>
             <input type="text" id="complemento" name="complemento" placeholder="Complemento"></input>

             </form>
             </div>

            <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--blue)", marginRight: "5%", color:"var(--white)", marginLeft: "28%"}} to="/cadastro-info-bancaria-prestador">Próximo passo</Link>
            <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--pink)", color: "var(--white)" }} to='/cadastro-perfil'>Revisar dados anteriores</Link>

  

         </div>
    )
}

export default CadastroEnderecoPrestador;

