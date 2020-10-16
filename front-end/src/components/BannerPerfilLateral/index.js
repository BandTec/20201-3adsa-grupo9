import React from 'react';
import { Link } from 'react-router-dom';

import './banner-perfil.css';

import UserWithoutPic from '../../assets/img/imagens/user-without-pic.png';

function BannerPerfilLateral(){

    return(
        <div className="BannerPerfilLateralContainer">
            <img src={UserWithoutPic} alt="Imagem temporária para o perfil do usuário com um avatar"/>
            <small><Link>Fazer upload da foto</Link></small>
            <h4><span>Nome Usuario</span></h4>
            <h4><span>email@usuario.com</span></h4>
        </div>
    );
}

export default BannerPerfilLateral;
