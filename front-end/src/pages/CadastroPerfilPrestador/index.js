import React from 'react';
import './cadastroPerfil.css';

function CadastroPerfilPrestador(){
    return(

        <div>

            <div className = 'Assistente'>
            <ol class="progress" data-steps="4">
  <li class="done">
    <span class="name">Dados cadastrais</span>
    <span class="step"><span>1</span></span>
  </li>
  <li class="active">
    <span class="name">Cadastro de perfil</span>
    <span class="step"><span>2</span></span>
  </li>
  <li class="done">
    <span class="name">Cadastro de endereço</span>
    <span class="step"><span>3</span></span>
  </li>
  <li>
    <span class="name">Dados bancários</span>
    <span class="step"><span>4</span></span>
  </li>
</ol>
            </div>

        
     
        <div className='CadastroContainer'>
            <div className='texto'>
            <h1>Falta pouco para finalizar seu cadastro, agora vamos deescrever seu perfil</h1>
            <h2>Este é o passo 2</h2>
            </div>

           <div className='cozinhar'>
            <h3 style={{marginLeft:"15%"}} >O seu serviço inclui cozinhar?</h3>
            <input  style={{margin:'4px', marginLeft: '18%'}} className='input_cozinhar' type="radio"></input>
            <label className='text_cozinha'>Sim</label>
            <input style={{margin:'4px', marginLeft: '5%'}}  className='input_cozinhar' type="radio"></input>
            <label className='text_cozinha'>Não</label>
            </div>
                
            <div className='limpeza'>
            <h3>O seu serviço inclui limpeza?</h3>
            <input  style={{margin:'4px', marginLeft: '8%'}} className='input_limpeza' type="radio"></input>
            <label className='text_limpeza'>Sim</label>
            <input  style={{margin:'4px', marginLeft: '10%'}} className='input_limpeza' type="radio"></input>
            <label className='text_limpeza'>Não</label>
            </div>

             <div className='dia_semana'>
            <h3  style={{marginLeft:"3%"}}>Quantos dias por semana voce deseja trabalhar?</h3>

                <div  style={{marginLeft: '3%'}}>
            <input  className='inputRadio' type="radio"></input>
            <label className='text'>1</label>

            <input className='inputRadio' type="radio"></input>
            <label className='text'>2</label>

            <input className='inputRadio' type="radio"></input>
            <label className='text'>3</label>

            <input className='inputRadio' type="radio"></input>
            <label className='text'>4</label>

            <input className='inputRadio' type="radio"></input>
            <label className='text'>5</label>

            <input className='inputRadio' type="radio"></input>
            <label className='text'>6</label>

            <input className='inputRadio' type="radio"></input>
            <label className='text'>7</label>
            </div>
            </div>

            <div className='pagamento'>
            <h3>De qual forma voce deseja cobrar o seu trabalho?</h3>

            <input className='input_pagamento' type="radio"></input>
            <label className='text_pagamento'>Cobrar por hora</label>

            <input className='input_pagamento' type="radio"></input>
            <label className='text_pagamento'>Cobrar por preço fixo</label>
            </div>

            <div className='dias_semana'>
                <h3 style={{margin:"1%"}} >Quais dias da semana voce deseja trabalhar?</h3>
                

                <input className='check' type="checkbox"></input>
                <label className='text_dias'>Segunda-feira</label>

                <input type="checkbox"></input>
                <label className='text_dias'>Terça-feira</label>
                <input type="checkbox"></input>
                <label className='text_dias'>Quarta-feira</label>

                <input type="checkbox"></input>
                <label className='text_dias'>Quinta-feira</label>

                <input type="checkbox"></input>
                <label className='text_dias'>Sexta-feira</label>

                <input type="checkbox"></input>
                <label className='text_dias'>Sabádo</label>

                <input type="checkbox"></input>
                <label className='text_dias'>Domingo</label>
            </div>

            <button  style={{backgroundColor: '#EF335F'}} className='botaoContinuar'>Continuar cadastro</button>
            <button className='botaoRevisar'>revisar dados anteriores</button>
            </div>
        </div>
    )
}


export default CadastroPerfilPrestador;