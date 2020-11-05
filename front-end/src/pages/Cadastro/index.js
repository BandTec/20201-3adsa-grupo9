import React from 'react';
import './cadastro.css';
import GoogleIcon from '../../assets/img/icons/Gmail.png';
import FaceIcon from '../../assets/img/icons/facebook.png';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';


const InputTelefone = (props) => (
    <InputMask mask="(99)99999-9999" value={props.value} onChange={props.onChange} />
  );

function Cadastro(){
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
        <li style={{width: "30%"}}>
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
    <div class="step-bar" style={{width: "10%"}}></div>
</div>


            <h1 style={{color: 'var(--black)', marginTop:'9%'}}>Cadastre-se já e aumente sua clientela</h1>
            <h2 style={{color: 'var(--black)'}}>Este é o passo 1</h2> 
 
            

            <form  style={{ marginTop: "8%"}} >
	       <div class="input-container">
		   <input type="text" required="" placeholder="Digite seu nome completo"/>
		   <label>Nome completo</label>		
	       </div>

	       <div class="input-container">		
		   <input type="text" required="" placeholder="Digite seu e-mail"/>
		   <label>Email</label>
           </div>

           <div class="input-container">
           <InputTelefone  type="number" required="" placeholder="Digite seu telefone"/>
             <label>Telefone</label>
	       </div>

           <div class="input-container">
		   <input type="password" required="" placeholder="Digite sua senha"/>
		   <label>Senha</label>		
	       </div>
           </form>

           
           <button src={GoogleIcon} alt="Icone do google" className='buttonGoogle'></button>
           <button src={FaceIcon} alt="Icone do fabebook" className='buttonFace'></button>

           <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--pink)", color: "var(--white)", marginLeft:'38%'}} to='/cadastro-perfil'>Próximo passo</Link>  

</div>            
    )
}

export default Cadastro;