import React from 'react';
import './cadastroBancario.css';


function CadastroBancarioPrestador(){
    return(
        <div className='ContainerBancario'>

            <h1>CADASTRO DE INFORMAÇÕES BANCÁRIAS</h1>
            <h2>Este é o passo 4</h2>

            <h3>Dados bancários</h3>

            <div className='form'>
             <form>
             <label className='subTitulo'>Banco: </label>
             <input  className='ajuste' id="banco" name="banco" placeholder="nome do banco"></input>

             <label  className='subTitulo'>Tipo da conta: </label>
             <input   className='ajuste' id="conta" name="conta" placeholder="Tipo da conta"></input>

             <label  className='subTitulo'>Titular da conta*: </label>
             <input    className='ajuste' id="titular" name="titular" placeholder="Titular da conta"></input>

             <label  className='subTitulo' >CPF*: </label>
             <input   className='ajuste' id="cpf" name="cpf" placeholder="CPF"></input>
             </form>
             </div>

             <div className='pagamento'>
            <h3>Tipo de documento:</h3>
            <input className='inputRadio' type="radio"></input>
            <label className='text_titulo'>Pessoa fisica</label>

            <input className='inputRadio' type="radio"></input>
            <label className='text_titulo'>Pessoa juridica</label>
            </div>

           <div className='agencia'>
            <form>
             <label className='tituloAg'>Agencia*: </label>
             <input className='inputAgencia' id="agencia" name="agencia" placeholder="número da agencia"></input>

             <label className='tituloAg'>Digito*: </label>
             <input className='inputAgencia' id="digitoAg" name="digitoAg" placeholder="Digito da agencia"></input>

             <label className='tituloAg'>Conta*: </label>
             <input  className='inputAgencia' id="conta" name="conta" placeholder="Numero da conta"></input>

             <label className='tituloAg'>Digito*: </label>
             <input className='inputAgencia' id="digito" name="digito" placeholder="Digito da conta"></input>
             </form>
             </div>
            

        <button className='botaoContinuar'>Continuar cadastro</button>
        <button className='botaoRevisar'>revisar dados anteriores</button>

        </div>
    )
}

export default CadastroBancarioPrestador;