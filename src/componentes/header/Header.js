import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default class Header extends Component {

    render() {
        return (
            <header className="meu-header">
                
                <Link to="/" className="logo-header"></Link>

                <ul className="listagem-departamentos">
                    <li>
                        <Link id="link-react" to="/produtos/feminino" className="departamento">FEMININO</Link>
                    </li>
                    <li>
                        <Link id="link-react" to="/produtos/masculino" className="departamento">MASCULINO</Link>
                    </li>
                    <li>
                        <Link id="link-react" to="/produtos/infantil" className="departamento">INFANTIL</Link>
                    </li>
                    <li>
                        <Link id="link-react" to="/produtos/eletronicos" className="departamento">ELETRÔNICOS</Link>
                    </li>
                    <li>
                        <Link id="link-react" to="/produtos/promocoes" className="departamento">PROMOÇÕES</Link>
                    </li>
                </ul>

                <div className="login-wrapper">
                    <div className="img-user"></div>
                    <ul className="listagem-login">
                        <li>
                            <Link id="link-react" to="/cadastro" className="cadastro-link">crie sua conta</Link>
                        </li>
                        <li>
                            <Link id="link-react" to="/entrar" className="entrar-link">entrar</Link>
                        </li>
                    </ul>
                </div>
            </header>
            
        );
    }
}