const base_url = "http://localhost:3001/api/";

export const endpoints = {
  usuario: base_url + "usuarios/",
  receitas: base_url + "receitas/",
  despesas: base_url + "despesas/",

  receitas_editar: base_url + "receitas/editar/",
  despesas_editar: base_url + "despesas/editar/",

  categorias_receitas: base_url + "categorias/receitas/",
  categorias_despesas: base_url + "categorias/despesas/",

  categorias_receitas_editar: base_url + "categorias/receitas/editar/",
  categorias_despesas_editar: base_url + "categorias/despesas/editar/",
};

export const usuario_global = {
  state: {
    usuario: undefined,
  },

  setUsuario(newUsuario) {
    this.state.usuario = newUsuario;
  },
  getUsuario() {
    return this.state.usuario;
  },
};
