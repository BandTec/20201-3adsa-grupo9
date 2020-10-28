import React from 'react';

import { Link } from 'react-router-dom';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import PedidoIcon from '../../assets/img/imagens/pedido.png';
import ProfissionaisIcon from '../../assets/img/imagens/escolha.svg';
import EscolhaIcon from '../../assets/img/imagens/chupeta.png';
import BabaApresentacaoImg from '../../assets/img/imagens/baba-blobs.png';
import BabaChamadaImg from '../../assets/img/imagens/baba-chamada.png';




import './home.css';

function Home(){
    return(
        <div>
            <Menu />
            <body>

                <div className="HomeContent">
                    {/* Area de apresentacao da empresa/plataforma */}
                    <div className="Apresentacao">
                        <div>
                            <h2>O que é a Jobby Jobs?</h2>
                            <p>Jobby Jobs é uma plataforma de oportunidades profissionais que oferece ferramentas entre profissionais e solicitantes que facilitam tanto a pesquisa quanto a comunicação. Conectamos profissionais com pessoas solicitando serviço, atendendo com qualidade, facilidade e rapidez todos os tipos de necessidade.</p>
                        </div>
                        <img src={BabaApresentacaoImg} alt="Imagem ilustrando uma babá cuidando de uma criança" />
                    </div>
                    {/* Fim da area de apresentacao da empresa/plataforma */}

                    {/* Area de instrucao de utilizacao do site */}
                    <div className="Dicas">
                        <h2 style={{marginLeft: '1%', color: 'var(--white)'}} >Encontre a babá perfeita para a sua necessidade.</h2> <br/>
                        <div>
                            <img style={{width: '20%', height: '20%'}} src={PedidoIcon} alt="Ícone de preenchimento de requisitos" />
                            <img style={{width: '15%', height: '15%'}} src={ProfissionaisIcon} alt="Ícone de perfis sendo apresentados" />
                            <img style={{width: '15%', height: '15%'}} src={EscolhaIcon} alt="Ícone do usuário escolhendo um perfil" />
                        </div>
                    </div>
                    {/* Fim da area de instrucao de utilizacao do site */}

                    {/* Area de chamado de cadastro de trabalhadores */}
                    <div className="Chamada">
                        <div>
                            <p style={{color: 'var(--white)'}}> A Jobby Jobs recebe milhares de pedidos todos os meses de clientes procurando profissionais como você.</p> 
                            <p style={{color: 'var(--white)'}}> Cadastre seus serviços e receba solicitações tanto na internet quanto no seu celular.</p>
                            <Link to="/confirmar-perfil" className="ButtonLinkSquare" style={{ marginTop: "5%" }}>Cadastrar minhas funções</Link>
                        </div>

                        <img style={{borderRadius: '324.5px', width: '25%', marginLeft: '15%'}} src={BabaChamadaImg} alt="Foto de baba com crianças"/>
                        
                        <div style={{marginTop: '-28%'}} class="square">
                        <span></span>
                         <span></span>
                        <div class="content">
                        </div>
                         </div>
                    </div>                        
                </div>

            </body>
            <Footer />
        </div>
    );
}

export default Home;