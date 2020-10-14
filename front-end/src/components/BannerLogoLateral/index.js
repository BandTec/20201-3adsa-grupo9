import React from 'react';

import './banner.css';

import Logo from '../../assets/img/logo/logo-removebg.png';

function BannerLogoLateral(){

    return(
        <div className="LogoDireita">
            <img src={Logo} alt="Logotipo da Jobby Jobs."/>
        </div>
    );
}

export default BannerLogoLateral;
