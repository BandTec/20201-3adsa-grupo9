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

    const [notificacoes, setNotificacoes] = useState([{}]);


    useEffect(() => {
        async function atualizaDadosTrabalhador() {
            const response = await api.get('/trabalhadores/solicitacoes/' + localStorage.getItem("id"));
            console.log(response);

            setNotificacoes(
                response.data.map(m => ({
                    nome: m.usuarioSolicitante.nome,
                    id: m.usuarioSolicitante.id,
                }))
            );

            console.log(notificacoes);
        }

        // Sempre quando o objeto e iniciado, ele executa a seguinte funcao
        atualizaDadosTrabalhador();
    }, []);

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
            {notificacoes.map( data => {
                return (
                    // Card com informacoes do back-end
                    <Card className={classes.root} style={{ margin: "10px" }} variant="outlined">
                        <CardContent>
                            <img className='imgPaula' style={{ width: "50px", float: "left" }} src={PaulaImage} alt="Imagem do perfil que lhe enviou notificação." />
                            <p style={{ float: "right" }}>{data.nome} te respondeu.</p>
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
