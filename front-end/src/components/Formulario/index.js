import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme } from '@material-ui/core/styles';

import './formulario.css'



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
      width: '45ch',
      fontFamily:'Aldrich',
    },
  },
}));

export default function Formulario() {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField style={{marginLeft: "35%", marginTop: "5%"}} id="nome_completo" label="Nome Completo" />
      <TextField style={{marginLeft: "35%", marginTop: "1%"}} id="email" label="Email" />
      <TextField style={{marginLeft: "35%", marginTop: "1%"}} id="telefone" label="Telefone" />
      <TextField style={{marginLeft: "35%", marginTop: "1%"}} id="senha" label="Senha" />
    </form>
  );
}
