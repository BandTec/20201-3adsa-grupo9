import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import './login.css';

import UserIcon from '../../assets/img/icons/user.png';
import UserLoginIcon from '../../assets/img/icons/user-form.png';
import UserPasswordIcon from '../../assets/img/icons/user-password.png';

function Login(){

    const[login, setLogin] = useState('');
    const[senha, setSenha] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault(); //funcao que recebe o evento do formulario e evita o reload da pagina

        const data = {
            login,
            senha
        };

        try{
            const response = await api.post('trabalhadores/login', data);
            alert('Login efetuado com sucesso.');
            history.push('/perfil-prestador');
        } catch(err){
            const response = await api.post('contratantes/login', data);
            alert('Login efetuado com sucesso.');
            history.push('/perfil-contratante');
        } finally{
            alert('Erro no login, tente novamente.');
        }
    }

    return(
        <div className="LoginPage">
            <div className="UserIcon">
                <img src={UserIcon} alt="Ícone remetendo há um usuário."/>
            </div>
            <div>
                <form className="Formulario" onSubmit={handleLogin}>
                    <div>
                        <h4>Login</h4>
                        <label>
                            <img src={UserLoginIcon} alt="a"/>
                            <input type="text" 
                            name="login" 
                            value={login} 
                            onChange={ e => setLogin(e.target.value)}/>
                        </label>
                    </div>

                    <div>
                        <h4>Senha</h4>
                        <label>
                            <img src={UserPasswordIcon} alt="a"/>
                            <input type="password" 
                            name="senha"
                            value={senha} 
                            onChange={ e => setSenha(e.target.value)}/>
                        </label>
                    </div>
                    <div className="Centralizar">
                        <button  className="ButtonLinkSquare" type="submit">Entrar</button>
                    </div>
                </form>
            </div>
            <div className="ForgotPass">
                <Link to="">Esqueci minha senha</Link>
            </div>
        </div>
    );
}

export default Login;