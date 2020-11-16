import React, { useState } from 'react';
import './cadastro.css';
import GoogleIcon from '../../assets/img/icons/Gmail.png';
import FaceIcon from '../../assets/img/icons/facebook.png';
import { useHistory } from 'react-router-dom';
// import InputMask from 'react-input-mask';


// const InputTelefone = (props) => (
//     <InputMask mask="(99)99999-9999" value={props.value} onChange={props.onChange} />
//   );

function Cadastro() {

    const[nome, setNome] = useState('');
    const[email, setEmail] = useState('');
    const[telefone, setTelefone] = useState('');
    const[senha, setSenha] = useState('');

    const history = useHistory();

    function handleCadastroUmPrestador(e) {
        e.preventDefault();

        localStorage.setItem("nome", nome);
        localStorage.setItem("email", email);
        localStorage.setItem("telefone", telefone);
        localStorage.setItem("senha", senha);
        
        history.push('/cadastro-perfil');
        // to='/cadastro-perfil'
    }

    return (
        <div style={{ backgroundColor: 'var(--white)' }} className='CadastroContainer'>


            <div className="steps">
                <ul className="steps-container">
                    <li style={{ width: "20%" }} className="activated">
                        <div className="step">
                            <div className="step-image"><span></span></div>
                            <div className="step-current">Etapa 1</div>
                            <div className="step-description">Dados cadastrais</div>
                        </div>
                    </li>
                    <li style={{ width: "30%" }}>
                        <div className="step">
                            <div className="step-image"><span></span></div>
                            <div className="step-current">Etapa 2</div>
                            <div className="step-description">Cadastro de perfil</div>
                        </div>
                    </li>
                    <li style={{ width: "20%" }}>
                        <div className="step">
                            <div className="step-image"><span></span></div>
                            <div className="step-current">Etapa 3</div>
                            <div className="step-description">Cadastro de endereço</div>
                        </div>
                    </li>
                    <li style={{ width: "20%" }}>
                        <div className="step">
                            <div className="step-image"><span></span></div>
                            <div className="step-current">Etapa 4</div>
                            <div className="step-description">Dados bancários</div>
                        </div>
                    </li>
                </ul>
                <div className="step-bar" style={{ width: "10%" }}></div>
            </div>


            <h1 style={{ color: 'var(--black)', marginTop: '9%' }}>Cadastre-se já e aumente sua clientela</h1>
            <h2 style={{ color: 'var(--black)' }}>Este é o passo 1</h2>



            <form style={{ marginTop: "8%" }} onSubmit={handleCadastroUmPrestador}>
                <div className="input-container">
                    <input type="text" required="" placeholder="Digite seu nome completo" 
                    name="nome" 
                    value={nome} 
                    onChange={ e => setNome(e.target.value)}/>
                    <label>Nome completo</label>
                </div>

                <div className="input-container">
                    <input type="text" required="" placeholder="Digite seu e-mail" 
                    name="email" 
                    value={email} 
                    onChange={ e => setEmail(e.target.value)}/>
                    <label>Email</label>
                </div>

                <div className="input-container">
                    {/* <InputTelefone  type="number" required="" placeholder="Digite seu telefone"/> */}
                    <input type="number" required="" placeholder="Digite seu telefone" 
                    name="telefone" 
                    value={telefone} 
                    onChange={ e => setTelefone(e.target.value)}/>
                    <label>Telefone</label>
                </div>

                <div className="input-container">
                    <input type="password" required="" placeholder="Digite sua senha" 
                    name="senha" 
                    value={senha} 
                    onChange={ e => setSenha(e.target.value)}/>
                    <label>Senha</label>
                </div>
                <button className="ButtonLinkSquareCadastro" style={{ background: "var(--pink)", color: "var(--white)", marginLeft: '38%' }} type="submit">Próximo passo</button>
            </form>


            <button src={GoogleIcon} alt="Icone do google" className='buttonGoogle'></button>
            <button src={FaceIcon} alt="Icone do fabebook" className='buttonFace'></button>


        </div>
    )
}

export default Cadastro;