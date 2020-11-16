import React from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo/logo-removebg.png';
import NotificacaoIcon from '../../assets/img/icons/61073.png';


function DashboardPrestador(){
return(
    <div className="DashboardPrestadorContainer">

<nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Logo da empresa Jobby Jobs"/>
            </Link>

            <Link className="ButtonLink" to="">Serviços</Link>

            <Link className="ButtonLink" to="">Quem somos</Link>

            <Link className="ButtonLink" to=""> Como funciona?</Link>

            <Link className="ButtonLink" to="/perfil-prestador">Perfil</Link>

            <Link to=""> <img style={{ height: "40px", paddingTop: "3px" }} src={NotificacaoIcon} alt="Ícone de pesquisa" /></Link>
        </nav>

          

          <div className="containerContratante">
              <div className = "perfilCliente">
               <img />
              </div>
          </div>


    </div>
)
}

export default DashboardPrestador;
