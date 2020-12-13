import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import './login.css';
import UserIcon from '../../assets/img/imagens/baba-login-removebg.png';


function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // const tipo_usuario = localStorage.getItem("tipo-usuario");

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault(); //funcao que recebe o evento do formulario e evita o reload da pagina

        const data = {
            email,
            senha
        };

        try {
            const response = await api.post('usuarios/login', data);
            localStorage.setItem('email', email);
            if (response.data === 1) {
                localStorage.setItem('tipo-usuario', response.data);
                alert('Login efetuado com sucesso.');
                history.push('/dashboard-prestador');
            }
            else if (response.data === 2) {
                localStorage.setItem('tipo-usuario', response.data);
                alert('Login efetuado com sucesso.');
                history.push('/dashboard-contratante');
            }
        } catch (err) {
            alert('E-mail ou senha incorretos.');
        }
    }

    return (
        <div className="LoginPage">
            <div>
                <form style={{ margin: '20%' }} className="Formulario" onSubmit={handleLogin}>
                    <div style={{ marginLeft: '-40%' }}>
                        <h4>Login</h4>
                        <input style={{ width: '250px', marginLeft: '-20%' }} type="text"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div style={{ marginLeft: '-40%' }}>
                        <h4>Senha</h4>
                        <input style={{ width: '250px', marginLeft: '-20%' }} type="password"
                            name="senha"
                            value={senha}
                            onChange={e => setSenha(e.target.value)} />
                    </div>
                    <div className="Centralizar">
                        <button style={{ width: '80%', height: '45%', marginLeft: '-60%' }} className="ButtonLinkSquare" type="submit">Entrar</button>
                    </div>
                </form>
            </div>
            <div class="sub-cont">
                <div class="img">
                    <div class="img__text m--up">
                        <h2>Novo(a) aqui?</h2>
                        <p style={{ margin: '5%' }}>Inscreva-se e descubra uma grande quantidade de novas oportunidades!</p>
                        <Link className="botaoImg" to="/confirmar-perfil">Cadastre-se</Link>
                        <div className="sombra"><img className="loginImg" src={UserIcon} /></div>
                    </div>
                </div>
            </div>

            <div className="ForgotPass">
                <Link style={{ color: 'var(--white)', marginLeft: '-30%' }} to="">Esqueci minha senha</Link>
            </div>

        </div>
    );
}

export default Login;