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
                        <div>
                            <h1 style={{marginLeft:'-480px', marginTop:'30px'}}>Número cartão:</h1>
                            <label>
                                <input style={{width:'40%', marginLeft:'-480px',marginTop:'15px'}} type="text" name="nome"/>
                            </label>
                        </div>
                        <div className='Validade'>
                            <h1 style={{marginTop:'-97px'}}>Data de validade e CVV:</h1>
                            <label>
                                <input style={{width:'8%', margin:'2%',marginLeft:'3px', marginTop:'14px'}}type="text" name="validade" placeholder="   --"/> 
                            </label>
                            <label>
                                <input style={{width:'8%', marginLeft:'110x', marginTop:'-52px'}}type="text" name="validade" placeholder="   --"/> 
                            </label>
                            <label>
                                <input style={{width:'8%', marginLeft:'220px', marginTop:'-47px'}} type="text" name="validade" placeholder=" ---"/>
                            </label>
                        </div>
                        <h3 style={{marginRight:'615px', marginTop:'70px', fontSize:'32px'}}>Dados de Cobraça</h3><br/>
                        <div className="Dados">
                            <h1 style={{marginTop:'35px' ,marginLeft:'-482px'}}>Nome:</h1>
                            <label>
                                <input style={{width:'28%', marginLeft:'-477px', marginTop: '5px'}} type="text" name="nome" />
                            </label>
                            <h1 style={{marginTop:'-84px', marginLeft:'-180px'}}>Sobrenome:</h1>
                            <label>
                                <input style={{width:'30%', marginLeft:'-177px', marginTop:'2px'}} type="text" name="sobrenome" />
                            </label>
                            <h1 style={{marginTop:'-84px', marginLeft:'150px'}}>Cidade:</h1>
                            <label>
                                <input style={{width:'27%', marginLeft:'153px', marginTop:'0px'}} type="text" name="cidade" />
                            </label>
                            <h1 style={{marginTop:'65px', marginLeft:'-480px'}}>Endereço de cobrança:</h1>
                            <label>
                                <input style={{width:'49%', marginLeft:'-477px', marginTop:'5px'}} type="text" name="endereco"/>
                            </label>
                            <h1 style={{marginTop:'-85px', marginLeft:'80px'}}>CEP:</h1>
                            <label>
                                <input style={{width:'35%', marginLeft:'85px', marginTop:'1px'}} type="text" name="CEP"/>
                            </label>
                            <h1 style={{marginTop:'50px', marginLeft:'-477px'}}>Número de telefone:</h1>
                            <label>
                                <input style={{width:'44%' ,marginLeft:'-473px',marginTop:'5px'}} type="text" name="telefone"/>
                            </label>
                        </div>
                   <label>
                        <input style={{marginLeft:'-470px', marginTop:'75px'}} type="checkbox"/> Salvar os meus dados de pagamento<br/>
                   </label>
                    <h1 style={{fontWeight:'400', fontSize:'15px', marginTop:'10px', marginLeft:'-1200px'}}>Você terá a chance de revisar antes de ser finalizado.</h1>
                </div>
                <div style={{ margin: '3%' }}></div>
                <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--pink)", color: "var(--white)", marginLeft: '20%', padding:'15px', fontWeight:'400'}} type="submit">Finalizar Pagamento</Link>
                <div>
                    <BannerLogoLateral className={"LogoDireita"}/> 
                </div>
            </div>
    );
}
export default PagamentoCartao;
