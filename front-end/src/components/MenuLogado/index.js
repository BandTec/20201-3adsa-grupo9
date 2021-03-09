import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Popover from '@material-ui/core/Popover';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';

import api from '../../services/api';
import CaixaDeNotificacao from './CaixaDeNotificacao';

import Logo from '../../assets/img/logo/logo-removebg.png';
import NotificacaoIcon from '../../assets/img/icons/61073.png';

import './menu-logado.css';

//Estilizacao da badge de notificacoes
const useStyles = makeStyles ({
    customBadge: {
        backgroundColor:'#8FFF4F',
    }
});
//Estilizacao da badge de notificacoes

function MenuLogado() {

    const classes = useStyles();

    // Parametros da notificacao do card
    const [invisible, setInvisible] = React.useState(false);

    // Funcao que verifica se houveram novos chamados
    useEffect(() => {
        const timer = setInterval(async () => {
            // TODO - Verificar se havera o mesmo metodo para o contratante
            const response = await api.get("/trabalhadores/notificacoes-alert");
            // console.log(response.data);
            let res = response.data;
            if (res !== null) {
                setInvisible(true);
            }
            else {
                setInvisible(false);
            }
        }, 5000);
    }, []);
    // Parametros da notificacao do card

    // Parametros do popouver
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const id = open ? 'simple-popover' : undefined;
    // Parametros do popouver

    // Parametros de rota por tipo de usuario
    const [urlPerfil, setUrlPerfil] = React.useState('');

    async function getTipoUsuario() {
        if (localStorage.getItem() === 1) {
            setUrlPerfil("/perfil-prestador");
        }
        else {
            setUrlPerfil("/perfil-contratante");
        }
    }

    // Parametros de rota por tipo de usuario
    async function getId() {
        const resposta = await api.get('trabalhadores/email/' + localStorage.getItem("email"));
        localStorage.setItem('id', resposta.data);
    }

    function reset () {
        localStorage.clear();
    }

    return (
        <nav className="Menu" onLoad={getId}>
            <Link to="/" onClick={reset}>
                <img className="Logo" src={Logo} alt="Logo da empresa Jobby Jobs" />
            </Link>

            <Link className="ButtonLink" to="">Serviços</Link>

            <Link className="ButtonLink" to="">Quem somos</Link>

            <Link className="ButtonLink" to=""> Como funciona?</Link>

            <Link className="ButtonLink" to={urlPerfil}>Perfil</Link>

            {/* Cores da badge: default, error, primary ou secondary color="secondary" */}
            <Link id={id} onClick={handleClick} > <Badge classes={{ badge: classes.customBadge}} variant="dot" invisible={invisible} anchorOrigin={{ vertical: 'top', horizontal: 'left', }}> <img style={{ height: "40px", paddingTop: "3px" }} src={NotificacaoIcon} alt="Ícone de notificação" /> </Badge> </Link>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <CaixaDeNotificacao />
            </Popover>
        </nav>
    );
}

export default MenuLogado;
