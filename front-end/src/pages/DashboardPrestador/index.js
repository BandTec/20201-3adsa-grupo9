import React from 'react';
import './dashboard.css';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo/logo-removebg.png';
import NotificacaoIcon from '../../assets/img/icons/61073.png';
import PaulaImage from '../../assets/img/imagens/Paula.png';
import ClariceImage from '../../assets/img/imagens/clarice.jfif';
import PedroImage from '../../assets/img/imagens/Pedro.jfif';
import starIcon from '../../assets/img/icons/star.png';
import babaIcon from '../../assets/img/imagens/baba 1.png';
import babaImage from '../../assets/img/imagens/babaS.jfif';
import faxineiroImage from '../../assets/img/imagens/faxineiro.jpg';


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

           
        <div className="container">
  <input type="text" placeholder="Pesquise aqui..." />
  <div className="search"></div>
  </div>

     <div className='clientes'>
         <img className='imgPaula' src={PaulaImage} />

         <p>Paula 1,9km</p>
         <ul>
            Ultimos seviços contratos:
            <li>Babá</li> 
            <li>Babá - faxineira</li>
            <li>Babá - cozinheira</li>
            </ul>

            <h2>Ultimas classificações de Paula:</h2>
            <img className='iconeBaba' src={babaIcon} alt="icone de baba com criança" />
            <div className='containerClassificacao'>
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            </div>
            <h1>“Suellen trabalha muito bem, minha filha amou ela super recomendo!”</h1>
            
     </div>

     <div style={{marginTop:'2%'}} className='clientes'>
         <img className='imgClarice' src={ClariceImage} />

         <p>Clarice 2,1km</p>
         <ul>
            Ultimos seviços contratos:
            <li>Babá</li> 
            <li>Babá - faxineira</li>
            </ul>

            <h2>Ultimas classificações de Clarice:</h2>
            <img className='iconeBaba' src={babaImage} alt="icone de baba com criança" />
            <div className='containerClassificacao'>
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            </div>
            <h1>“Ana Paula super pontual e caprichosa, vou contratar mais vezes!”</h1>
            
     </div>

     <div className='clientes'>
         <img className='imgPedro' src={PedroImage} />

         <p>Pedro 2,7km</p>
         <ul>
            Ultimos seviços contratos:
            <li>Babá - faxineira</li>
            <li>Babá - cozinheira</li>
            </ul>

            <h2>Ultimas classificações de Pedro:</h2>
            <img className='iconeBaba' src={faxineiroImage} alt="icone de baba com criança" />
            <div className='containerClassificacao'>
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            </div>
            <h1>“Adorei o trabalho do André mas chegou muito atrasado”</h1>
            
     </div>

     <Footer />





    </div>
)
}

export default DashboardPrestador;
