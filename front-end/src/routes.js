import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import ConfirmarPerfil from './pages/ConfirmarPerfil';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Termos from './pages/Termos';
import PerfilPrestador from './pages/PerfilPrestador';
import ContratoServico from './pages/ContratoServico';
import CadastroPerfilPrestador from './pages/CadastroPerfilPrestador';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/confirmar-perfil" component={ConfirmarPerfil}/>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/termos" component={Termos}/>
                <Route path="/perfil-prestador" component={PerfilPrestador}/>
                <Route path="/contrato-servico" component={ContratoServico} />
                <Route path="/cadastro-perfil" component={CadastroPerfilPrestador} />
                
            </Switch>
        </BrowserRouter>
    );
}