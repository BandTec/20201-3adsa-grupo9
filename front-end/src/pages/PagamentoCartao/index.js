import React from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

import './pagamento-cartao.css';

import BannerLogoLateral from '../../components/BannerLogoLateral';

function PagamentoCartao(){
    const tiposCartoes = [
        { value: 'Elo Débito', label: 'Elo Débito'},
        { value: 'Elo Credito', label: 'Elo Credito'},
        { value: 'Visa Débito', label: 'Visa Débito'},
        { value: 'Visa Credito', label: 'Visa Credito'},
        { value: 'Mastercard Débito', label: 'Mastercard Débito'},
        { value: 'Mastercard Credito', label: 'Mastercard Credito'}]
    return(
            <div className='PagamentoCartaoConteiner'>
                <div className='PagamentoCartaoContent'>
                    <h3>Cartão de crédito/débito</h3>
                    <h4>Escolha o cartão de crédito/débito</h4> 

                    <Select  isMulti className="Cartoes" options={tiposCartoes} placeholder="Selcione o tipo de cartão"/>

                   <form className='FormPagamentoCartao' onSubmit={function handleSubmit(){}}>
                        <div>
                            <h1 style={{marginLeft:'-730px'}}>Número cartão:</h1>
                            <label>
                                <input style={{marginLeft:'300px'}} type="text" name="nome"/>
                            </label>
                        </div>
                        <div className='Validade'>
                            <h1 style={{marginLeft:'-700px'}}>Data de validade e CVV:</h1>
                            <label>
                                <input style={{marginLeft:'-80px'}} type="text" name="validade" placeholder=" ---"/>
                                <input style={{marginLeft:'-175px', marginTop:'-50px'}}type="text" name="validade" placeholder="  --"/> 
                                <input style={{marginLeft:'-275px', marginTop:'-50px'}}type="text" name="validade" placeholder="  --"/> 
                            </label>
                        </div>
                        <h3 style={{marginLeft:'-605px', marginTop:'30px', fontSize:'32px'}}>Dados de Cobraça</h3><br/>
                        <div className="Dados">
                            <h1 style={{marginRight:'490px'}}>Nome:</h1>
                            <label>
                                <input style={{width:'12%', marginLeft:'305px'}} type="text" name="nome" />
                            </label>
                            <h1 style={{marginTop:'-84px', marginRight:'-70px'}}>Sobrenome:</h1>
                            <label>
                                <input style={{width:'12%', marginLeft:'560px'}} type="text" name="sobrenome" />
                            </label>
                            <h1 style={{marginTop:'-84px', marginLeft:'340px'}}>Cidade:</h1>
                            <label>
                                <input style={{width:'15%', marginLeft:'838px'}} type="text" name="cidade" />
                            </label>
                            <h1 style={{marginTop:'40px', marginLeft:'-560px'}}>Endereço de cobrança:</h1>
                            <label>
                                <input style={{marginLeft:'305px'}} type="text" name="endereco"/>
                            </label>
                            <h1 style={{marginTop:'-85px', marginLeft:'320px'}}>CEP:</h1>
                            <label>
                                <input style={{width:'17%', marginLeft:'840px'}} type="text" name="CEP"/>
                            </label>
                            <h1 style={{marginTop:'40px', marginRight:'355px'}}>Número de telefone:</h1>
                            <label>
                                <input style={{marginLeft:'304px'}} type="text" name="telefone"/>
                            </label>
                        </div>
                   </form>
                   <label>
                        <input style={{marginLeft:'-440px', marginTop:'35px'}} type="checkbox"/> Salvar os meus dados de pagamento<br/>
                   </label>
                    <h1 style={{fontWeight:'400', fontSize:'15px', marginTop:'10px', marginLeft:'-1200px'}}>Você terá a chance de revisar antes de ser finalizado.</h1>
                </div>
                <div style={{ margin: '5%' }}></div>
                <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--pink)", color: "var(--white)", marginLeft: '20%', padding:'15px', fontWeight:'400'}} type="submit">Finalizar Pagamento</Link>
                <div>
                    <BannerLogoLateral className={"LogoDireita"}/> 
                </div>
            </div>
    );
}
export default PagamentoCartao;