import React from 'react';

import { Link } from 'react-router-dom';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

import PedidoIcon from '../../assets/img/icons/pedido.png';
import ProfissionaisIcon from '../../assets/img/icons/profissionais.png';
import EscolhaIcon from '../../assets/img/icons/escolha.png';

import LinkedinIcon from '../../assets/img/icons/linkedin.png';
import GithubIcon from '../../assets/img/icons/github.png';
import InstagramIcon from '../../assets/img/icons/instagram.png';
import FacebookIcon from '../../assets/img/icons/facebook.png';

import ApresentacaoImg from '../../assets/img/imagens/apresentacao-plataforma.png';
import TrabalhadoresImg from '../../assets/img/imagens/trabalhadores.png';
import BabaImg from '../../assets/img/imagens/baba.png';
import PintorImg from '../../assets/img/imagens/pintor.png';
import PedreirosImg from '../../assets/img/imagens/pedreiros.png';

import BrunaPic from '../../assets/img/time/bruna.png';
import GiulianoPic from '../../assets/img/time/giuliano.png';
import LucasPic from '../../assets/img/time/lucas.png';
import MatheusPic from '../../assets/img/time/matheus.png';
import PedroPic from '../../assets/img/time/pedro.png';
import RicardoPic from '../../assets/img/time/ricardo.png';

import './home.css';

