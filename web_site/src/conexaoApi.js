
const base_url = "https://gfinserver.herokuapp.com/api/"

export const endpoints = {
    usuario: base_url + "usuarios/",
    receitas: base_url + "receitas/",
    despesas: base_url + "despesas/",
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