import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo/logo-removebg.png';
import IconNotificacao from '../../assets/img/icons/61073.png';
import IconUser from '../../assets/img/icons/user.png';

import './menuDashboard.css';

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Logo da empresa Jobby Jobs"/>
            </Link>

            <Link className="ButtonLink" to="">Serviços</Link>

            <Link className="ButtonLink" to="">Quem somos</Link>

            <Link className="ButtonLink" to=""> Como funciona?</Link>

            <Link className="ButtonLink" to="/perfil-prestador"> Perfil </Link>

            <Link className="ButtonChamados">
            <img className="icone" src={IconNotificacao} />
            </Link>
        </nav>
    );
}

export default Menu;