<template>
  <div class="ganhos">

    <div class=" margem p-2 my-3 rounded shadow-sm border border-danger">
      
      <h3 class="text-center text-danger font-weight-bold text-uppercase">DESPESAS</h3>
      
      <div v-if="exibe_despesas" class="margem-tabela">
        <div class="table-responsive">
            <table class="table table-fixed text-center">
                <thead>
                    <tr>
                        <th scope="col" class="col-2">DATA</th>
                        <th scope="col" class="col-3">NOME</th>
                        <th scope="col" class="col-2">CATEGORIA</th>
                        <th scope="col" class="col-2">VALOR</th>
                        <th scope="col" class="col-3">OPÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="despesa in usuario.despesas" :key="despesa.id">
                        <td class="col-2">{{ despesa.data }}</td>
                        <td class="col-3">{{ despesa.nome }}</td>
                        <td class="col-2">{{ nome_categoria(despesa.categoria) }}</td>
                        <td class="col-2">{{ formatar(despesa.valor) }}</td>
                        <td class="col-3">
                          <div class="d-flex justify-content-center">
                            <div class="col-md-2">
                              <img src="../assets/editar.svg" v-on:click="() => { seleciona_despesa(despesa.id); edit_despesa=!edit_despesa; }" />
                            </div>
                            <div class="col-md-1"></div>
                            <div class="col-md-2">
                              <img src="../assets/deletar.svg" v-on:click="() => { seleciona_despesa(despesa.id); excluir_despesa=!excluir_despesa }" />
                            </div>
                          </div>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
      <div v-else>
        <h5 class="text-center font-weight-bold">Nenhuma despesa cadastrada!<br>Clique no botão abaixo para adicionar uma despesa.</h5>
      </div>
      <div class="d-flex flex-row-reverse align-items-stretch">
        <div class="p-4">
          <img class="add-receita-botao" v-on:click="add_despesa=!add_despesa" src="../assets/add_despesa.svg" />
        </div>
         <div class="p-4"></div>
      </div>
    </div>

    <!--MODAL EDITAR -->
        <!--MODAL EDITAR RECEITA-->
    <div class="d-flex justify-content-center add-receita-externo" v-if="edit_despesa">
      <div class="add-receita shadow rounded align-self-center">
        <h3 class="font-weight-bold d-flex justify-content-center">EDITAR DESPESAS</h3>
        <br>
        <div class="d-flex justify-content-center">
          <div>
            <div class="form-group">
              <input 
                type="text" 
                class="form-control col-12" 
                placeholder="Nome" 
                v-model="nome_despesa"
              />
            </div>
            <div class="form-group">
              <input 
                type="date" 
                class="form-control col-12" 
                v-model="data_despesa"
              />
            </div>
            <div class="form-group">
              <input 
                type="text" 
                class="form-control col-12" 
                placeholder="Valor" 
                v-model="valor_despesa"
              />
            </div>
            <div class="form-group">
              <select class="custom-select col-12" id="inputGroupSelect01" v-model="categoria_despesa">
                <option value="" selected disabled hidden>Escolha uma categoria</option>
								<option v-for="cat in usuario.categorias_despesas" :key="cat.id" :value="cat.id">{{ cat.nome }}</option>
              </select>
            </div>
            <div class="d-flex justify-content-center">
              <button class="btn btn-danger" v-on:click="() => { limpar_campos(); edit_despesa=!edit_despesa }">CANCELAR</button>
              <button class="btn btn-primary" v-on:click="editar_despesa">EDITAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--MODAL INSERIR -->
    <div class="d-flex justify-content-center add-receita-externo" v-if="add_despesa">
      <div class="add-receita shadow rounded align-self-center">
        <h3 class="font-weight-bold d-flex justify-content-center">INSERIR DESPESAS</h3>
        <br>
        <div class="d-flex justify-content-center">
          <div>
            <div class="form-group">
              <input 
                type="text" 
                class="form-control col-12" 
                placeholder="Nome" 
                v-model="nome_despesa">
            </div>
            <div class="form-group">
              <input 
                type="date" 
                placeholder="Data"
                class="form-control col-12" 
                v-model="data_despesa"
              />
            </div>
            <div class="form-group">
              <input 
                type="text" 
                class="form-control col-12" 
                placeholder="Valor" 
                v-model="valor_despesa"
              />
            </div>
            <div class="form-group">
              <select class="custom-select col-12" id="inputGroupSelect01" v-model="categoria_despesa">
                <option value="" selected disabled hidden>Escolha uma categoria</option>
								<option v-for="cat in usuario.categorias_despesas" :key="cat.id" :value="cat.id">{{ cat.nome }}</option>
              </select>
            </div>        
            <div class="d-flex justify-content-center">
              <button class="btn btn-danger" v-on:click="() => { limpar_campos(); add_despesa=!add_despesa }">CANCELAR</button>
              <button class="btn btn-primary" v-on:click="adicionar_despesa">CRIAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--MODAL EXCLUIR-->
    <div class="d-flex justify-content-center add-receita-externo" v-if="excluir_despesa">
      <div class="add-receita shadow rounded align-self-center">
        <h3 class="font-weight-bold text-danger d-flex justify-content-center">EXCLUIR RECEITA</h3>
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
                <td scope="col">{{ nome_despesa }}</td>
              </tr>
              <tr>
                <td scope="col">Data</td>
                <td scope="col">{{ data_despesa }}</td>
              </tr>
              <tr>
                <td scope="col">Valor</td>
                <td scope="col">{{ valor_despesa }}</td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-center">
            <button class="btn btn-primary" v-on:click="() => { limpar_campos(); excluir_despesa=!excluir_despesa }">CANCELAR</button>
            <button class="btn btn-danger" v-on:click="remover_despesa">DELETAR</button>
          </div>
      </div>
    </div>

  </div>

