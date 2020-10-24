import React from 'react';
import { Link } from 'react-router-dom';

import './contrato-servico.css';

import BannerLogoLateral from '../../components/BannerLogoLateral';

function ContratoServico(){
    return(
        <div className="ContratoServicoConteiner">
            <div className="ContratoServicoContent">
                <h3>Contrato de Serviço</h3>
                <h4>Eu, fulano de tal no dia xx/xx/xxxx confirmo a contratação do serviço y que será realizado nos diasxx/xx/xxxx ao dia xx/xx/xxxx com xx horas de trabalho residencial realizando o pagamento através de y. 
                    Concordo com os termos de uso e contrato de serviço</h4>

                <Link className="ButtonSquareContratoServico" to="" style={{ background: "var(--dark-button)" }}>Aceito os termos de contrato de serviço</Link>
                <Link className="ButtonSquareContratoServico" to="" style={{ background: "var(--blue)" }}>Termos e condições de uso</Link>
            </div>

            <BannerLogoLateral className={"LogoDireita"}/>
        </div>
    )}


    export default ContratoServico;