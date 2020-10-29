import React from 'react';

import { Link } from 'react-router-dom';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import PedidoIcon from '../../assets/img/imagens/pedido.png';
import ProfissionaisIcon from '../../assets/img/imagens/escolha.svg';
import EscolhaIcon from '../../assets/img/imagens/chupeta.png';
import BabaApresentacaoImg from '../../assets/img/imagens/baba-blobs.png';
import BabaChamadaImg from '../../assets/img/imagens/baba-chamada.png';
import ClienteImg01 from '../../assets/img/imagens/Ellipse 11.png';
import ClienteImg02 from '../../assets/img/imagens/Ellipse 16.png';
import ClienteImg03 from '../../assets/img/imagens/Ellipse 19.png';




import './home.css';

function Home(){
    return(
        <div className= 'HomeContainer'>
            <Menu />
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
                        <h2 style={{marginLeft: '1%', color: 'var(--white)'}}>Encontre a babá perfeita para a sua necessidade.</h2> <br/>
                        <div>
                            <div><img style={{width: '100%', height: '70%'}} src={PedidoIcon} alt="Ícone de preenchimento de requisitos" /></div>
                            <div> <img style={{width: '50%', height: '40%', marginTop: '10%', marginLeft: '30%'}} src={ProfissionaisIcon} alt="Ícone de perfis sendo apresentados" /></div>
                            <div><img style={{width: '60%', height: '50%', marginTop: '10%'}} src={EscolhaIcon} alt="Ícone do usuário escolhendo um perfil" /></div>
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
                        
                        <div style={{marginTop: '-27%'}} class="square">
                        <span></span>
                         <span></span>
                        <div className="content">
                        </div>
                         </div>
                    </div> 



                    <div style={{marginTop: '20%'}} className='Cliente'>
                        <div className='bloco01'>
                        <div className='blobs01'> 
                        <img style={{width: '85%', height: '85%', marginLeft: '7%', marginTop: '6%'}} src={ClienteImg01} alt='mulher sorrindo' />
                        </div>
                        <h1 style={{color: 'var(--white)', fontSize: '20px', margin: '15px'}}>ANA</h1>
                        <p style={{color: 'var(--white)', fontSize: '14px', textAlign: 'center'}}>"Plataforma muito boa, intuitiva e com ótimos profissionais."</p>
                        </div>

                        <div className='bloco02'>
                        <div className='blobs02'> 
                        <img style={{width: '85%', height: '85%', marginLeft: '7%', marginTop: '6%'}} src={ClienteImg02} alt='homem sorrindo' />
                        </div>
                        <h1 style={{color: 'var(--white)', fontSize: '20px', margin: '15px'}}>MARCOS</h1>
                        <p style={{color: 'var(--white)', fontSize: '14px', textAlign: 'center'}}>“Após a solicitação dos profissionais, entraram em contato rapidamente, super atenciosos.”</p>
                        </div>

                        <div className='bloco03'>
                        <div className='blobs03'> 
                        <img style={{width: '85%', height: '85%', marginLeft: '7%', marginTop: '6%'}} src={ClienteImg03} alt='mulher sorrindo'/>
                        </div>
                        <h1 style={{color: 'var(--white)', fontSize: '20px', margin: '15px'}}>LIVIA</h1>
                        <p style={{color: 'var(--white)', fontSize: '14px', textAlign: 'center'}}>“Excelente, serviço impecável, cuidadoso e atencioso. Eu recomendo!”</p>
                        </div>

                    </div>
                </div>

                <Footer />
        </div>
    );
}

export default Home;