import React from 'react';
import './assistente.css';


function Assistente(){
    return(
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

    )
}

export default Assistente;