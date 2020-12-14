import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './termos.css';
import api from '../../services/api';

import Logo from '../../assets/img/logo/logo-preto-removebg.png';

function Termos() {

    const history = useHistory();

    function voltar() {
        history.goBack();
    };

    async function redirect() {

        // TODO - REVISAR IMEDIATAMENTE AS PAGINAS, O BACK END E DEIXA-LOS DE ACORDO COM O BANCO
        // Informacoes perfil usuario
        const tipoUsuario = Number(localStorage.getItem("tipo-usuario"));
        const nome = localStorage.getItem("nome");
        const email = localStorage.getItem("email");
        const senha = localStorage.getItem("senha");
        const telefone = Number(localStorage.getItem("telefone")); // ESTE CAMPO NÃO TEM NO BANCO
        const cpf = 11111111111; // ESTE CAMPO NÃO TEM NA TELA

        //Informacoes bancarias usuario
        const banco = localStorage.getItem("banco"); // ESTE CAMPO NÃO TEM NO BANCO
        const tipoConta = localStorage.getItem("tipo-conta"); // ESTE CAMPO NÃO TEM NO BANCO
        const titularConta = localStorage.getItem("titular-conta"); // ESTE CAMPO NÃO TEM NO BANCO
        const pessoa_fisica = localStorage.getItem("pessoa-fisica"); // ESTE CAMPO NÃO TEM NO BANCO
        const pessoa_juridica = localStorage.getItem("pessoa-juridica"); // ESTE CAMPO NÃO TEM NO BANCO
        const agencia = (localStorage.getItem("agencia") + "" + localStorage.getItem("digito-agencia"));
        const conta = (localStorage.getItem("conta") + "" + localStorage.getItem("digito-conta"));

        // Informacoes endereco
        const rua = localStorage.getItem("endereco");
        const bairro = localStorage.getItem("bairro");
        const numero = localStorage.getItem("numero");
        const complemento = localStorage.getItem("complemento");
        const cep = localStorage.getItem("cep");
        const zonaRegional = "Zona Leste"; // Verificar se e possivel pegar pela api viaCep

        if (localStorage.getItem("prev-page") === "/cadastro-info-bancaria-prestador") {

            // Informacoes baba
            const cozinhar = localStorage.getItem("cozinhar");
            const precoCozinheira = parseFloat(localStorage.getItem("precoCozinhar"));
            const limpar = localStorage.getItem("limpar");
            const precoLimpeza = parseFloat(localStorage.getItem("precoLimpeza"));
            const precoAteTres = parseFloat(localStorage.getItem("precoAteTres"));
            const precoTresAteOito = parseFloat(localStorage.getItem("precoTresAteOito"));
            const precoNoveAteQuinze = parseFloat(localStorage.getItem("precoNoveAteQuinze"));
            let profissao = "Baba";

            // Informacoes profissional
            const cobrarPorHora = false;
            const valorHora = parseFloat(localStorage.getItem("precoHora"));
            const valorFixo = parseFloat(localStorage.getItem("precoFixo"));
            const qtdDiasTrabalha = Number(localStorage.getItem("qtdSelectDias")); // ESTE CAMPO NÃO TEM NO BANCO
            const segunda = localStorage.getItem("segunda"); // ESTE CAMPO NÃO TEM NO BANCO
            const terca = localStorage.getItem("terca"); // ESTE CAMPO NÃO TEM NO BANCO
            const quarta = localStorage.getItem("quarta"); // ESTE CAMPO NÃO TEM NO BANCO
            const quinta = localStorage.getItem("quinta"); // ESTE CAMPO NÃO TEM NO BANCO
            const sexta = localStorage.getItem("sexta"); // ESTE CAMPO NÃO TEM NO BANCO
            const sabado = localStorage.getItem("sabado"); // ESTE CAMPO NÃO TEM NO BANCO
            const domingo = localStorage.getItem("domingo"); // ESTE CAMPO NÃO TEM NO BANCO

            if (tipoUsuario === 1) profissao = "Baba";

            const data = {
                cobrarPorHora,
                valorHora,
                valorFixo,
                qtdDiasTrabalha,
                segunda,
                terca,
                quarta,
                quinta,
                sexta,
                sabado,
                domingo,
                profissao,
                usuario: {
                    nome,
                    email,
                    senha,
                    telefone,
                    cpf,
                    tipoUsuario,
                    endereco: {
                        rua,
                        bairro,
                        numero,
                        complemento,
                        cep,
                        zonaRegional
                    },
                    usuarioConta: {
                        banco,
                        tipoConta,
                        titularConta,
                        pessoa_fisica,
                        pessoa_juridica,
                        agencia,
                        conta
                    }
                },
                baba: {
                    cozinhar,
                    precoCozinheira,
                    limpar,
                    precoLimpeza,
                    precoAteTres,
                    precoTresAteOito,
                    precoNoveAteQuinze
                }
            };

            console.log(data);

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
                tipoUsuario,
                endereco: {
                    rua,
                    bairro,
                    numero,
                    complemento,
                    cep,
                    zonaRegional,
                },
                usuarioConta: {
                    agencia,
                    conta,
                    titularConta,
                    banco,
                    tipoConta,
                    pessoa_fisica,
                    pessoa_juridica
                }
            };

            console.log(data);

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
            <h2>Política Privacidade
A sua privacidade é importante para nós. É política do Jobby Jobs respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Jobby Jobs, e outros sites que possuímos e operamos.

Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.

Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.

Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.

O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.

Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.

O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco. </h2>

            <div style={{ margin: '5%' }}>
                <Link className="botao_termo" onClick={redirect} >Li e concordo com os termos de uso</Link>
                <Link className="botao" onClick={voltar} >Voltar</Link>
            </div>

        </div>
    )
}


export default Termos;