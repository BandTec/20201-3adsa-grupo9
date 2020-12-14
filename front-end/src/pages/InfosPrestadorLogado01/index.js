import React from 'react';
import './InfosPrestadorLogado1.css';
import { Link, useHistory } from 'react-router-dom';
import LeftArrow from '../../assets/img/icons/left-arrow.png';
import BabaLimpeza from '../../assets/img/imagens/babaS.png';
import starIcon from '../../assets/img/icons/star.png';


function InfosPrestadorLogado(){

    return(
        <div className='InfosPrestadorLogadoContainer'>

<div className='lateral'>
            <Link to='/'><img className="Return" src={LeftArrow} alt="Ícone de seta para a esquerda para voltar para a tela innicial"/></Link>
            <div className='baba'>
              <img src={BabaLimpeza} className='imgBaba' />
              <p>Suellen</p>
              <ul>
                  <li>Babá + faxina</li>
                  <li>Informações de contato:</li>
                  <li>ana_julia@gmail.com</li>
                  <li>Celular: (11) 94259-0707</li>
                  <li>Residencial: (11) 4002-8822</li>
              </ul>
              </div>

              <div className='Avaliacao'>
            <p style={{margin:'10px', marginLeft:'30%'}}>Avaliação</p>
            <div className='estrelas'>
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            <img className="estrela" src={starIcon} alt="imagem de estrela" />
            </div>
              </div>
            </div>

            
            <div className='infoTrabalho'>
                <div style={{marginLeft:'30%'}} className='titulo'>INFORMAÇÕES DO PRESTADO DE SERVIÇO</div>
                <div className='subTitulo'>Meu nome é Suellen, tenho 25 anos e sou babá a 3 anos na semana trabalho com faxina, 
                limpeza pesada e também faço comida, estou procurando uma oportunidade de ampliar minha rede de clientela,
                entre em contato comigo!</div>
            </div>

            <div className='diasTrabalho'>
            <div className='tituloTrabalho'>Dias de trabalho:</div>
            <div style={{marginTop:'-40.5%'}} className='blocoDias'></div>
            <div className='diaSemana'>Segunda a quinta-feira </div>
            </div>

            <div className='tituloComentarios'>Comentários sobre trabalhos realizados na plataforma:</div>

   <div style={{marginTop:'-28%'}} id="login-container">
   <div class="profile-img1"></div>
   <h1>
    Carlos
   </h1>
   <div class="description">
   “Suellen é extremamente caprichosa e cozinha muito bem.”
  </div>
</div>

<Link to='/contrato-servico' className="ButtonLinkSquareCadastro" style={{ background: "var(--pink)", color: "var(--white)", marginLeft: '45%', padding:'15px', marginTop:'10%', fontSize: '12px'}}>INFORMAÇÕES DE CONTRATAÇÃO DO SERVIÇO</Link>


        </div>

    )
}

export default InfosPrestadorLogado;