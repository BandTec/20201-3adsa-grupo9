import React from 'react';
import './dashboard.css';
import ReactDOM from 'react-dom'
import IconStar from '../../assets/img/icons/star.png';
import ImagePaula from '../../assets/img/imagens/Paula.png';



import Menu from '../../components/MenuDashboard';



function DashboardPrestador(){
    return(
        <div className='DashboardPrestadorContainer'>

            <Menu />

            <div className='cliente'>
                <img className='imgPaula' src={ImagePaula} />
                </div>

                <div className='descricaoPaula'>
                    <h4>Paula 1,9km</h4>
                        <li>
                            <ul>Ultimos seviços contratos:</ul>
                            <ul>Babá</ul>
                            <ul> Babá doméstica </ul>
                        </li>
                    </div>

                    <div style={{padding: '90px'}} />



      
    <div className='ultimosComentarios'>
    <h2>Ultimos comentários de Paula sobre outros trabalhos:</h2>
    <div style={{float:'left', margin:'30px'}} id="cardContainer">
  <div className="profile-img"></div>
  <h1>Suellen</h1>
  <div className='estrelaContainer'>
  <img className='estrela' src={IconStar} />
  <img className='estrela' src={IconStar} />
  <img className='estrela' src={IconStar} />
  <img className='estrela' src={IconStar} />
  <img className='estrela' src={IconStar} />
  </div>

  <div className="description">“Suellen trabalha muito bem, minha filha amou ela super recomendo!”
  </div>
   <footer>
    </footer>
</div>

   <div style={{float:'left', margin:'30px'}} id="cardContainer">
  <div  className="profile-img-ana"></div>
  <h1>Ana Paula</h1>
  <div className='estrelaContainer'>
  <img className='estrela' src={IconStar} />
  <img className='estrela' src={IconStar} />
  <img className='estrela' src={IconStar} />
  <img className='estrela' src={IconStar} />
  <img className='estrela' src={IconStar} />
  </div>

  <div className="description">“Ana Paula super pontual e caprichosa, vou contratar mais vezes!”
  </div>
   <footer>
    </footer>
</div>

<div style={{float:'right', margin:'30px'}} id="cardContainer">
  <div className="profile-img-andre"></div>
  <h1>André</h1>
  <div className='estrelaContainer'>
  <img className='estrela' src={IconStar} />
  <img className='estrela' src={IconStar} />
  <img className='estrela' src={IconStar} />
  <img className='estrela' src={IconStar} />
  <img className='estrela' src={IconStar} />
  </div>

  <div className="description">“Adorei o trabalho do André mas chegou muito atrasado”
  </div>
   <footer>
    </footer>
</div>
</div>

</div>


    )
}

export default DashboardPrestador;
