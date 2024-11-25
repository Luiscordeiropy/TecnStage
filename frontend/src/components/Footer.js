// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';  // Importando o CSS do Footer

const Footer = () => {
    return (
        <footer>
            <div id="magnata">
                <ul>
                    <li id="tamanho"><a href="#">Início</a></li>
                    <li id="letra"><a href="#">Home</a></li>
                    <li id="letra"><a href="#">Vagas</a></li>
                </ul>
                <ul>
                    <li id="tamanho"><a href="#">Sobre-nós</a></li>
                    <li id="letra"><a href="#">Informações da empresa</a></li>
                    <li id="letra"><a href="#">Contato</a></li>
                </ul>
                <ul>
                    <li id="tamanho"><a href="#">Suporte</a></li>
                    <li id="letra"><a href="#">FAQ</a></li>
                    <li id="letra"><a href="#">CHAT</a></li>
                </ul>
                <div className="footer-logo">
                    <img src="/img/9b48d6a1eab231d532eece4839d69d53.png" alt="Logo" />
                </div>
            </div>
            <div className="rodape">
                <p>&copy;2019 Copyright - Programador Viking</p>
            </div>
        </footer>
    );
};

export default Footer;
