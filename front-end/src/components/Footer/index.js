import React from 'react';

import './footer.css';

function Menu(){
    return(
        <footer>
            <div className="MapaSite">
                {/* Navegacao para a aba de servicos */}
                <div>
                    <h4>Serviços</h4>
                    <h4>Babá</h4>
                    <h4>Pintor</h4>
                    <h4>Pedreiro</h4>
                    <h4>Carpinteiro</h4>
                    <h4>Diarista</h4>
                </div>
                {/* Fim da navegacao para a aba de servicos */}

                {/* Navegacao para a aba de institucional */}
                <div>
                    <h4>Institucional</h4>
                    <h4>Quem somos</h4>
                    <h4>Trabalhe conosco</h4>
                </div>
                {/* Fim da navegacao para a aba de institucional */}

                {/* Links para redes sociais */}
                <div>
                    <h4>Redes sociais</h4>
                </div>
                {/* Fim dos links para redes sociais */}

                {/* Links para download do aplicativo */}
                <div>
                    <h4>Downloads</h4>
                </div>
                {/* Fim dos links para download do aplicativo */}
            </div>
            <div className="Direitos">
                <small className="Direitos">©2020, Jobby Jobs - Todos os direitos reservados</small>
            </div>
        </footer>
    );
}

export default Menu;