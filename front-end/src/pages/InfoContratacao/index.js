import React from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

import './info-contratacao.css';

import BannerLogoLateral from '../../components/BannerLogoLateral';

function InfoContratacao(){
    const opcoesDeHorario = [
        { value: '08:00', label: '08:00'},
        { value: '09:00', label: '09:00'},
        { value: '10:00', label: '10:00'},
        { value: '11:00', label: '11:00'},
        { value: '12:00', label: '12:00'},
        { value: '13:00', label: '13:00'},
        { value: '14:00', label: '14:00'},
        { value: '15:00', label: '15:00'},
        { value: '16:00', label: '16:00'},
        { value: '17:00', label: '17:00'},
        { value: '18:00', label: '18:00'},
        { value: '19:00', label: '19:00'},
        { value: '20:00', label: '20:00'},
        { value: '21:00', label: '21:00'},
        { value: '22:00', label: '22:00'}
    ]

    const opcoesDeDias = [
        { value:'Segunda-feira', label: 'Segunda-feira'},
        { value:'Terça-feira', label: 'Terça-feira'},
        { value:'Quarta-feira', label: 'Quarta-feira'},
        { value:'Quinta-feira', label: 'Quinta-feira'},
        { value:'Sexta-feira', label: 'Sexta-feira'},
        { value:'Sábado', label: 'Sábado'},
        { value:'Domingo', label: 'Domingo'}
    ]
    
    return(
        <div className="InfoContratacaoConteiner">
            <div className="InfoContratacaoContent">
                <h3>Informações de contratação do serviço</h3>
                <h4>Selecione por quantas horas você deseja contratar o serviço:</h4>
                <Select isMulti name="horario" options={opcoesDeHorario}/>
                <h4>Selecione os dias da semana que você deseja contratar o serviço:</h4>
                <Select isMulti name="dias" options={opcoesDeDias}/>
                <h4>Selecionea forma de pagamento</h4>
                <input type="checkbox" />Pagar diretamente para o prestador de serviço <br/>
                <input type="checkbox" />Boleto bancário <br/>
                <input type="checkbox" />Débito ou crédito virtual <br/>
                <Link className="ButtonSquareInfoContratacao" to="/contrato-servico" style={{ background: "var(--light-button)" }}>Contratar serviço</Link>
            </div>

            <BannerLogoLateral className={"LogoDireita"}/>
        </div>
    )}


    export default InfoContratacao;