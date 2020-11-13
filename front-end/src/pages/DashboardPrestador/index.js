import React from 'react';
import './dashboard.css';
import Menu from '../../components/MenuDashboard';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function DashboardPrestador(){
    const [value, setValue] = React.useState(2);

    return(
        <div className='DashboardPrestadorContainer'>

            <Menu />

            <div id="cardContainer">
  <div className="profile-img"></div>
  <h1>Suellen</h1>

  <div className="description">“Suellen trabalha muito bem, minha filha amou ela super recomendo!”
  </div>
   <footer>
    </footer>
</div>




        </div>
    )
}

export default DashboardPrestador;
