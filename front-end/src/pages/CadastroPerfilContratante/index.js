import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import BannerLateralCadastro from './BannerLateralCadastro';

import './cadastro-perfil-contratante.css';

import LeftWhiteArrow from '../../assets/img/icons/left-arrow-white.png';
import GoogleIcon from '../../assets/img/icons/google.png';
import FacebookIcon from '../../assets/img/icons/facebook-icon.png';

function CadastroPerfilContratante() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();

    function handleCadastroUmContratante(e) {
        e.preventDefault();

        localStorage.setItem("nome", nome);
        localStorage.setItem("email", email);
        localStorage.setItem("telefone", telefone);
        localStorage.setItem("senha", senha);

        history.push('/cadastro-info-pessoal-contratante');
        // to="/cadastro-info-pessoal-contratante"
    }

    return (
        <div>
            <div className="CadastroPerfilContratanteContainer">
                <div className="CadastroPerfilContratanteContent">
                    <Link to="/"><img className="Return" style={{ marginTop: '2%' }} src={LeftWhiteArrow} alt="Ícone de seta para a esquerda para voltar para a tela innicial" /></Link>
                    <form onSubmit={handleCadastroUmContratante}>
                        <div className="input-container">
                            <input style={{ margin: '2%', marginLeft: '35%' }} type="text"
                                name="nome"
                                value={nome}
                                onChange={e => setNome(e.target.value)} />
                            <label style={{ marginTop: '-0.5%', marginLeft: '5%' }}>Nome completo</label>
                        </div>
                        <div className="input-container">
                            <input style={{ margin: '1%', marginLeft: '35%' }} type="text"
                                name="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)} />
                            <label style={{ marginTop: '-0.5%', marginLeft: '5%' }}>Email</label>
                        </div>
                        <div className="input-container">
                            <input style={{ margin: '2%', marginLeft: '35%' }} type="text"
                                name="telefone"
                                value={telefone}
                                onChange={e => setTelefone(e.target.value)} />
                            <label style={{ marginTop: '-0.5%', marginLeft: '5%' }}>Telefone</label>
                        </div>
                        <div className="input-container">
                            <input style={{ margin: '2%', marginLeft: '35%' }} type="password"
                                name="senha"
                                value={senha}
                                onChange={e => setSenha(e.target.value)} />
                            <label style={{ marginTop: '-0.5%', marginLeft: '5%' }}>Senha</label>
                        </div>
                        <div style={{ margin: '5%' }} className="BotoesLoginForm">
                            <button className="ButtonLinkSquareCadastro" style={{ background: "var(--blue", marginRight: " 5%", color: "var(--white)", padding: '25px' }} type="submit" >Cadastrar-se</button>
                            <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--pink)", color: "var(--white)" }} to="/login">Login</Link>
                        </div>
                    </form>
                    <div className="BotoesCadastroPlataformas">
                        <Link className="ButtonLinkSquareCadastro" to="#"><img src={GoogleIcon} alt="Ícone do Google" to="#" /> Cadastrar usando Google</Link>
                        <Link className="ButtonLinkSquareCadastro" style={{ background: "var(--blue-facebook)", marginTop: "1%", color: "var(--white)" }} to="#" ><img src={FacebookIcon} alt="Ícone do Facebook" /> Cadastrar usando Facebook</Link>
                    </div>
                </div>
            </div>
            <BannerLateralCadastro />
        </div>
    );
}

export default CadastroPerfilContratante;