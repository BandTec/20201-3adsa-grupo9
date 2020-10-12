import React from 'react';
import { Link } from 'react-router-dom';

import './login.css';

import UserIcon from '../../assets/img/icons/user.png';
import UserLoginIcon from '../../assets/img/icons/user-form.png';
import UserPasswordIcon from '../../assets/img/icons/user-password.png';

function Login(){

    return(
        <div className="LoginPage">
            <div className="UserIcon">
                <img src={UserIcon} alt="Ícone remetendo há um usuário."/>
            </div>
            <div>
                <form className="Formulario" onSubmit={function handleSubmit(){}}>
                    <div>
                        <h4>Login</h4>
                        <label>
                            <img src={UserLoginIcon} alt="a"/><input type="text" name="login"/>
                        </label>
                    </div>

                    <div>
                        <h4>Senha</h4>
                        <label>
                            <img src={UserPasswordIcon} alt="a"/><input type="password" name="senha"/>
                        </label>
                    </div>
                    <div className="Centralizar">
                        <button  className="ButtonLinkSquare">Entrar</button>
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