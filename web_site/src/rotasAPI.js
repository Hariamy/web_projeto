
const base_url = "https://gfinserver.herokuapp.com/api/"

export const endpoints = {
    usuario: base_url + "usuarios/",
    email: base_url + "usuarios/enviaremail",
    receitas: base_url + "receitas/",
    receitas_editar: base_url + "receitas/editar/",
    despesas: base_url + "despesas/",
    despesas_editar: base_url + "despesas/editar/",
    categorias_receitas: base_url + "receitas/categorias/",
    categorias_despesas: base_url + "receitas/despesas/",
    
};

export const usuario_global = {
    state: {
        usuario: undefined
    },

    setUsuario (newUsuario) {
        this.state.usuario = newUsuario;
    },
    getUsuario () {
        return this.state.usuario;
    }
}