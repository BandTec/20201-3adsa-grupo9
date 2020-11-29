import React from 'react';
import './dashboardContratante.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo/logo-removebg.png';
import NotificacaoIcon from '../../assets/img/icons/61073.png';
import FiltroIcon from '../../assets/img/icons/filtro.png';
import BabaLimpeza from '../../assets/img/icons/baba-limpeza.png';
import BabaHomem from '../../assets/img/icons/paulo.jpg';
import babaImage from '../../assets/img/imagens/babaS.jfif';
import starIcon from '../../assets/img/icons/star.png';



function DashboardContrantante(){
    return(
        <div className='DashboardContratanteContainer'>

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

        <div className='barraBusca'>
           <Link> <img src={FiltroIcon} className='filtro'></img></Link>
        <div id='busca'>
        <form className="search">
        <input className='inputBusca'  type="text" placeholder="Digite o que você procura">
        </input>
        </form>
        </div>
        </div>


        <div className='perfilPrestadorContainer'>
            <div className='barra'>
                <img className='BabaSImage' alt='baba com criança no colo' src={babaImage} />
                <p>SUELLEN SILVA - 2,6KM </p>
                <div className='containerClassificacao'>
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            </div>
            <ul>
            <li>Babá</li>
            <li>Cuido de crianças de 8 a 10 anos, sou nova nesse ramo mas tenho algumas experiencias.</li>
            </ul>
            </div>

            <div className='barra1'>
                <img className='BabaSImage' alt='baba com criança no colo' src={BabaLimpeza} />
                <p>ANA JÚLIA - 1,4KM</p>
                <div style={{marginLeft:'30%'}} className='containerClassificacao'>
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            </div>
            <ul>
            <li>Babá + Limpeza</li>
            <li>Sou nova no aplicativo mas tenho muita experiencia e otimas recomendações.</li>
            </ul>
            </div>
            
            <div className='barra2'>
                <img className='PauloImage' alt='baba com criança no colo' src={BabaHomem} />
                <p>PAULO CÉSAR - 3,4KM</p>
                <div className='containerClassificacao'>
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            </div>
            <ul>
            <li>Babá + Limpeza + cozinha</li>
            <li>Trabalho como babá a mais de 5 anos, tenho muita experiencia e procuro sempre novos clientes.</li>
            </ul>
            </div>
        </div>

        </div>
    )
}

export default DashboardContrantante;