import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import ConfirmarPerfil from './pages/ConfirmarPerfil';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import CadastroPerfilContratante from './pages/CadastroPerfilContratante';
import CadastroInfoPessoalContratante from './pages/CadastroInfoPessoalContratante';
import Termos from './pages/Termos';
import InfoPerfilPrestador from './pages/InfoPerfilPrestador';
import InfoPerfilContratante from './pages/InfoPerfilContratante';
import InfoContratacao from './pages/InfoContratacao';
import ContratoServico from './pages/ContratoServico';
import CadastroPerfilPrestador from './pages/CadastroPerfilPrestador';
import CadastroEnderecoPrestador from './pages/CadastroEnderecoPrestador';
import DashboardPrestador from './pages/DashboardPrestador';
import DashboardContratante from './pages/DashboardContratante';
import PagamentoCartao from './pages/PagamentoCartao';
import Avaliacao from './pages/Avaliacao';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/confirmar-perfil" component={ConfirmarPerfil} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/cadastro-perfil-contratante" component={CadastroPerfilContratante} />
                <Route path="/cadastro-info-pessoal-contratante" component={CadastroInfoPessoalContratante} />
                <Route path="/cadastro-endereco-prestador" component={CadastroEnderecoPrestador} />
                <Route path="/termos" component={Termos} />
                <Route path="/perfil-prestador" component={InfoPerfilPrestador} />
                <Route path="/info-perfil-contratante" component={InfoPerfilContratante} />
                <Route path="/info-contratacao" component={InfoContratacao} />
                <Route path="/contrato-servico" component={ContratoServico} />
                <Route path="/cadastro-perfil" component={CadastroPerfilPrestador} />
                <Route path="/dashboard-prestador" component={DashboardPrestador} />
                <Route path="/dashboard-contratante" component={DashboardContratante} />
                <Route path="/pagamento-cartao" component={PagamentoCartao} />
                <Route path="/avaliacao" component={Avaliacao} />
            </Switch>
        </BrowserRouter>
    );
}