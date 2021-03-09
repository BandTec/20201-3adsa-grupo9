import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './dashboardContratante.css';
import MenuLogado from '../../components/MenuLogado';
import Footer from '../../components/Footer';
import api from '../../services/api';

import Logo from '../../assets/img/logo/logo-removebg.png';
import FiltroIcon from '../../assets/img/icons/filtro.png';
import BabaLimpeza from '../../assets/img/icons/baba-limpeza.png';
import BabaHomem from '../../assets/img/icons/paulo.jpg';
import babaImage from '../../assets/img/imagens/babaS.jfif';
import starIcon from '../../assets/img/icons/star.png';



function DashboardContrantante() {

    //Variavel (pestadores) referente aos tipos de usuarios exibidos nesta pagina
    const [prestadores, setPrestadores] = useState([{}]);

    useEffect(() => {
        async function atualizaDadosContratante() {
            var total = 0;
            const response = await api.get('/trabalhadores'); // TODO - Verificar se a URI esta correta
            // TODO - Verificar se os atributos a serem coletados estao corretos
            // setPrestadores(
            //     response.data.map(m => ({
            //         nome: m.nome,
            // id: m.id
            //         tipoUsuario: m.tipoUsuario,
            //         zonaRegional: m.endereco.zonaRegional,
            //         avaliacoes: [m.avaliacoes.notaBaba],
            //         msgAvaliativa: [m.avaliacoes.msgAvaliativa],
            //         baba: m.profissao,
            //         cozinha: m.baba.cozinhar,
            //         limpa: m.baba.limpar,
            //     }))
            // );
        }

        // Sempre quando o objeto e iniciado, ele executa a seguinte funcao
        atualizaDadosContratante();
    }, []);

    return (
        <div className='DashboardContratanteContainer'>

            <MenuLogado />

            <div className='DashboardContratanteContent'>

                {/* TODO - Apos verificar a funcao de atualizar os dados, descomentar e refinar o codigo a seguir */}
                {/* Regra responsável por gerar a pagina identificando que nao tem contratantes */}
                {/* {prestadores === undefined || prestadores.length == 0 && (
                    <div>
                        <p>Você ainda não pesquisou por prestadores.</p>
                    </div>
                )} */}

                {/* Rega responsavel por gerar a pagina com os contratantes */}
                {/* {prestadores.map(data => {
                    if (data.tipoUsuario === 1) {
                        return (
                            <Link to='/info-prestador-logado'>
                                <div className='barra'>
                                    <img className='BabaSImage' alt='baba com criança no colo' src={babaImage} />
                                    <p>{data.nome} - {data.zonaRegional}</p>
                                    <div className='containerClassificacao'>
                                        {((data.avaliacoes.reduce((a, b) => a + b, 0)) / (data.avaliacoes.length)) === 0 ?
                                            '<p>Ainda não foi avaliado(a)</p>' :
                                            '<img className="estrela" src={starIcon} alt="imagem de estrela" />'}
                                    </div>
                                    <ul>
                                        <li>{data.profissao} {data.cozinha === true ? "+ Cozinha": ""}{data.limpa === true ? "+ Limpeza": ""}</li>
                                        <li>Cuido de crianças de 8 a 10 anos, sou nova nesse ramo mas tenho algumas experiencias.</li>
                                    </ul>
                                </div>
                            </Link>
                        );
                    }
                })} */}

                <Link to='/info-prestador-logado01'>
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
                </Link>

                <Link to='/info-prestador-logado'>
                    <div className='barra'>
                        <img className='BabaSImage' alt='baba com criança no colo' src={BabaLimpeza} />
                        <p>ANA JÚLIA - 1,4KM</p>
                        <div style={{ marginLeft: '30%' }} className='containerClassificacao'>
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
                </Link>

                <Link to='/info-prestador-logado02'>
                    <div className='barra'>
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
                            <li>Babá + Limpeza + Cozinha</li>
                            <li>Trabalho como babá a mais de 5 anos, tenho muita experiencia e procuro sempre novos clientes.</li>
                        </ul>
                    </div>
                </Link>
            </div>


            <Footer />

        </div>
    )
}

export default DashboardContrantante;