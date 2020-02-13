import React, { Component } from "react";
import MenuCategoria from "../menu-categoria/MenuCategoria";
import "./produtos.css";
import { Link } from "react-router-dom";

export default class Produtos extends Component {
    
    constructor(){
        super();
        this.state = {produtos: [], categorias:[], departamento:""};
    }

    componentWillMount(){

        let departamento = this.props.match.params.departamento;
        
        fetch("http://localhost:8082/" + departamento)
            .then(function(res) {
                return res.json();
            })
            .then(resposta => {
                this.carregarCategorias(departamento, resposta);
            });

    }

    //responsavel por carregar produtos após a mudança de rota
    componentWillReceiveProps(nextProps){

        let departamento = nextProps.match.params.departamento;

        fetch("http://localhost:8082/" + departamento)
            .then(function(res) {
                return res.json();
            })
            .then(produtos => {
                this.carregarCategorias(departamento, produtos);
            });
    }

    carregarCategorias(departamento, produtos){

        fetch("http://localhost:8082/categoria" + departamento)
            .then(function(res) {
                return res.json();
            })
            .then(resposta => {
                this.setState({produtos: produtos, categorias: resposta, departamento: departamento});
            });
    }

    render(){
        return (
            <div className="feminino-wrapper">
                <MenuCategoria categorias={this.state.categorias} departamento={this.state.departamento} className='menuCategoria'></MenuCategoria>
                <section className='produtos-femininos'>
                    {
                        this.state.produtos?.map(produto => {
                            if(produto.categoria.toLowerCase() == this.props.match.params.categoria){
                                return (
                                    <Link to={`/produto/${this.state.departamento}/${produto.id}`}>
                                        <div className="produto-wrapper">
                                            <img src={produto?.foto}></img>
                                            <div className="infos-wrapper">
                                                <p>{produto?.titulo}</p>
                                                <p>{produto?.preco}</p>
                                            </div>
                                        </div>
                                    </Link>
                                );  
                            }else if(this.props.match.params.categoria == null){
                                return (
                                    <Link to={`/produto/${this.state.departamento}/${produto.id}`}>
                                        <div className="produto-wrapper">
                                            <img src={produto?.foto}></img>
                                            <div className="infos-wrapper">
                                                <p>{produto?.titulo}</p>
                                                <p>{produto?.preco}</p>
                                            </div>
                                        </div>
                                    </Link>
                                );  
                            }
                        })
                    }
                </section>
            </div>
        );
    }

}