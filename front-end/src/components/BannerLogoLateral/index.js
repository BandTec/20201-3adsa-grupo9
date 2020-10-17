import React from 'react';

import './banner-logo.css';

import Logo from '../../assets/img/logo/logo-removebg.png';

function BannerLogoLateral(props){

    return(
        <div className={props.className}>
            <img src={Logo} alt="Logotipo da Jobby Jobs."/>
        </div>
    );
}

export default BannerLogoLateral;
