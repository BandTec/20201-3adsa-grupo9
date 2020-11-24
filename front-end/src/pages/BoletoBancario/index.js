import React from 'react';
import { Link } from 'react-router-dom';

import './boleto-bancario.css'


import Boleto from '../../assets/img/icons/barcode.png';

import BannerLogoLateral from '../../components/BannerLogoLateral';

function BoletoBancario(){
    return(
        <div className="BoletoBancarioContainer">
            <h4>Boleto Bancario</h4>
            <h2>Confirme as informações de pagamento</h2>
            <div className="OpcaoCartao">
                <label style={{}} for="scales" ><img style={{marginBottom:'-2%'}} src={Boleto}/>  Pagamento á Vista: R$0.000,00</label>
            </div>
            <div style={{margin:'18%'}}></div>
            <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--blue)", color: "var(--white)", marginLeft: '20%', padding:'15px', fontWeight:'400'}} type="submit">Gerar Boleto</Link>
            <BannerLogoLateral className={"LogoDireita"}/>
        </div>
    );
}
    
export default BoletoBancario;