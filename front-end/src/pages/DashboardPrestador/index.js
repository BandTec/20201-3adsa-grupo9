import React from 'react';
import { Link } from 'react-router-dom';

import './dashboard.css';
import MenuLogado from '../../components/MenuLogado';
import Footer from '../../components/Footer';

import PaulaImage from '../../assets/img/imagens/Paula.png';
import ClariceImage from '../../assets/img/imagens/clarice.jpg';
import PedroImage from '../../assets/img/imagens/pedro.jpg';
import starIcon from '../../assets/img/icons/star.png';
import babaIcon from '../../assets/img/imagens/baba 1.png';
import babaImage from '../../assets/img/icons/babaS.png';
import faxineiroImage from '../../assets/img/imagens/faxineiro.png';

function DashboardPrestador() {

    return (
        <div className="DashboardPrestadorContainer">

            <MenuLogado />

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
                <div style={{ marginLeft: '80.5%', marginTop: '-4%' }} className='containerClassificacao'>
                    <img className="estrela" src={starIcon} alt="imagem de estrela" />
                    <img className="estrela" src={starIcon} alt="imagem de estrela" />
                    <img className="estrela" src={starIcon} alt="imagem de estrela" />
                    <img className="estrela" src={starIcon} alt="imagem de estrela" />
                    <img className="estrela" src={starIcon} alt="imagem de estrela" />
                </div>
                <h1>“Suellen trabalha muito bem, minha filha amou ela super recomendo!”</h1>

            </div>

            <div style={{ marginTop: '2%' }} className='clientes'>
                <img className='imgClarice' src={ClariceImage} />

                <p>Clarice 2,1km</p>
                <ul>
                    Ultimos seviços contratos:
            <li>Babá</li>
                    <li>Babá - faxineira</li>
                </ul>

                <h2>Ultimas classificações de Clarice:</h2>
                <img className='iconeBaba' src={babaImage} alt="icone de baba com criança" />
                <div style={{ marginLeft: '81%', marginTop: '-4%' }} className='containerClassificacao'>
                    <img className="estrela" src={starIcon} alt="imagem de estrela" />
                    <img className="estrela" src={starIcon} alt="imagem de estrela" />
                    <img className="estrela" src={starIcon} alt="imagem de estrela" />
                    <img className="estrela" src={starIcon} alt="imagem de estrela" />
                </div>
                <h1>“Ana Paula super pontual e caprichosa, vou contratar mais vezes!”</h1>

            </div>

            <div style={{ marginTop: '2%' }} className='clientes'>
                <img className='imgPedro' src={PedroImage} />

                <p>Pedro 2,7km</p>
                <ul>
                    Ultimos seviços contratos:
            <li>Babá - faxineira</li>
                    <li>Babá - cozinheira</li>
                </ul>

                <h2>Ultimas classificações de Pedro:</h2>
                <img className='iconeBaba' src={faxineiroImage} alt="icone de baba com criança" />
                <div style={{ marginLeft: '81%', marginTop: '-4%' }} className='containerClassificacao'>
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