</template>

<script>
import { endpoints } from "../rotasAPI"

export default {
  name: "Despesas",
  props: {
  },
  data() {
    return {
      add_despesa: false,
      edit_despesa: false,
      excluir_despesa: false,
      data:null,
      nome:null,
      valor:null,
      usuario: undefined,

      exibe_despesas: false,

      nome_despesa: null,
      data_despesa: null,
      valor_despesa: null,
      categoria_despesa: null,
      id_despesa: null,
    };
  },
  methods: {
    formatar: function(valor) {
      try {
        return parseFloat(valor).toFixed(2)
      } catch { return 0 }
    },
    nome_categoria: function (id) {
      try {
        return this.usuario.categorias_despesas.find(obj => id == obj.id).nome;
      } catch { "" }
    },
    esconde_opcoes: function() {
      if (this.opcoes_menu) {
        this.botao_menu = true;
        this.opcoes_menu = false;
      }
    },
    limpar_campos: function () {
      this.nome_despesa = "";
      this.data_despesa = "";
      this.valor_despesa = "";
      this.categoria_despesa = "";
    },
    adicionar_despesa: async function () {
      const response = await fetch(endpoints.despesas + this.usuario.email, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify ({
          nome: this.nome_despesa,
          data: this.data_despesa,
          valor: this.valor_despesa,
          categoria: this.categoria_despesa
        })
      })
      
      if (await response != undefined) {
        this.usuario = await response.json();
        this.limpar_campos();
        if (this.usuario.despesas.length > 0) this.exibe_despesas = true;

        this.add_despesa = !this.add_despesa;
        this.$parent.update();

      }
    },

    seleciona_despesa: async function (despesa) {
      const index = this.usuario.despesas.findIndex(obj => obj.id === despesa);

      this.nome_despesa = this.usuario.despesas[index].nome
      this.data_despesa = this.usuario.despesas[index].data
      this.valor_despesa = this.usuario.despesas[index].valor
      this.categoria_despesa = this.usuario.despesas[index].categoria
      this.id_despesa = this.usuario.despesas[index].id      
    },

    editar_despesa: async function () {
      const response = await fetch(endpoints.despesas_editar + this.usuario.email, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify ({
          id: this.id_despesa,
          nome: this.nome_despesa,
          data: this.data_despesa,
          valor: this.valor_despesa,
          categoria: this.categoria_despesa
        })
      })
      
      this.usuario = await response.json();
      
      if (await response != undefined) {
        this.edit_despesa = !this.edit_despesa;
        this.$parent.update();
      }
    },

    remover_despesa: async function () {
      const query = "?item_id=" + this.id_despesa 
      const response = await fetch(endpoints.despesas + this.usuario.email + query,  { method: 'DELETE'})
      
      
      if (await response != undefined) {
        this.usuario = await response.json();
        
        if (this.usuario.despesas.length == 0) this.exibe_despesas = false;
        
        this.excluir_despesa = !this.excluir_despesa;
        this.limpar_campos();
        this.$parent.update();
      }
    }
  },
  created: async function () {
    this.limpar_campos();
    const email = localStorage.email;
    const response = await fetch(endpoints.usuario + email);
    this.usuario = await response.json();
    if (this.usuario.despesas.length > 0) this.exibe_despesas = true;
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
.margem-tabela {
  margin: 20px;
  padding: 20px;
}

button {
  margin: 10px;
}


a {
  margin: 10px;
}
img {
  height: 30px;
  width: 30px;
  cursor: pointer;

}
h5 {
  margin: 200px;
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
  background-color: rgba(25, 25, 25, 0.5)
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
