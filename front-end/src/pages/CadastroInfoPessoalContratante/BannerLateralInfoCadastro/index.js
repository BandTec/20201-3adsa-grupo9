import React from 'react';
import './banner-lateral-info-cadastro.css';
import ImageCrianca from '../../../assets/img/imagens/criança.png';

function BannerLateralInfoCadastro(){

    return(
        <div className="BannerDireitaInfo">
            <h4>Falta pouco para finalizar seu cadastro, agora preciso de algumas informações pessoais</h4>
            <img style={{width:'350px', borderRadius:'20%'}} src={ImageCrianca} />
        </div>
    );
}

export default BannerLateralInfoCadastro;
