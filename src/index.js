import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './telas/home/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import "../node_modules/reset.css/reset.css";
import Header from "./componentes/header/Header";
import Produtos from './componentes/produtos/Produtos';
import InfoProduto from './componentes/info-produto/InfoProduto';

ReactDOM.render(
 
    <BrowserRouter>
    <Header></Header>
        <Switch>
            <Route path="/" component={ App } exact={true}></Route>
            <Route path="/produtos/:departamento" component={ Produtos } exact={true}></Route>
            <Route path="/produtos/:departamento/:categoria" component={ Produtos } exact={true}></Route>
            <Route path="/produto/:departamento/:id" component={ InfoProduto } exact={true}></Route>
        </Switch>
    </BrowserRouter>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
