import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';

import Modal from '@material-ui/core/Modal';

import './caixa-notificacao.css';
import api from '../../../services/api';

import PaulaImage from '../../../assets/img/imagens/Paula.png';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 350,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 100,
    },
    modal: {
        marginLeft: 450,
        marginTop: 250,
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    buttonAccept:{
        backgroundColor: '#11cb5f',
        width: 150,
        height: 30,
        marginRight: 50,
    },
    buttonNegate:{
        backgroundColor: '#f44336',
        width: 150,
        height: 30,
    },
}));

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
                    idJob: m.idJob,
                    qtdHorasTrabalho: m.qtdHorasTrabalho,
                    valorTotal: m.valorTotal,
                }))
            );
        }

        // Sempre quando o objeto e iniciado, ele executa a seguinte funcao
        atualizaDadosTrabalhador();
    }, []);

    // Parametros card
    const classes = useStyles();
    // Parametros card

    // Parametros do modal das notificacoes
    const [open, setOpen] = React.useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function aceitar(){
        notificacoes.pop();
        handleClose();
    }

    function negar(){
        notificacoes.pop();
        handleClose();
    }
    // Parametros do modal das notificacoes

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
            {notificacoes.map(data => {
                return (
                    <div>
                        {/* // Card com informacoes do back-end */}
                        <Card className={classes.root} style={{ margin: "10px" }} variant="outlined">
                            <CardContent>
                                <img className='imgPaula' style={{ width: "50px", float: "left" }} src={PaulaImage} alt="Imagem do perfil que lhe enviou notificação." />
                                <p style={{ float: "right" }}>{data.nome} te respondeu.</p>
                            </CardContent>
                            <CardActions onClick={handleOpen}>
                                <Link style={{ marginLeft: "20px" }} >Ver conversa</Link>
                            </CardActions>
                        </Card>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                            <div className={classes.modal}>
                                <h4>Usuario solicitante: {data.nome}</h4>
                                <h4>Quantidade de horas requisitadas: {data.qtdHorasTrabalho}</h4>
                                <h4>Valor total do serviço: {data.valorTotal}</h4>
                                <button className={classes.buttonAccept} onClick={aceitar}> Aceitar trabalho</button>
                                <button className={classes.buttonNegate} onClick={negar}> Rejeitar trabalho</button>
                            </div>
                        </Modal>
                    </div>
                );
            })}

        </div>
    );
}

export default CaixaDeNotificacao;
