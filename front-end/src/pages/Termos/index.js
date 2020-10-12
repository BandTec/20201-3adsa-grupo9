import React from 'react';
import { Link } from 'react-router-dom';
import './termos.css';
import Logo from '../../assets/img/logo/Logo-v.2-azul.png';



function Termos(){
    return(
        <div>
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

             <div style={{margin: '10%'}}>
             <Link className="botao_termo" to="">Li e concordo os termos de uso</Link>
             <Link className="botao" to="">Voltar</Link>
             </div>

            </div>
    )}


    export default Termos;