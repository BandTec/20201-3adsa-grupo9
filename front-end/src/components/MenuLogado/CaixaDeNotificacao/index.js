import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';

import './caixa-notificacao.css';
import api from '../../../services/api';

import PaulaImage from '../../../assets/img/imagens/Paula.png';

const useStyles = makeStyles({
    root: {
        minWidth: 350,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 100,
    },
});

function CaixaDeNotificacao() {

    const [notificacoes, setNotificacoes] = useState([]);

    useEffect(() => {
        // const response = api.get('/trabalhadores/solicitacoes/' + localStorage.getItem("id") );
        // console.log(response.data);
        async function atualizaDadosTrabalhador() {
            // const response = await api.get('/trabalhadores/solicitacoes/' + localStorage.getItem("id"));
            const response = await api.get('/trabalhadores/solicitacoes/' + localStorage.getItem("id"));
            // console.log(response.data);
            // console.log(response.data.length);
            for( let i = 0; i<=response.data.length; i++){
                // console.log(response.data[i].usuarioSolicitante.nome);
                setNotificacoes([...notificacoes, {
                    nome: response.data[i].usuarioSolicitante.nome,
                    id: response.data[i].usuarioSolicitante.id
                }]);
            }
            // console.log(response.data[0].usuarioSolicitante.nome);
            // setNotificacoes([...notificacoes, response.data]);
            console.log(notificacoes);
        }

        async function atualizaDadosContratante() {
            // TODO - Verificar se havera o mesmo metodo para o contratante
            const response = await api.get('/usuarios/solicitacoes/' + localStorage.getItem("id"));
            setNotificacoes(response.data);
            console.log(response.data);
        }

        atualizaDadosTrabalhador();

        // if( localStorage.getItem('tipo-usuario') === 2){
        //     atualizaDadosTrabalhador();
        // }
        // else{
        //     atualizaDadosContratante();
        // }
    }, []);

    // async function atualizaDados(){
    //     const response = await api.get("/trabalhadores/notificacoes/1");
    // const response = await api.get('/trabalhadores/solicitacoes/' + localStorage.getItem("id") );
    //     console.log(response);
    //     console.log(response.data);
    // return response.data;
    // }

    // Parametros card
    const classes = useStyles();
    // Parametros card

    return (
        <div>
            {/* regra responsavel por gerar o card indicando que nao tem notificacoes */}
            {notificacoes === undefined || notificacoes.length === 0 && (
                <Card className={classes.root} style={{ margin: "10px" }} variant="outlined">
                    <CardContent>
                        <p style={{ float: "right" }}>Você ainda não possui notificações.</p>
                    </CardContent>
                </Card>
            )}

            {/* regra responsavel por gerar os cards com as notificacoes */}
            {notificacoes.map( (idJob, index) => {
                return (
                    <Card className={classes.root} style={{ margin: "10px" }} variant="outlined" key={index}>
                        <CardContent>
                            <img className='imgPaula' style={{ width: "50px", float: "left" }} src={PaulaImage} alt="Imagem do perfil que lhe enviou notificação." />
                            <p style={{ float: "right" }}>{} te respondeu.</p>
                        </CardContent>
                        <CardActions>
                            <Link to="#" style={{ marginLeft: "20px" }} >Ver conversa</Link>
                        </CardActions>
                    </Card>
                );
            })}

        </div>
    );
}

export default CaixaDeNotificacao;
