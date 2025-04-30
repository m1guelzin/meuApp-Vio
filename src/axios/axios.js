import axios from "axios";

const api = axios.create({
    baseURL:"http://10.89.240.86:5000/api/v1/",
    headers:{
        'accept':'application/json'
    }
})

const sheets = {
    postLogin:(user)=>api.post("login/",user),
    postCadastro: (user) => api.post("user/", user),
    postCadastroEvento: (evento) => api.post("evento/", evento),
    postCadastroOrganizador: (organizador) => api.post("organizador/", organizador),
    postCadastroIngresso: (ingresso) => api.post("ingresso/", ingresso),
    getEventos: () => api.get("evento"),
    getIngressosPorEvento: (idEvento) => api.get(`ingresso/evento/${idEvento}`),
    createIngresso: (dados) => api.post("/ingresso", dados),
}
export default sheets;