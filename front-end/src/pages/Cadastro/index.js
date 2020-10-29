import React from 'react';
import './cadastro.css';
import GoogleIcon from '../../assets/img/icons/Gmail.png';
import FaceIcon from '../../assets/img/icons/facebook.png';
import Assistente from '../../components/Assistente';


function Cadastro(){
    return(	
		<div>
		<div className='Assistente'>
        <div className='CadastroContainer'>
			<ol class="progress" data-steps="4">
  <li class="active">
    <span class="name">Dados cadastrais</span>
    <span class="step"><span>1</span></span>
  </li>
  <li class="done">
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
             
			 
            <h1 style={{color: 'var(--black)'}}>Cadastre-se já e aumente sua clientela</h1>
            <h2 style={{color: 'var(--black)'}}>Este é o passo 1</h2> 
 
            

            <form  style={{ marginTop: "8%"}} >
	       <div class="input-container">
		   <input type="text" required=""/>
		   <label>Nome completo</label>		
	       </div>

	       <div class="input-container">		
		   <input type="text" required=""/>
		   <label>Email</label>
           </div>

           <div class="input-container">
		   <input type="text" required=""/>
		   <label>Telefone</label>		
	       </div>

           <div class="input-container">
		   <input type="text" required=""/>
		   <label>Senha</label>		
	       </div>
           </form>

           
           <button src={GoogleIcon} alt="Icone do google" className='buttonGoogle'></button>
           <button src={FaceIcon} alt="Icone do fabebook" className='buttonFace'></button>

           <button className='buttonNext'>Próximo passo</button>

           

</div>
	</div>

            
    )
}

export default Cadastro;