import React from 'react';
import { Link } from 'react-router-dom';

import FacebookEmpresaIcon from '../../assets/img/icons/facebook-empresa.png';
import InstagramEmpresaIcon from '../../assets/img/icons/instagram-empresa.png';
import TwitterEmpresaIcon from '../../assets/img/icons/twitter-empresa.png';
import GoogleButtonIcon from '../../assets/img/icons/google-button.png';
import AppleButtonIcon from '../../assets/img/icons/apple-button.png';

import './footer.css';

function Footer() {
    return (
        <footer>
            <div className="MapaSite">
                {/* Navegacao para a aba de servicos */}
                <div className="Servicos">
                    <h4>Serviços</h4>
                    <h4>Babá</h4>
                    <h4>Babá + serviços de limpeza</h4>
                </div>
                {/* Fim da navegacao para a aba de servicos */}

                {/* Navegacao para a aba de institucional */}
                <div className="Institucional">
                    <h4>Institucional</h4>
                    <h4>Quem somos</h4>
                    <h4>Trabalhe conosco</h4>
                </div>
                {/* Fim da navegacao para a aba de institucional */}

                {/* Links para redes sociais */}
                <div className="Social">
                    <h4>Redes sociais</h4>
                    <ul className="SocialMedia">
                        <li><Link to=""><img className="SocialIcon" src={FacebookEmpresaIcon} alt="Ícone do facebook da empresa Jobby Jobs" /></Link></li>
                        <li><Link to=""><img className="SocialIcon" src={InstagramEmpresaIcon} alt="Ícone do instagram da empresa Jobby Jobs" /></Link></li>
                        <li><Link to=""><img className="SocialIcon" src={TwitterEmpresaIcon} alt="Ícone do twitter da empresa Jobby Jobs" /></Link></li>
                    </ul>
                </div>
                {/* Fim dos links para redes sociais */}

                {/* Links para download do aplicativo */}
                <div className="Download">
                    <h4>Downloads</h4>
                    <ul>
                        <li><Link className="ButtonLinkSquare" style={{background: "var(--black)", cursor: "not-allowed" }} to=""><img src={GoogleButtonIcon} alt="Ícone da Play Store" /></Link></li>
                        <li><Link className="ButtonLinkSquare" style={{background: "var(--black)", cursor: "not-allowed" }} to=""><img src={AppleButtonIcon} alt="Ícone da Apple Store" /></Link></li>
                    </ul>
                </div>
                {/* Fim dos links para download do aplicativo */}
            </div>
            <div className="Direitos">
                <small className="Direitos">©2020 - 2021, Jobby Jobs - Todos os direitos reservados</small>
            </div>
        </footer>
    );
}

export default Footer;