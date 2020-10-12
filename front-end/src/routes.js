import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import ConfirmarPerfil from './pages/ConfirmarPerfil';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Termos from './pages/Termos';
import Perfil_prestador from './pages/Perfil_prestador';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Login" component={Login}/>
                <Route path="/Confirmar-perfil" component={ConfirmarPerfil}/>
                <Route path="/Cadastro" component={Cadastro}/>
                <Route path="/Termos" component={Termos}/>
                <Route path="/Perfil_prestador" component={Perfil_prestador}/>
            </Switch>
        </BrowserRouter>
    );
}