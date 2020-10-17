import React from 'react';
import './cadastro.css';
import GoogleIcon from '../../assets/img/icons/Gmail.png';
import FaceIcon from '../../assets/img/icons/facebook.png';


function Cadastro(){
    return(
		
        <div>
            <h1>Cadastre-se já e aumente sua clientela</h1>
            <h2>Este é o passo 1</h2> 
 
            

            <form  style={{ marginTop: "8%"}} >
	       <div class="input-container">
		   <input type="text" required=""/>
		   <label>Nome completo</label>		
	       </div>

	       <div class="input-container">		
		   <input type="mail" required=""/>
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

            
    )
}

export default Cadastro;