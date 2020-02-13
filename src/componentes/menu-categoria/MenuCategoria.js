import React, { Component } from "react";
import "./menuCategoria.css";
import { Link } from "react-router-dom";

export default class MenuCategoria extends Component {
    
    render() {
        return (
            <nav className="menu-categoria">
                <ul className="lista-categorias">
                {
                    this.props.categorias?.map(categoria => {
                        return (
                            <li>
                                <Link to={`/produtos/${this.props.departamento}/${categoria.titulo.toLowerCase()}`}> 
                                     { categoria.titulo }
                                </Link>
                            </li>
                        );
                    })
                }  
                </ul>
            </nav>
        );
    }
}