import React from 'react';
import './avaliacao.css'
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import AvaliacaoIcon from '../../assets/img/icons/avaliacao.svg';



function Avaliacao(){
    const labels = {
        0.5: 'Muito ruim',
        1: 'Muito ruim',
        1.5: 'Ruim',
        2: 'Ruim',
        2.5: 'Mediano',
        3: 'Mediano',
        3.5: 'Bom',
        4: 'Bom',
        4.5: 'Excelente',
        5: 'Excelente',
      };

      const useStyles = makeStyles({
        root: {
          width: 200,
          display: 'flex',
          alignItems: 'center',
        },
      });

      const [value, setValue] = React.useState(2);
      const [hover, setHover] = React.useState(-1);
      const classes = useStyles();

    return(
        <div className="avalicaoContainer">

            <div class="modal">
  <p className="message">Hey, antes de ir que tal dar uma avalição sobre o serviço?</p>
  <img style={{width:'80px', margin:'10px'}} src={AvaliacaoIcon} />

  <p className="message">Como você classifica o serviço?</p>
  <div className="estrelasAvaliacao">
      <div className={classes.root}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    </div>
</div>



  <p style={{margin:'2%'}} className="message">Gostariamos de saber como foi sua experiência: </p>
  <input className="comentarioAvaliacao"></input>
  <div className="options">

      
    <button className="btn">Enviar</button>
  </div>
</div>
        </div>
    )
}

export default Avaliacao;