import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import ConfirmarPerfil from './pages/ConfirmarPerfil';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Termos from './pages/Termos';
import PerfilPrestador from './pages/PerfilPrestador';
import PerfilContratante from './pages/PerfilContratante';
import InfoContratacao from './pages/InfoContratacao';
import ContratoServico from './pages/ContratoServico';
import CadastroPerfilPrestador from './pages/CadastroPerfilPrestador';
import CadastroEnderecoPrestador from './pages/CadastroEnderecoPrestador';
import CadastroBancarioPrestador from './pages/CadastroBancarioPrestador';

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
                <Route path="/perfil-contratante" component={PerfilContratante}/>
                <Route path="/info-contratacao" component={InfoContratacao} />
                <Route path="/contrato-servico" component={ContratoServico} />
                <Route path="/cadastro-perfil" component={CadastroPerfilPrestador} />
                <Route path="/cadastro-endereco" component={CadastroEnderecoPrestador} />
                <Route path="/cadastro-bancario" component={CadastroBancarioPrestador} />


               
            </Switch>
        </BrowserRouter>
    );
}