import React, { Component } from "react";
import "./infoProduto.css";

export default class InfoProduto extends Component {
    
    constructor(){
        super();
        this.state = {produto: ""};
    }

    componentWillMount(){

        let departamento = this.props.match.params.departamento;
        let id = this.props.match.params.id;
        
        fetch("http://localhost:8082/" + departamento  + "/" + id)
            .then(function(res) {
                return res.json();
            })
            .then(produto => {
                console.log(produto);
                this.setState({produto: produto});
            });

    }

    //responsavel por carregar produtos após a mudança de rota
    componentWillReceiveProps(nextProps){

        let departamento = nextProps.match.params.departamento;
        let id = nextProps.match.params.id;

        fetch("http://localhost:8082/" + departamento + "/" + id)
            .then(function(res) {
                return res.json();
            })
            .then(produto => {
                console.log(produto);
                this.setState({produto: produto});
            });
    }

    render(){
        return (
            <div className="produto-info-wrapper">
                <img src={this.state.produto?.foto}></img>
                <div className="infos-produto-wrapper">
                    <div className="decoracao1"></div>
                    <div className="decoracao2"></div>
                    <p>{this.state.produto?.titulo}</p>
                    <p>R$ {this.state.produto?.preco}</p>
                </div>
            </div>
        );
    }
}