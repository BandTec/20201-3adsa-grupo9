import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo/logo-removebg.png';
import SearchIcon from '../../assets/img/icons/search.png';

import './menu.css';

function Menu() {

    function drop() {
        var displaySettings = document.getElementById("Dropdown");

        if (displaySettings.style.display === "block") {
            document.getElementById("Dropdown").style.display = "none";
        }
        else {
            document.getElementById("Dropdown").style.display = "block";
        }
    }

    return (
        <div>
            <nav className="Menu">
                <Link to="/">
                    <img className="Logo" src={Logo} alt="Logo da empresa Jobby Jobs" />
                </Link>

                <Link className="ButtonLink" to="#">Serviços</Link>

                <Link className="ButtonLink" to="#">Quem somos</Link>

                <Link className="ButtonLink" to="#"> Como funciona?</Link>

                <Link className="ButtonLinkSquare" to="#">Qual serviço precisa? <img style={{ height: "15px", paddingTop: "3px" }} src={SearchIcon} alt="Ícone de pesquisa" /></Link>

                <Link className="ButtonLink" to="/Login">Login</Link>
            </nav>

            <nav className="MenuDropdown">
                <Link to="" className="ButtonLinkSquare ButtonDropdown" onClick={drop}>Menu</Link>

                <div className="MenuDropdownContent" id="Dropdown">
                    <Link className="ButtonLink" to="#">Serviços</Link>

                    <Link className="ButtonLink" to="#">Quem somos</Link>

                    <Link className="ButtonLink" to="#"> Como funciona?</Link>

                    <Link className="ButtonLinkSquare" to="#">Qual serviço precisa? <img style={{ height: "15px", paddingTop: "3px" }} src={SearchIcon} alt="Ícone de pesquisa" /></Link>

                    <Link className="ButtonLink" to="/Login">Login</Link>
                </div>

                <Link to="/">
                    <img className="Logo" src={Logo} alt="Logo da empresa Jobby Jobs" />
                </Link>
            </nav>
        </div>
    );
}

export default Menu;