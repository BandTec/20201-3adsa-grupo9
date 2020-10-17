import React from 'react';
import './cadastroPerfil.css';

function CadastroPerfilPrestador(){
    return(
        <div className='CadastroContainer'>
            <h1>Falta pouco para finalizar seu cadastro, agora vamos deescrever seu perfil</h1>
            <h2>Este é o passo 2</h2>

            <div>
            <select className='servico'>
            <option value="0">Selecione sua profissão:</option>
            <option value="1">Babá</option>
            <option value="2">Pedreiro</option>
            <option value="3">Pintor</option>
            </select>
            </div>


             <div className='dia_semana'>
            <h3>Quantos dias por semana voce deseja trabalhar?</h3>

            <input className='inputRadio' type="radio"></input>
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

            <div className='pagamento'>
            <h3>De qual forma voce deseja cobrar o seu trabalho?</h3>

            <input className='inputRadio' type="radio"></input>
            <label className='text_pagamento'>Cobrar por hora</label>

            <input className='inputRadio' type="radio"></input>
            <label className='text_pagamento'>Cobrar por preço fixo</label>
            </div>

            <div className='dias_semana'>
                <h3>Quais dias da semana voce deseja trabalhar?</h3>

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

            <button className='botaoContinuar'>Continuar cadastro</button>
            <button className='botaoRevisar'>revisar dados anteriores</button>

        </div>
    )
}


export default CadastroPerfilPrestador;