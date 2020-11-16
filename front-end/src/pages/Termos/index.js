import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './termos.css';
import Logo from '../../assets/img/logo/logo-removebg.png';
import api from '../../services/api';

function Termos() {

    const history = useHistory();

    async function redirect() {

        // TODO - REVISAR IMEDIATAMENTE AS PAGINAS, O BACK END E DEIXA-LOS DE ACORDO COM O BANCO
        // Informacoes perfil usuario
        const tipo_usuario = localStorage.getItem("tipo-usuario");
        const nome = localStorage.getItem("nome");
        const email = localStorage.getItem("email");
        const senha = localStorage.getItem("senha");
        const telefone = localStorage.getItem("telefone"); // ESTE CAMPO NÃO TEM NO BANCO
        const cpf = 11111111111; // ESTE CAMPO NÃO TEM NA TELA

        //Informacoes bancarias usuario
        const banco = localStorage.getItem("banco"); // ESTE CAMPO NÃO TEM NO BANCO
        const tipo_conta = localStorage.getItem("tipo-conta"); // ESTE CAMPO NÃO TEM NO BANCO
        const titular_conta = localStorage.getItem("titular-conta"); // ESTE CAMPO NÃO TEM NO BANCO
        const pessoa_fisica = localStorage.getItem("pessoa-fisica"); // ESTE CAMPO NÃO TEM NO BANCO
        const pessoa_juridica = localStorage.getItem("pessoa-juridica"); // ESTE CAMPO NÃO TEM NO BANCO
        const agencia = (localStorage.getItem("agencia") + "-" + localStorage.getItem("digito-agencia"));
        const conta = (localStorage.getItem("conta") + "-" + localStorage.getItem("digito-conta"));

        // Informacoes endereco
        const endereco = localStorage.getItem("endereco");
        const bairro = localStorage.getItem("bairro");
        const numero = localStorage.getItem("numero");
        const complemento = localStorage.getItem("complemento");
        const cep = localStorage.getItem("cep");

        if (localStorage.getItem("prev-page") == "/cadastro-info-bancaria-prestador") {

            // Informacoes baba
            const cozinhar = localStorage.getItem("cozinhar");
            const preco_se_cozinha = 0.00; // ESTE CAMPO NÃO TEM NA PAGINA
            const limpar = localStorage.getItem("limpar");
            const preco_se_limpa = 0.00; // ESTE CAMPO NÃO TEM NA PAGINA
            const preco_ate_tres = 0.00; // ESTE CAMPO NÃO TEM NA PAGINA
            const preco_tres_ate_oito = 0.00; // ESTE CAMPO NÃO TEM NA PAGINA
            const preco_nove_ate_quinze = 0.00; // ESTE CAMPO NÃO TEM NA PAGINA
            
            // Informacoes profissional
            const cobra_por_hora = false; // ESTE CAMPO NÃO TEM NA PAGINA
            const valor_hora = 0.00; // ESTE CAMPO NÃO TEM NA PAGINA
            const valor_fixo = 0.00; // ESTE CAMPO NÃO TEM NA PAGINA
            const qtd_dias_trabalha = localStorage.getItem("qtdSelectDias"); // ESTE CAMPO NÃO TEM NO BANCO
            const segunda = localStorage.getItem("segunda"); // ESTE CAMPO NÃO TEM NO BANCO
            const terca = localStorage.getItem("terca"); // ESTE CAMPO NÃO TEM NO BANCO
            const quarta = localStorage.getItem("quarta"); // ESTE CAMPO NÃO TEM NO BANCO
            const quinta = localStorage.getItem("quinta"); // ESTE CAMPO NÃO TEM NO BANCO
            const sexta = localStorage.getItem("sexta"); // ESTE CAMPO NÃO TEM NO BANCO
            const sabado = localStorage.getItem("sabado"); // ESTE CAMPO NÃO TEM NO BANCO
            const domingo = localStorage.getItem("domingo"); // ESTE CAMPO NÃO TEM NO BANCO
            
            const data = {
                nome,
                email,
                senha,
                telefone,
                cpf,
                tipo_usuario,

                endereco,
                bairro,
                numero,
                complemento,
                cep,

                banco,
                tipo_conta,
                titular_conta,
                pessoa_fisica,
                pessoa_juridica,
                agencia,
                conta,

                cobra_por_hora,
                valor_hora,
                valor_fixo,
                qtd_dias_trabalha,
                segunda,
                terca,
                quarta,
                quinta,
                sexta,
                sabado,
                domingo,

                cozinhar,
                preco_se_cozinha,
                limpar,
                preco_se_limpa,
                preco_ate_tres,
                preco_tres_ate_oito,
                preco_nove_ate_quinze
            };

            try {
                const response = await api.post('/trabalhadores', data);
                
                alert("Cadastro realizado com sucesso!\nVocê será redirecionado para a página de Login");
                
                history.push('/login');
                // to="/login"

                localStorage.clear(); // Vai limpar o historico do usuario, indicando que o cadastro foi concluido e que suas informacoes estao salvas
            } catch (error) {
                alert("Desculpe, mas estamos com problemas na plataforma, refaça seu cadastro dentro de algumas horas.");
            }
        }
        else {

            const data = {
                nome,
                email,
                senha,
                telefone,
                cpf,
                tipo_usuario,

                endereco,
                bairro,
                numero,
                complemento,
                cep,

                banco,
                tipo_conta,
                titular_conta,
                pessoa_fisica,
                pessoa_juridica,
                agencia,
                conta,
            };

            try {
                const response = await api.post('/usuarios', data);
                
                alert("Cadastro realizado com sucesso!\nVocê será redirecionado para a página de Login");
                
                history.push('/login');
                // to="/login"

                localStorage.clear(); // Vai limpar o historico do usuario, indicando que o cadastro foi concluido e que suas informacoes estao salvas
            } catch (error) {
                alert("Desculpe, mas estamos com problemas na plataforma, refaça seu cadastro dentro de algumas horas.");
            }
        }
    }

    return (
        <div className="TermosConteiner">
            <img className='logo' src={Logo} alt="Logo Jobby Jobs" />

            <h1>Termos e condições de uso</h1>
            <h2>Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
            classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
            by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" </h2>

            <div style={{ margin: '10%' }}>
                <Link className="botao_termo" onClick={redirect} >Li e concordo com os termos de uso</Link>
                <Link className="botao" to="/">Voltar</Link>
            </div>

        </div>
    )
}


export default Termos;