// Biblioteca que permite fazer requisições HTTP
import axios from "axios";

// Endpoint para a autenticação na API
const url = "http://localhost:8443/login"

class AutenticacaoService {
    login(user){
        const config = {
            // Define que a aplicação que estiver fazendo a requisição deve enviar cookies ou token
            withCredentials: true
        };
        console.log("Chamou o método")
        return axios.post(url + "/auth", user, config);
    }
}

export default new AutenticacaoService();