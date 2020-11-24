import React from 'react';
import { Link } from 'react-router-dom';

import './forma-pagamento.css'

import BoletoBancario from '../../assets/img/icons/barcode.png';
import Elo from '../../assets/img/icons/elo.png';
import Visa from '../../assets/img/icons/Visa.png';
import Mastercard from '../../assets/img/icons/Mastercard.png';

import BannerLogoLateral from '../../components/BannerLogoLateral';

function FormaPagamento(){ 
    return(
        <div className="FormaPagamentoContainer">
            <h1>Formas De Pagamento</h1><br/>
            <h3>Selecione a Forma de Pagamento</h3>

            <div className='OpcaoBoleto'>
                <input type="checkbox" id="boleto" />
                <label style={{margin:'1%'}} for="scales" ><img style={{marginBottom:'-2%'}} src={BoletoBancario}/>  Boleto bancário</label>
            </div>
            <h3 style={{marginTop: '8%'}}>Cartão de débito/crédito</h3>
            <div className="OpcaoCartao">
                <input type="checkbox" id="cartao" />
                <label for="scales"><img style={{marginBottom:'-4%'}} src={Visa}/></label>
                
                <label style={{margin:'5%'}} for="scales"><img style={{marginBottom:'-1%'}} src={Elo}/></label>

                <label for="scales"><img style={{marginBottom:'-4%'}} src={Mastercard}/></label>
            </div>
            <div style={{ margin: '10%' }}></div>
            <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--blue)", color: "var(--white)", marginLeft: '20%', padding:'15px', fontWeight:'400'}} type="submit">Próximo passo</Link>
            <BannerLogoLateral className={"LogoDireita"}/>
        </div>
    );
}
export default FormaPagamento;