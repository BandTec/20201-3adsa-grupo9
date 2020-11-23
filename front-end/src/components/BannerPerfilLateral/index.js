import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './banner-perfil.css';
import LeftArrow from '../../assets/img/icons/left-arrow.png';
import UserWithoutPic from '../../assets/img/imagens/user-without-pic.png';

function BannerPerfilLateral(){
    const history = useHistory();

    function voltar(){
        history.goBack();
    }

    return(
        <div className="BannerPerfilLateralContainer">
            <Link onClick={voltar} ><img className="Return" src={LeftArrow} alt="Ícone de seta para a esquerda para voltar para a tela innicial"/></Link>
            <img src={UserWithoutPic} alt="Imagem temporária para o perfil do usuário com um avatar"/>
            <small><Link>Fazer upload da foto</Link></small>
            <h4><span>Nome Usuario</span></h4>
            <h4><span>email@usuario.com</span></h4>
        </div>
    );
}

export default BannerPerfilLateral;
