<template>
  <div class="ganhos">
    <div class="margem p-2 my-3 rounded shadow-sm border border-warning">
      <h3 class="text-center text-warning font-weight-bold text-uppercase">CATEGORIA</h3>

      <div class="d-flex">
        <div class="p-6 align-self-center flex-fill">
          <div v-if="exibe_categorias_receitas" class="margem-tabela">
            <div class="table-responsive">
              <table class="table table-fixed text-center">
                <h4 class="text-success">Categorias Receitas</h4>
                <thead>
                  <tr>
                    <th scope="col" class="col-5">NOME</th>
                    <th scope="col" class="col-2">COR</th>
                    <th scope="col" class="col-4">OPÇÕES</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="categoria in usuario.categorias_receitas" :key="categoria.id">
                    <td class="col-5">{{ categoria.nome }}</td>
                    <td class="col-2 d-flex justify-content-center">
                      <div class="cor" v-bind:style="{ backgroundColor: categoria.cor }"></div>
                    </td>
                    <td class="col-4">
                      <div class="d-flex justify-content-center">
                        <div class="col-md-2">
                          <img src="../assets/editar.svg" v-on:click="() => { seleciona_categoria_receita(categoria.id); edit_categorias_receita=!edit_categorias_receita; }"/>
                        </div>
                        <div class="col-md-1"></div>
                        <div class="col-md-2">
                          <img src="../assets/deletar.svg" v-on:click="() => { seleciona_categoria_receita(categoria.id); excluir_categoria_receita=!excluir_categoria_receita }" />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div v-else><h6 class="text-center font-weight-bold">Nenhuma categoria de receita cadastrada!<br>Clique no botão abaixo para adicionar uma categoria de receita.</h6></div>
        </div>

        <div class="p-6 align-self-center flex-fill">
          <div v-if="exibe_categorias_despesas" class="margem-tabela">
            <div class="table-responsive">
              <table class="table table-fixed text-center">
                <h4 class="text-danger">Categorias Despesas</h4>
                <thead>
                  <tr>
                    <th scope="col" class="col-5">NOME</th>
                    <th scope="col" class="col-2">COR</th>
                    <th scope="col" class="col-4">OPÇÕES</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="categoria in usuario.categorias_despesas" :key="categoria.id">
                    <td class="col-5">{{ categoria.nome }}</td>
                    <td class="col-2 d-flex justify-content-center">
                      <div class="cor" v-bind:style="{ backgroundColor: categoria.cor }"></div>
                    </td>
                    <td class="col-4">
                      <div class="d-flex justify-content-center">
                        <div class="col-md-2">
                          <img src="../assets/editar.svg" v-on:click="() => { seleciona_categoria_despesa(categoria.id); edit_categorias_despesa=true; }"/>
                        </div>
                        <div class="col-md-1"></div>
                        <div class="col-md-2">
                          <img src="../assets/deletar.svg" v-on:click="() => { seleciona_categoria_despesa(categoria.id); excluir_categoria_despesa=true }" />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div v-else><h6 class="text-center font-weight-bold">Nenhuma categoria de despesa cadastrada!<br>Clique no botão abaixo para adicionar uma categoria de despesa.</h6></div>
        </div>
      </div>

      <div class="d-flex flex-row-reverse align-items-stretch">
        <div class="p-4">
          <img
            class="add-receita-botao"
            v-on:click="add_categoria=!add_categoria"
            src="../assets/add_categoria.svg"
          />
        </div>
        <div class="p-4"></div>
      </div>
    </div>

    <!--EDITAR CATEGORIA RECEITA-->
    <div class="d-flex justify-content-center add-receita-externo" v-if="edit_categorias_receita">
      <div class="add-receita shadow rounded align-self-center">
        <h3 class="font-weight-bold d-flex justify-content-center">EDITAR CATEGORIA</h3>
        <br>
        <div class="d-flex justify-content-center">
          <div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Nome"
                v-model="nome_categoria"
                id="nome-categoria"
              />
            </div>

            <div class="form-group">
              <input 
                type="text" 
                class="form-control" 
                placeholder="#000000" 
                v-model="cor_categoria" />
            </div>
            <div class="d-flex justify-content-center">
              <button class="btn btn-danger" v-on:click="edit_categorias_receita=!edit_categorias_receita; ">CANCELAR</button>
              <button class="btn btn-success" v-on:click="() => editar_categoria(true)">SALVAR EDIÇÃO</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--EDITAR CATEGORIA DESPESA-->
    <div class="d-flex justify-content-center add-receita-externo" v-if="edit_categorias_despesa">
      <div class="add-receita shadow rounded align-self-center">
        <h3 class="font-weight-bold d-flex justify-content-center">EDITAR CATEGORIA</h3>
        <br>
        <div class="d-flex justify-content-center">
          <div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Nome"
                v-model="nome_categoria"
                id="nome-categoria"
              />
            </div>

            <div class="form-group">
              <input 
                type="text" 
                class="form-control" 
                placeholder="#000000" 
                v-model="cor_categoria" />
            </div>
            <div class="d-flex justify-content-center">
              <button class="btn btn-danger" v-on:click="edit_categorias_despesa=false; ">CANCELAR</button>
              <button class="btn btn-success" v-on:click="() => editar_categoria(false)">SALVAR EDIÇÃO</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--INSERIR CATEGORIA-->
    <div class="d-flex justify-content-center add-receita-externo" v-if="add_categoria">
      <div class="add-receita shadow rounded align-self-center">
        <h3 class="font-weight-bold d-flex justify-content-center">INSERIR CATEGORIA</h3>
        <br />
        <div class="d-flex justify-content-center">
          <div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Nome"
                v-model="nome_categoria"
                id="nome-categoria"
              />
            </div>

            <div class="form-group justify-content-start">
                <input type="text" class="form-control" placeholder="#000000" v-model="cor_categoria" />
            </div>

            <div class="form-group justify-content-center">
              <label class="radio"><input type="radio" v-model="tipo_categoria" value="receita" name="optradio" checked>Receita</label>
              <label class="radio"><input type="radio" v-model="tipo_categoria" value="despesa" name="optradio">Despesa</label>
            </div>

            <div class="d-flex justify-content-center">
              <button class="btn btn-danger" v-on:click="limpar_campos(); add_categoria=!add_categoria">CANCELAR</button>
              <button class="btn btn-success" v-on:click="adicionar_categoria()">CRIAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--MODAL EDITAR EXCLUIR-->
    <div class="d-flex justify-content-center add-receita-externo" v-if="excluir_categoria_receita">
      <div class="add-receita shadow rounded align-self-center">
        <h3 class="font-weight-bold text-danger d-flex justify-content-center">EXCLUIR CATEGORIA</h3>
        <br>
          <table class="table text-center table-sm">
            <thead class="thead-dark">
              <tr>
                <th scope="col">ATRIBUTO</th>
                <th scope="col">VALOR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="col">Nome</td>
                <td scope="col">{{ nome_categoria }}</td>
              </tr>
              <tr>
                <td scope="col">Cor</td>
                <td scope="col"> <div class="cor" v-bind:style="{ backgroundColor: cor_categoria }"></div></td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-center">
            <button class="btn btn-primary" v-on:click="() => { limpar_campos(); excluir_categoria_receita=!excluir_categoria_receita }">CANCELAR</button>
            <button class="btn btn-danger" v-on:click="() => remover_categoria(true)">DELETAR</button>
          </div>
      </div>
    </div>

    <!--MODAL EDITAR EXCLUIR-->
    <div class="d-flex justify-content-center add-receita-externo" v-if="excluir_categoria_despesa">
      <div class="add-receita shadow rounded align-self-center">
        <h3 class="font-weight-bold text-danger d-flex justify-content-center">EXCLUIR CATEGORIA</h3>
        <br>
          <table class="table text-center table-sm">
            <thead class="thead-dark">
              <tr>
                <th scope="col">ATRIBUTO</th>
                <th scope="col">VALOR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="col">Nome</td>
                <td scope="col">{{ nome_categoria }}</td>
              </tr>
              <tr>
                <td scope="col">Cor</td>
                <td scope="col"> <div class="cor" v-bind:style="{ backgroundColor: cor_categoria }"></div></td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-center">
            <button class="btn btn-primary" v-on:click="() => { limpar_campos(); excluir_categoria_despesa=false }">CANCELAR</button>
            <button class="btn btn-danger" v-on:click="() => remover_categoria(false)">DELETAR</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { endpoints } from "../rotasAPI"

