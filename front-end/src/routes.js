import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Termos from './pages/Termos';
import Perfil_prestador from './pages/Perfil_prestador';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Cadastro" exact component={Cadastro}/>
                <Route path="/Termos" exact component={Termos}/>
                <Route path="/Perfil_prestador" exact component={Perfil_prestador}/>
                
                
            </Switch>
        </BrowserRouter>
    );
}