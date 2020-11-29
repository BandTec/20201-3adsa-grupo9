import React from 'react';
import './InfosPrestadorLogado.css';
import { Link, useHistory } from 'react-router-dom';
import LeftArrow from '../../assets/img/icons/left-arrow.png';
import BabaLimpeza from '../../assets/img/icons/baba-limpeza.png';
import starIcon from '../../assets/img/icons/star.png';


function InfosPrestadorLogado(){

    return(
        <div className='InfosPrestadorLogadoContainer'>

            <div className='lateral'>
            <Link to='/'><img className="Return" src={LeftArrow} alt="Ícone de seta para a esquerda para voltar para a tela innicial"/></Link>
            <div className='baba'>
              <img src={BabaLimpeza} className='imgBaba' />
              <p>ANA JÚLIA</p>
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
                <div className='titulo'>INFORMAÇÕES DO PRESTADO DE SERVIÇO</div>
                <div className='subTitulo'>Meu nome é Ana Júlia, tenho 34 anos e sou diarista trabalho 3 vezes na semana com faxina, 
                limpeza pesada e também faço comida, estou procurando uma oportunidade de ampliar minha rede de clientela,
                entre em contato comigo!</div>
            </div>

            <div className='diasTrabalho'>
            <div className='tituloTrabalho'>Dias de trabalho:</div>
            <div className='blocoDias'></div>
            <div className='diaSemana'>Segunda a quinta-feira </div>
            </div>

            <div className='tituloComentarios'>Comentários sobre trabalhos realizados na plataforma:</div>

   <div id="login-container">
   <div class="profile-img"></div>
   <h1>
    Amanda
   </h1>
   <div class="description">
   “Ana júlia é extremamente caprichosa e cozinha muito bem.”
  </div>
</div>

<Link to='/contrato-servico' className="ButtonLinkSquareCadastro" style={{ background: "var(--pink)", color: "var(--white)", marginLeft: '45%', padding:'15px', marginTop:'10%', fontSize: '12px'}}>INFORMAÇÕES DE CONTRATAÇÃO DO SERVIÇO</Link>


        </div>
    )
}

export default InfosPrestadorLogado;