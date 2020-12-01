import React from 'react';
import { Link } from 'react-router-dom';
import Popover from '@material-ui/core/Popover';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';

import './dashboard.css';
import api from '../../services/api';
import Footer from '../../components/Footer';

import Logo from '../../assets/img/logo/logo-removebg.png';
import NotificacaoIcon from '../../assets/img/icons/61073.png';
import PaulaImage from '../../assets/img/imagens/Paula.png';
import ClariceImage from '../../assets/img/imagens/clarice.jpg';
import PedroImage from '../../assets/img/imagens/pedro.jpg';
import starIcon from '../../assets/img/icons/star.png';
import babaIcon from '../../assets/img/imagens/baba 1.png';
import babaImage from '../../assets/img/icons/babaS.png';
import faxineiroImage from '../../assets/img/imagens/faxineiro.png';

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

function DashboardPrestador() {

    // Parametros do popouver
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = async (event) => {
        setAnchorEl(event.currentTarget);
        // const response = await api.get("/trabalhadores/notificacoes/1");
        // const response = await api.get("/trabalhadores/solicitacoes/1");
        // console.log(response);
        // console.log(response.data);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    // Parametros do popouver

    // Parametros card
    const classes = useStyles();

    // Parametros card

    return (
        <div className="DashboardPrestadorContainer">

            <nav className="Menu">
                <Link to="/">
                    <img className="Logo" src={Logo} alt="Logo da empresa Jobby Jobs" />
                </Link>

                <Link className="ButtonLink" to="">Serviços</Link>

                <Link className="ButtonLink" to="">Quem somos</Link>

                <Link className="ButtonLink" to=""> Como funciona?</Link>

                <Link className="ButtonLink" to="/perfil-prestador">Perfil</Link>

                <Link id={id} onClick={handleClick}> <img style={{ height: "40px", paddingTop: "3px" }} src={NotificacaoIcon} alt="Ícone de notificação" /></Link>

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
                        horizontal: 'left',
                    }}
                >
                    <Card className={classes.root} style={{ margin: "10px" }} variant="outlined">
                        <CardContent>
                            <img className='imgPaula' style={{ width: "50px", float: "left" }} src={PaulaImage} />
                            <p style={{ float: "right" }}>Fulano te respondeu.</p>
                        </CardContent>
                        <CardActions>
                            <button style={{ marginLeft: "20px" }} >Ver conversa</button>
                        </CardActions>
                    </Card>

                    <Card className={classes.root} style={{ margin: "10px" }} variant="outlined">
                        <CardContent>
                            <img className='imgPaula' style={{ width: "50px", float: "left" }} src={PaulaImage} />
                            <p style={{ float: "right" }}>Fulano pediu um orçamento.</p>
                        </CardContent>
                        <CardActions>
                            <button style={{ marginLeft: "20px" }} >Ver conversa</button>
                        </CardActions>
                    </Card>

                    <Card className={classes.root} style={{ margin: "10px" }} variant="outlined">
                        <CardContent>
                            <img className='imgPaula' style={{ width: "50px", float: "left" }} src={PaulaImage} />
                            <p style={{ float: "right" }}>Fulano aceitou sua proposta.</p>
                        </CardContent>
                        <CardActions>
                            <button style={{ marginLeft: "20px" }} >Ver conversa</button>
                        </CardActions>
                    </Card>

                    <Card className={classes.root} style={{ margin: "10px" }} variant="outlined">
                        <CardContent>
                            <img className='imgPaula' style={{ width: "50px", float: "left" }} src={PaulaImage} />
                            <p style={{ float: "right" }}>Fulano enviou uma mensagem.</p>
                        </CardContent>
                        <CardActions>
                            <button style={{ marginLeft: "20px" }} >Ver conversa</button>
                        </CardActions>
                    </Card>

                    <Card className={classes.root} style={{ margin: "10px" }} variant="outlined">
                        <CardContent>
                            <img className='imgPaula' style={{ width: "50px", float: "left" }} src={PaulaImage} />
                            <p style={{ float: "right" }}>Fulano aceitou sua proposta.</p>
                        </CardContent>
                        <CardActions>
                            <button style={{ marginLeft: "20px" }} >Ver conversa</button>
                        </CardActions>
                    </Card>
                </Popover>
            </nav>


            <div className='clientes'>
                <img className='imgPaula' src={PaulaImage} />

                <p>Paula 1,9km</p>
                <ul>
                    Ultimos seviços contratos:
            <li>Babá</li>
                    <li>Babá - faxineira</li>
                    <li>Babá - cozinheira</li>
                </ul>

                <h2>Ultimas classificações de Paula:</h2>
                <img className='iconeBaba' src={babaIcon} alt="icone de baba com criança" />
                <div style={{ marginLeft: '80.5%', marginTop: '-4%' }} className='containerClassificacao'>
                    <img className="estrela" src={starIcon} alt="imagem de estrela" />
                    <img className="estrela" src={starIcon} alt="imagem de estrela" />
                    <img className="estrela" src={starIcon} alt="imagem de estrela" />
                    <img className="estrela" src={starIcon} alt="imagem de estrela" />
                    <img className="estrela" src={starIcon} alt="imagem de estrela" />
                </div>
                <h1>“Suellen trabalha muito bem, minha filha amou ela super recomendo!”</h1>

            </div>

            <div style={{ marginTop: '2%' }} className='clientes'>
                <img className='imgClarice' src={ClariceImage} />

                <p>Clarice 2,1km</p>
                <ul>
                    Ultimos seviços contratos:
            <li>Babá</li>
                    <li>Babá - faxineira</li>
                </ul>

                <h2>Ultimas classificações de Clarice:</h2>
                <img className='iconeBaba' src={babaImage} alt="icone de baba com criança" />
                <div style={{ marginLeft: '81%', marginTop: '-4%' }} className='containerClassificacao'>
                    <img className="estrela" src={starIcon} alt="imagem de estrela" />
                    <img className="estrela" src={starIcon} alt="imagem de estrela" />
                    <img className="estrela" src={starIcon} alt="imagem de estrela" />
                    <img className="estrela" src={starIcon} alt="imagem de estrela" />
                </div>
                <h1>“Ana Paula super pontual e caprichosa, vou contratar mais vezes!”</h1>

            </div>

            <div style={{ marginTop: '2%' }} className='clientes'>
                <img className='imgPedro' src={PedroImage} />

                <p>Pedro 2,7km</p>
                <ul>
                    Ultimos seviços contratos:
            <li>Babá - faxineira</li>
                    <li>Babá - cozinheira</li>
                </ul>

                <h2>Ultimas classificações de Pedro:</h2>
                <img className='iconeBaba' src={faxineiroImage} alt="icone de baba com criança" />
                <div style={{ marginLeft: '81%', marginTop: '-4%' }} className='containerClassificacao'>
                    <img className="estrela" src={starIcon} alt="imagem de estrela" />
                    <img className="estrela" src={starIcon} alt="imagem de estrela" />
                    <img className="estrela" src={starIcon} alt="imagem de estrela" />
                </div>
                <h1>“Adorei o trabalho do André mas chegou muito atrasado”</h1>

            </div>

            <Footer />





        </div>
    )
}

export default DashboardPrestador;