function Home(){
    return(
        <div>
            <Menu />
            <body>

                <div>
                    {/* Area de apresentacao da empresa/plataforma */}
                    <div className="Apresentacao">
                        <div>
                            <h2>O que é a Jobby Jobs?</h2>
                            <p>Jobby Jobs é uma plataforma de oportunidades profissionais que oferece ferramentas entre profissionais e solicitantes que facilitam tanto a pesquisa quanto a comunicação. Conectamos profissionais com pessoas solicitando serviço, atendendo com qualidade, facilidade e rapidez todos os tipos de necessidade.</p>
                        </div>
                        <img src={ApresentacaoImg} alt="Imagem ilustrando trabalhadores em uma obra" />
                    </div>
                    {/* Fim da area de apresentacao da empresa/plataforma */}

                    {/* Area de instrucao de utilizacao do site */}
                    <div className="Dicas">
                        <h2>Encontre a mão de obra perfeita para a sua necessidade.</h2> <br/>
                        <div>
                            <img src={PedidoIcon} alt="Ícone de preenchimento de requisitos" />
                            <img src={ProfissionaisIcon} alt="Ícone de perfis sendo apresentados" />
                            <img src={EscolhaIcon} alt="Ícone do usuário escolhendo um perfil" />
                        </div>
                    </div>
                    {/* Fim da area de instrucao de utilizacao do site */}

                    {/* Area de chamado de cadastro de trabalhadores */}
                    <div className="Chamada">
                        <div>
                            <p>A Jobby Jobs recebe milhares de pedidos todos os meses de clientes procurando profissionais como você.</p> <br/>
                            <p>Cadastre seus serviços e receba solicitações tanto na internet quanto no seu celular.</p>
                            <Link to="/confirmar-perfil" className="ButtonLinkSquare" style={{ marginTop: "5%" }}>Cadastrar minhas funções</Link>
                        </div>
                        <img src={TrabalhadoresImg} alt="Foto mostrando pessoas em diversos cargos de trabalho" />
                    </div>
                    {/* Fim da area de chamado de cadastro de trabalhadores */}

                    {/* Area de apresentacao da equipe */}
                    <div className="Equipe">
                        <h2>Time Jobby Jobs</h2>
                        <div className="Integrantes">
                            <div className="CardIntegrante">
                                <div className="Integrante">
                                    <img className="FotoIntegrante" src={BrunaPic} alt="Foto da integrante Bruna"/>
                                    <h4>Bruna Garcia</h4>
                                    <h4>Front-end Developer</h4>
                                </div>
                                <div className="SocialMedia">
                                    <img className="SocialIcon" src={LinkedinIcon} alt="Ícone de acesso a rede social LinkedIn da integrante Bruna" />
                                    <img className="SocialIcon" src={GithubIcon} alt="Ícone de acesso a rede social LinkedIn da integrante Bruna" />
                                    <img className="SocialIcon" src={InstagramIcon} alt="Ícone de acesso a rede social LinkedIn da integrante Bruna" />
                                    <img className="SocialIcon" src={FacebookIcon} alt="Ícone de acesso a rede social LinkedIn da integrante Bruna" />
                                </div>
                            </div>
                            <div className="CardIntegrante">
                                <div className="Integrante">
                                    <img className="FotoIntegrante" src={GiulianoPic} alt="Foto do integrante Giuliano"/>
                                    <h4>Giuliano Menegasse</h4>
                                    <h4>Arquiteto de solução</h4>
                                </div>
                                <div className="SocialMedia">
                                    <img className="SocialIcon" src={LinkedinIcon} alt="Ícone de acesso a rede social LinkedIn do integrante Giuliano" />
                                    <img className="SocialIcon" src={GithubIcon} alt="Ícone de acesso a rede social LinkedIn do integrante Giuliano" />
                                    <img className="SocialIcon" src={InstagramIcon} alt="Ícone de acesso a rede social LinkedIn do integrante Giuliano" />
                                    <img className="SocialIcon" src={FacebookIcon} alt="Ícone de acesso a rede social LinkedIn do integrante Giuliano" />
                                </div>
                            </div>
                            <div className="CardIntegrante">
                                <div className="Integrante">
                                    <img className="FotoIntegrante" src={LucasPic} alt="Foto do integrante Lucas"/>
                                    <h4>Lucas Torres</h4>
                                    <h4>Full Stack Developer</h4>
                                </div>
                                <div className="SocialMedia">
                                    <img className="SocialIcon" src={LinkedinIcon} alt="Ícone de acesso a rede social LinkedIn do integrante Lucas" />
                                    <img className="SocialIcon" src={GithubIcon} alt="Ícone de acesso a rede social LinkedIn do integrante Lucas" />
                                    <img className="SocialIcon" src={InstagramIcon} alt="Ícone de acesso a rede social LinkedIn do integrante Lucas" />
                                    <img className="SocialIcon" src={FacebookIcon} alt="Ícone de acesso a rede social LinkedIn do integrante Lucas" />
                                </div>
                            </div>
                            <div className="CardIntegrante">
                                <div className="Integrante">
                                    <img className="FotoIntegrante" src={MatheusPic} alt="Foto do integrante Matheus"/>
                                    <h4>MatheusFernandes</h4>
                                    <h4>Back-end Developer</h4>
                                </div>
                                <div className="SocialMedia">
                                    <img className="SocialIcon" src={LinkedinIcon} alt="Ícone de acesso a rede social LinkedIn do integrante Matheus" />
                                    <img className="SocialIcon" src={GithubIcon} alt="Ícone de acesso a rede social LinkedIn do integrante Matheus" />
                                    <img className="SocialIcon" src={InstagramIcon} alt="Ícone de acesso a rede social LinkedIn do integrante Matheus" />
                                    <img className="SocialIcon" src={FacebookIcon} alt="Ícone de acesso a rede social LinkedIn do integrante Matheus" />
                                </div>
                            </div>
                            <div className="CardIntegrante">
                                <div className="Integrante">
                                    <img className="FotoIntegrante" src={PedroPic} alt="Foto do integrante Pedro"/>
                                    <h4>Pedro Lucas</h4>
                                    <h4>Full Stack Developer</h4>
                                </div>
                                <div className="SocialMedia">
                                    <img className="SocialIcon" src={LinkedinIcon} alt="Ícone de acesso a rede social LinkedIn do integrante Pedro" />
                                    <img className="SocialIcon" src={GithubIcon} alt="Ícone de acesso a rede social LinkedIn do integrante Pedro" />
                                    <img className="SocialIcon" src={InstagramIcon} alt="Ícone de acesso a rede social LinkedIn do integrante Pedro" />
                                    <img className="SocialIcon" src={FacebookIcon} alt="Ícone de acesso a rede social LinkedIn do integrante Pedro" />
                                </div>
                            </div>
                            <div className="CardIntegrante">
                                <div className="Integrante">
                                    <img className="FotoIntegrante" src={RicardoPic} alt="Foto do integrante Ricardo"/>
                                    <h4>Ricardo Celso</h4>
                                    <h4>UX</h4>
                                </div>
                                <div className="SocialMedia">
                                    <img className="SocialIcon" src={LinkedinIcon} alt="Ícone de acesso a rede social LinkedIn do integrante Ricardo" />
                                    <img className="SocialIcon" src={GithubIcon} alt="Ícone de acesso a rede social LinkedIn do integrante Ricardo" />
                                    <img className="SocialIcon" src={InstagramIcon} alt="Ícone de acesso a rede social LinkedIn do integrante Ricardo" />
                                    <img className="SocialIcon" src={FacebookIcon} alt="Ícone de acesso a rede social LinkedIn do integrante Ricardo" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Fim da area de apresentacao da equipe */}

                    {/* Area de apresentacao de tipos de servicos */}
                    <div className="TiposServicos">
                        <h2>Tipos de serviços</h2>
                        <div className="Carrossel">
                            <div className="Card">
                                <img src={PintorImg} alt="Foto de exemplo de um pintor" />
                                <h3>Pintores(as)</h3>
                                <p>Preparar e pintar as superfícies externas e internas de edifícios e outras obras civis, raspando-as, limpando-as, emassando-as e cobrindo-as com uma ou várias camadas de tinta.</p>
                                <Link to="/" className="ButtonLinkSquare" style={{ marginTop: "var(--marginTopButton)", background: "var(--salmon)"}}>Veja mais</Link>
                            </div>
                            <div className="Card">
                                <img src={BabaImg} alt="Foto de exemplo de uma babá" />
                                <h3>Babás</h3>
                                <p>A Babá é a profissional responsável por cuidar de crianças e tudo que se refere ao universo infantil zelando sempre pelo bem estar da criança, cuidando de sua higiene, orientando-a nas distrações, preparando-lhe a alimentação e auxiliando-a nas refeições, para garantir o bem estar e o desenvolvimento sadio da mesma.</p>
                                <Link to="/" className="ButtonLinkSquare" style={{ marginTop: "var(--marginTopButton)", background: "var(--salmon)" }}>Veja mais</Link>
                            </div>
                            <div className="Card">
                                <img src={PedreirosImg} alt="Foto de exemplo de pedreiros" />
                                <h3>Pedreiros(as)</h3>
                                <p>Executar trabalhos em alvenaria, concreto e outros materiais, guiando-se por desenhos, esquemas e especificações, utilizando processos e instrumentos pertinentes ao ofício para construir, reformar ou reparar.</p>
                                <Link to="/" className="ButtonLinkSquare" style={{ marginTop: "var(--marginTopButton)", background: "var(--salmon)" }}>Veja mais</Link>
                            </div>
                        </div>
                    </div>
                    {/* Fim da area de apresentacao de tipos de servicos */}

                </div>

            </body>
            <Footer />
        </div>
    );
}

export default Home;