export default {
  name: "Categoria",
  props: {
  },
  data() {
    return {
      add_categoria: false,
      edit_categorias_receita: false,
      edit_categorias_despesa: false,
      excluir_categoria_despesa: false,
      excluir_categoria_receita: false,
    
      usuario: undefined,

      exibe_categorias_receitas: false,
      exibe_categorias_despesas: false,

      nome_categoria: "",
      cor_categoria: "",
      tipo_categoria: "receita",
      id_categoria: "",
    };
  },
  methods: {
    formatar: function(valor) {
      try {
        return parseFloat(valor).toFixed(2)
      } catch {
        return 0
      }
    },
    esconde_opcoes: function() {
      if (this.opcoes_menu) {
        this.botao_menu = true;
        this.opcoes_menu = false;
      }
    },
    limpar_campos: function () {
      this.nome_categoria = "";
      this.cor_categoria = "";
      this.tipo_categoria = "receita";
      this.id_categoria = "";
    },
    adicionar_categoria: async function () {
      var add_rota;

      if (this.tipo_categoria === "receita") add_rota = endpoints.categorias_receitas
      else add_rota = endpoints.categorias_despesas
      
      const response = await fetch(add_rota + this.usuario.email, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify ({
          nome: this.nome_categoria,
          cor: this.cor_categoria
        })
      })
      
      if (await response != undefined) {
        this.usuario = await response.json();

        if (this.usuario.categorias_receitas.length > 0) this.exibe_categorias_receitas = true;
        if (this.usuario.categorias_despesas.length > 0) this.exibe_categorias_despesas = true;
        
        this.limpar_campos(); 
        this.add_categoria = !this.add_categoria;
      }
    },

    seleciona_categoria_receita: async function (receita) {
      const index = this.usuario.categorias_receitas.findIndex(obj => obj.id === receita);

      this.nome_categoria = this.usuario.categorias_receitas[index].nome
      this.cor_categoria = this.usuario.categorias_receitas[index].cor
      this.id_categoria = this.usuario.categorias_receitas[index].id      
    },
    seleciona_categoria_despesa: async function (receita) {
      const index = this.usuario.categorias_despesas.findIndex(obj => obj.id === receita);

      this.nome_categoria = this.usuario.categorias_despesas[index].nome
      this.cor_categoria = this.usuario.categorias_despesas[index].cor
      this.id_categoria = this.usuario.categorias_despesas[index].id 
      
    },

    editar_categoria: async function (receita) {
      var rota;
      if (receita) rota = endpoints.categorias_receitas_editar
      else rota = endpoints.categorias_despesas_editar
      
      const response = await fetch(rota + this.usuario.email, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify ({
          id: this.id_categoria,
          nome: this.nome_categoria,
          cor: this.cor_categoria
        })
      })
      
      this.edit_categorias_receita = false;
      this.edit_categorias_despesa = false;
      
      if (await response != undefined) {
        this.usuario = await response.json();

        
        this.limpar_campos(); 
      }
    },

    remover_categoria: async function (receita) {
      var rota;
      if (receita) rota = endpoints.categorias_receitas
      else rota = endpoints.categorias_despesas
      
      const query = "?item_id=" + this.id_categoria
      const response = await fetch(rota + this.usuario.email + query,  { method: 'DELETE'})
      
      if (await response != undefined) {
        this.usuario = await response.json();

        if (this.usuario.categorias_receitas.length == 0) this.exibe_categorias_receitas = false;
        if (this.usuario.categorias_despesas.length == 0) this.exibe_categorias_despesas = false;
        
        this.limpar_campos();
        
        this.excluir_categoria_receita = false;
        this.excluir_categoria_despesa = false;

      }
    }
  },
  created: async function () {
    this.limpar_campos();
    const email = localStorage.email;
    const response = await fetch(endpoints.usuario + email);
    this.usuario = await response.json();
    if (this.usuario.categorias_receitas.length > 0) this.exibe_categorias_receitas = true;
    if (this.usuario.categorias_despesas.length > 0) this.exibe_categorias_despesas = true;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.margem {
  margin: 60px;
  margin-left: 160px;
  padding: 60px;
}

button {
  margin: 10px;
}

.margem-tabela {
  margin: 20px;
  padding: 20px;
}

.cor {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

label {
  padding: 10px;
}
h6 {
  margin: 200px 50px;

}
a {
  margin: 10px;
}
img {
  height: 30px;
  width: 30px;
  cursor: pointer;
}

.add-receita-botao {
  width: 60px;
  height: 60px;
  cursor: pointer;
}

.add-receita {
  position: absolute;
  width: 600px;
  background-color: white;
  padding: 20px;
  z-index: 99;
  left: auto;
  right: auto;
}

.add-receita-externo {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
  background-color: rgba(25, 25, 25, 0.5);
}

.fechar-botao {
  right: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.table-fixed tbody {
  height: 40vh;
  overflow-y: auto;
  width: 100%;
}

.table-fixed thead,
.table-fixed tbody,
.table-fixed tr,
.table-fixed td,
.table-fixed th {
  display: block;
}

.table-fixed tbody td,
.table-fixed tbody th,
.table-fixed thead > tr > th {
  float: left;
  position: relative;
}
</style>
