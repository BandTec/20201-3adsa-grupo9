import React from 'react';

import './banner-lateral-cadastro.css';

import TrabalhadoresDesenho from '../../../assets/img/imagens/trabalhadores-desenho.png';

function BannerLateralCadastro(){

    return(
        <div className="BannerDireita">
            <h4>CADASTRE-SE E ENCONTRE O MELHOR SERVIÇO PRA VOCE</h4>
            <img src={TrabalhadoresDesenho} alt="Desenho de trabalhadores"/>
        </div>
    );
}

export default BannerLateralCadastro;
