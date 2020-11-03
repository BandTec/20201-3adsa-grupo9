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

      <div class="progressbar-wrapper">
      <ul class="progressbar">
          <li class="active">Cadastro</li>
          <li className='li02'>Informações profissionais</li>
          <li className='li03'>Cadastro de endereço</li>
          <li className='li04'>Dados bancários</li>
      </ul>
</div>

            <h1 style={{color: 'var(--black)', marginTop:'9%'}}>Cadastre-se já e aumente sua clientela</h1>
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
		   <InputTelefone>Telefone</InputTelefone>	
	       </div>

           <div class="input-container">
		   <input type="password" required=""/>
		   <label>Senha</label>		
	       </div>
           </form>

           
           <button src={GoogleIcon} alt="Icone do google" className='buttonGoogle'></button>
           <button src={FaceIcon} alt="Icone do fabebook" className='buttonFace'></button>

           <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--pink)", color: "var(--white)", marginLeft:'38%'}}>Próximo passo</Link>


           

</div>            
    )
}

export default Cadastro;