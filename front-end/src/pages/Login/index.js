import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import './login.css';
import UserIcon from '../../assets/img/imagens/A119.jpeg';


function Login(){

    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault(); //funcao que recebe o evento do formulario e evita o reload da pagina

        const data = {
            email,
            senha
        };

        try{
            try{
                const response = await api.post('trabalhadores/login', data);
                alert('Login efetuado com sucesso.');
                localStorage.setItem('email', email);
                history.push('/perfil-prestador');
            }catch(err){
                const response = await api.post('usuarios/login', data);
                alert('Login efetuado com sucesso.');
                localStorage.setItem('email', email);
                history.push('/perfil-contratante');
            }
        } catch(err){
            alert('Erro no login, tente novamente.');
        }
    }

    return(
        <div className="LoginPage">
            <div>
                <form style={{margin:'20%'}} className="Formulario" onSubmit={handleLogin}>
                    <div>
                        <h4>Login</h4>
                            <input style={{width:'250px', marginLeft:'-20%'}} type="text" 
                            name="email" 
                            value={email} 
                            onChange={ e => setEmail(e.target.value)}/>
                    </div>

                    <div>
                        <h4>Senha</h4>
                            <input style={{width:'250px', marginLeft:'-20%'}} type="password" 
                            name="senha"
                            value={senha} 
                            onChange={ e => setSenha(e.target.value)}/>
                    </div>
                    <div className="Centralizar">
                        <button style={{width:'80%', height:'45%'}} className="ButtonLinkSquare" type="submit">Entrar</button>
                    </div>
                </form>
            </div>
            <div class="sub-cont">
    <div class="img">
      <div class="img__text m--up">
        <h2>Novo(a) aqui?</h2>
        <p>Inscreva-se e descubra uma grande quantidade de novas oportunidades!</p>
        <Link className="botaoImg" to="/escolher-perfil">Cadastre-se</Link>
      </div>
    </div>
  </div>

            <div  className="ForgotPass">
                <Link to="">Esqueci minha senha</Link>
            </div>

        </div>
    );
}

export default Login;