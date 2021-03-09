import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './dashboard.css';
import MenuLogado from '../../components/MenuLogado';
import Footer from '../../components/Footer';
import api from '../../services/api';

import PaulaImage from '../../assets/img/imagens/Paula.png';
import ClariceImage from '../../assets/img/imagens/clarice.jpg';
import PedroImage from '../../assets/img/imagens/pedro.jpg';
import starIcon from '../../assets/img/icons/star.png';
import babaIcon from '../../assets/img/imagens/baba 1.png';
import babaImage from '../../assets/img/icons/babaS.png';
import faxineiroImage from '../../assets/img/imagens/faxineiro.png';

function DashboardPrestador() {

    //Variavel (contratante) referente aos tipos de usuarios exibidos nesta pagina
    const [contratantes, setContratantes] = useState([{}]);

    useEffect(() => {
        async function atualizaDadosPrestador() {
            var total = 0;
            const response = await api.get('/usuarios'); // TODO - Verificar se a URI esta correta
            // TODO - Verificar se os atributos a serem coletados estao corretos
            // setContratantes(
            //     response.data.map(m => ({
            //         nome: m.nome,
            //         tipoUsuario: m.tipoUsuario,
            //         zonaRegional: m.endereco.zonaRegional,
            //         avaliacoes: [m.avaliacoes.notaContratante],
            //         msgAvaliativa: [m.avaliacoes.msgAvaliativa],
            //     }))
            // );
        }

        // Sempre quando o objeto e iniciado, ele executa a seguinte funcao
        atualizaDadosPrestador();
    }, []);

    return (
        <div className="DashboardPrestadorContainer">

            <MenuLogado />

            {/* TODO - Apos verificar a funcao de atualizar os dados, descomentar e refinar o codigo a seguir */}
            {/* Regra responsável por gerar a pagina identificando que nao tem contratantes */}
            {/* {contratantes === undefined || contratantes.length == 0 && (
                <div>
                    <p>Você ainda não possui pedidos de trabalho.</p>
                </div>
            )} */}

            {/* Rega responsavel por gerar a pagina com os contratantes */}
            {/* {contratantes.map(data => {
                if (data.tipoUsuario === 2) {
                    return (
                        <div className='clientes'>
                            <img className='imgPaula' src={PaulaImage} />

                            <p>{data.nome} - {data.zonaRegional}</p>
                            <ul>
                                Ultimos seviços contratos:
                                <li>Babá</li>
                                <li>Babá - faxineira</li>
                                <li>Babá - cozinheira</li>
                            </ul>

                            <h2>Ultimas classificações de Paula:</h2>
                            <img className='iconeBaba' src={babaIcon} alt="icone de baba com criança" />
                            <div style={{ marginLeft: '80.5%', marginTop: '-4%' }} className='containerClassificacao'>
                                { ((data.avaliacoes.reduce((a, b) => a+b, 0))/(data.avaliacoes.length)) === 0 ? 
                                '<p>Ainda não foi avaliado(a)</p>' : 
                                '<img className="estrela" src={starIcon} alt="imagem de estrela" />'}
                            </div>
                            <h1>{data.msgAvaliativa[data.msgAvaliativa.length-1]}</h1>

                        </div>
                    );
                }
            })} */}

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

            {/* Botao colocado para realizar testes com chamadas para API */}
            {/* <button onClick={atualizaDadosPrestador}>Teste</button> */}

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
