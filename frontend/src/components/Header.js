// src/components/Header.js
import React from 'react';
import '../styles/Header.css';  // Importando o CSS do Header
import Logo from "../assets/images/logo.png"
import Home from "../assets/images/home.png"
import Lupa from "../assets/images/Lupa.png"
const Header = () => {
    return (
        <header>
            <nav>
                <div className="nav-container">
                    <div className="nav-container-left">
                        <img className="Logo" src= {Logo} alt="Logo" />
                        <ul className="nav-links">
                            <li><a href="home.html"><img className="Home" src={Home} alt="home" />Home</a></li>
                            <li><a href="vagas.html" className="troca">Vagas</a></li>
                        </ul>
                    </div>
                    <div className="search-container">
                        <a className="search-btn" href="#"><img className="lupa" src= {Lupa} alt="lupa" /></a>
                        <input className="search-txt" type="text" />
                    </div>
                    <div className="nav-cont-right">
                        <button className="nav-button" onClick={() => window.open('l', '_blank')}>Login</button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
