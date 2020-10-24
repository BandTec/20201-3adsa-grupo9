import React from 'react';
import './cadastroEndereco.css';


function CadastroEnderecoPrestador(){
    return(
         <div className='ContainerEndereco'>

             <div className = 'Assistente'>
             <ol class="progress" data-steps="4">
  <li class="done">
    <span class="name">Dados cadastrais</span>
    <span class="step"><span>1</span></span>
  </li>
  <li class="done">
    <span class="name">Cadastro de perfil</span>
    <span class="step"><span>2</span></span>
  </li>
  <li class="active">
    <span class="name">Cadastro de endereço</span>
    <span class="step"><span>3</span></span>
  </li>
  <li>
    <span class="name">Dados bancários</span>
    <span class="step"><span>4</span></span>
  </li>
</ol>
             </div>

             <h1>Cadastro de endereço</h1>
             <h2>Este é o passo 3</h2>

             <div className='form'>
             <form>
             <label className='titulo' for="cep">Informe seu CEP: </label>
             <input type="text" id="cep" name="cep" placeholder="Digite seu CEP"></input>

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

            <button className='botaoContinuar' style={{ background: "var(--pink)", color: "var(--white)" }}>Continuar cadastro</button>
            <button className='botaoRevisar'>revisar dados anteriores</button>

  

         </div>
    )
}

export default CadastroEnderecoPrestador;

