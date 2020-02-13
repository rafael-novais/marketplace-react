export default class ApiService {

    listarProdutosFemininos(){
        fetch("http://localhost:8082/feminino")
            .then(res => {
                return res.json();
            });
    }

}